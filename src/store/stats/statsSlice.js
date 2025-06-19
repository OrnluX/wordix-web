import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nombreJugador: '',
  historial: [],
}

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    setNombreJugador: (state, action) => {
      state.nombreJugador = action.payload
    },
    resetStats: (state) => {
      state.nombreJugador = ''
      state.historial = []
    },
  },
})

export const { setNombreJugador, resetStats } = statsSlice.actions
export default statsSlice.reducer
