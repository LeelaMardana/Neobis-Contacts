import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadCountacts = createAsyncThunk(
  '@@contacts/load-contacts',
  (_, { extra: { client, api } }) => {
    return client.get(api.ALL_COUNTACTS);
  }
);

const initialState = {
  status: 'idle',
  error: null,
  list: [],
  detailsID: 0,
};

const contactsSlice = createSlice({
  name: '@@contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadCountacts.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadCountacts.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || action.meta.error;
      })
      .addCase(loadCountacts.fulfilled, (state, action) => {
        state.status = 'received';
        state.list = action.payload.data.data;
      });
  },
});

export const { setDetails } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// Selects
export const selectAllContacts = state => state.contacts.list;
export const selectContactsStatus = state => ({
  status: state.contacts.status,
  error: state.contacts.error,
  qty: state.contacts.list.length,
});
