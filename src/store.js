import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './features/contacts-slice';
import { controlsReducer } from './features/controls-slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    controls: controlsReducer,
  },
});
