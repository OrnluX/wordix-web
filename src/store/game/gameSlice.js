import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentWord: '', // Palabra a adivinar
  attempts: [], // Palabras que intentó el jugador
  keyboard: {}, // Estado de las letras (ej: { A: 'green', B: 'gray' })
  status: 'idle', // 'idle' | 'playing' | 'won' | 'lost'
  currentAttempt: '',
  shouldReset: false, // Indica si se debe reiniciar el juego
  invalidAttempt: false,
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setCurrentWord: (state, action) => {
      state.currentWord = action.payload
    },
    addAttempt: (state, action) => {
      state.attempts.push(action.payload)
    },
    updateKeyboard: (state, action) => {
      state.keyboard = {
        ...state.keyboard,
        ...action.payload,
      }
    },
    setStatus: (state, action) => {
      state.status = action.payload
    },
    resetGame: (state) => {
      state.currentWord = ''
      state.attempts = []
      state.keyboard = {}
      state.status = 'reset'
      state.currentAttempt = ''
      state.shouldReset = true
    },
    setCurrentAttempt: (state, action) => {
      state.currentAttempt = action.payload
    },
    appendLetterToCurrentAttempt: (state, action) => {
      if (state.currentAttempt.length < 5) {
        state.currentAttempt += action.payload.toUpperCase()
      }
    },
    removeLastLetterFromCurrentAttempt: (state) => {
      state.currentAttempt = state.currentAttempt.slice(0, -1)
    },
    acknowledgeReset: (state) => {
      state.shouldReset = false
    },
    submitAttempt: (state) => {
      if (state.currentAttempt.length === 5) {
        const intento = state.currentAttempt.toUpperCase()
        const palabra = state.currentWord.toUpperCase()
        const nuevoEstadoTeclado = { ...state.keyboard }

        for (let i = 0; i < intento.length; i++) {
          const letra = intento[i]

          if (palabra[i] === letra) {
            nuevoEstadoTeclado[letra] = 'green'
          } else if (palabra.includes(letra)) {
            if (nuevoEstadoTeclado[letra] !== 'green') {
              nuevoEstadoTeclado[letra] = 'yellow'
            }
          } else {
            if (!nuevoEstadoTeclado[letra]) {
              nuevoEstadoTeclado[letra] = 'gray'
            }
          }
        }

        state.keyboard = nuevoEstadoTeclado

        const colores = intento.split('').map((letra, i) => {
          if (palabra[i] === letra) return 'green'
          if (palabra.includes(letra)) return 'yellow'
          return 'gray'
        })

        state.attempts.push({ palabra: intento, colores })

        if (intento === palabra) {
          state.status = 'won'
        } else if (state.attempts.length >= 6) {
          state.status = 'lost'
        }

        state.currentAttempt = ''
      }
    },
    markInvalidAttempt: (state) => {
      state.invalidAttempt = true
    },
    clearInvalidAttempt: (state) => {
      state.invalidAttempt = false
    },
  },
})

export const {
  setCurrentWord,
  addAttempt,
  updateKeyboard,
  setStatus,
  resetGame,
  setCurrentAttempt,
  appendLetterToCurrentAttempt,
  removeLastLetterFromCurrentAttempt,
  submitAttempt,
  acknowledgeReset,
  markInvalidAttempt,
  clearInvalidAttempt,
} = gameSlice.actions

export default gameSlice.reducer
