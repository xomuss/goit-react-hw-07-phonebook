import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import phonebookReduser from './phonebook/phonebook-reduser';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';

const rootReduser = combineReducers({
  contacts: phonebookReduser,
});

// const rootReduser = combineReducers({
//   contacts: phonebookReduser,
// });

// const store = createStore(rootReduser, composeWithDevTools());
console.log(getDefaultMiddleware());
console.log(process.env.NODE_ENV);

const store = configureStore({
  reducer: rootReduser,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

// const persistor = persistStore(store);

export default store;
