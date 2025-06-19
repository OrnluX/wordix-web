import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'

import gameReducer from './game/gameSlice'
import statsReducer from './stats/statsSlice'

const rootReducer = combineReducers({
  game: gameReducer,
  stats: statsReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)
