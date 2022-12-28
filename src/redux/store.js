import {  configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './items/contactsSlice';
import { filterReducer } from './filter/filterSlice';
import { authReducer } from './auth';

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
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

//*       Persist            //
// const persistConfig = {
//   key: 'root',
//   storage,
// };

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedContacts = persistReducer(authPersistConfig, contactsReducer);
const persistAuth = persistReducer(authPersistConfig, authReducer);

// const rootReducer = combineReducers({
//   filter: filterReducer,
//   phonebook: persistedContacts,
// });

export const store = configureStore({
  reducer: {
    auth: persistAuth,
    filter: filterReducer,
  phonebook: persistedContacts,
    // reducer: rootReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
