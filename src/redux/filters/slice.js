import { createSlice } from '@reduxjs/toolkit';

import { initialState } from '../teachers/initialState.js';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState.filters,
  reducers: {
    changeFilter(state, action) {
      const { languages, levels, price } = action.payload;
      state.languages = languages;
      state.levels = levels;
      state.price = price;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
