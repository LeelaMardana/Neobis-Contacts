import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUsers } from '../api';

const initialState = {
  status: 'idle',
  error: null,
  list: [],
};

export const getContacts = createAsyncThunk(
  '@@get/contacts',
  async (_, err) => {
    try {
      const data = JSON.parse(localStorage.getItem('contacts'));
      if (data) return data;
      localStorage.setItem('contacts', JSON.stringify(await getUsers()));
      return JSON.parse(localStorage.getItem('contacts'));
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return err.rejectWithValue(message);
    }
  }
);

const contactsSlice = createSlice({
  name: '@@get',
  initialState,
  reducers: {
    updateContact: (_, action) => {
      const data = JSON.parse(localStorage.getItem('contacts'));
      const list = data.map(item => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
      localStorage.setItem('contacts', JSON.stringify(list));
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || action.meta.error;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.status = 'received';
        state.list = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { updateContact } = contactsSlice.actions;

// Selects
export const selectContacts = state => ({
  status: state.contacts.status,
  error: state.contacts.error,
  list: state.contacts.list,
});
