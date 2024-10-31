import { createSlice } from '@reduxjs/toolkit';

import { initialState } from '../teachers/initialState.js';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState.filters,
  reducers: {
    setLanguageFilter(state, action) {
      state.languages = action.payload;
    },
    setLevelFilter(state, action) {
      state.levels = action.payload;
    },
    setPriceFilter(state, action) {
      state.price = action.payload;
    },
  },
});

export const { setLanguageFilter, setLevelFilter, setPriceFilter } =
  filtersSlice.actions;
export default filtersSlice.reducer;
