import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  getStoredState,
  FLUSH,
  PAUSE,
  PERSIST,
  REHYDRATE,
  PURGE,
  REGISTER
} from "redux-persist"
import storage from 'redux-persist/lib/storage';
import detalhesLink from './modules/detalhesLink'

const reducers = combineReducers({
  detalhesLink
})

const persistConfig = {
  key: "project-shortener",
  storage,
  blacklist: [
  ]
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  devTools: { trace: true },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, PAUSE, PERSIST, REHYDRATE, PURGE, REGISTER]
    }
  })
})

const persistor = persistStore(store)

const persistorInit = () => {
  getStoredState({
    storage,
    key: 'shortener'
  })}

persistorInit()

export type RootState = ReturnType<typeof reducers>
export { store, persistor }
