import { configureStore } from '@reduxjs/toolkit'
import { persistedReducer } from './persistor'
import { persistStore } from 'redux-persist'

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/REGISTER',
        ],
      },
    }),
})

export const persistor = persistStore(store)
