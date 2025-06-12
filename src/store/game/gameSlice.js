import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentWord: '', // Palabra a adivinar
  attempts: [], // Palabras que intentó el jugador
  keyboard: {}, // Estado de las letras (ej: { A: 'green', B: 'gray' })
  status: 'idle', // 'idle' | 'playing' | 'won' | 'lost'
  currentAttempt: '',
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
      state.status = 'idle'
      state.currentAttempt = ''
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
    submitAttempt: (state) => {
      if (state.currentAttempt.length === 5) {
        state.attempts.push(state.currentAttempt)
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
} = gameSlice.actions

export default gameSlice.reducer
