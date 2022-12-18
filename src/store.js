import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './features/contacts-slice';

import * as api from './api';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // details: detailsReducer,
  },
  devTools: true,
  middleware: getDefaultMiddlware =>
    getDefaultMiddlware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
