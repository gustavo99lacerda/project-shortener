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

const reducers = combineReducers({
})

const persistConfig = {
  key: "project-template",
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
  getStoredState(persistConfig)
}

persistorInit()

export type RootState = ReturnType<typeof reducers>
export { store, persistor }
