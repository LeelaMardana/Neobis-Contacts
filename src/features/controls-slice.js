import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  filter: 'sortA-Z',
};

const controlsSlice = createSlice({
  name: '@@controls',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    clearControls: () => initialState,
  },
});

export const { setSearch, clearControls, setFilter } = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;

export const selectSearch = state => state.controls.search;
export const selectControls = state => state.controls;
