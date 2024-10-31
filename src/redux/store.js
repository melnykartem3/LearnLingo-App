import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import teachersReducer from './teachers/slice.js';
import authReducer from './auth/slice.js';
import filtersReducer from './filters/slice.js';
import favoritesReducer from './favorites/slice.js';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
};

export const store = configureStore({
  reducer: {
    teachers: teachersReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    filters: filtersReducer,
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
