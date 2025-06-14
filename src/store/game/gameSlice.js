import { createSlice } from '@reduxjs/toolkit'
import { evaluarIntento } from '../../utils/verificador'

const initialState = {
  currentWord: '',
  attempts: [],
  keyboard: {},
  status: 'idle',
  currentAttempt: '',
  shouldReset: false,
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
    markInvalidAttempt: (state) => {
      state.invalidAttempt = true
    },
    clearInvalidAttempt: (state) => {
      state.invalidAttempt = false
    },
    submitAttempt: (state) => {
      if (state.currentAttempt.length === 5) {
        const intento = state.currentAttempt.toUpperCase()
        const palabra = state.currentWord.toUpperCase()

        const resultado = evaluarIntento(intento, palabra, state.keyboard)

        state.keyboard = resultado.nuevoEstadoTeclado
        state.attempts.push({
          palabra: resultado.palabra,
          colores: resultado.colores,
        })

        if (resultado.ganaste) {
          state.status = 'won'
        } else if (state.attempts.length >= 6) {
          state.status = 'lost'
        }

        state.currentAttempt = ''
      }
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
