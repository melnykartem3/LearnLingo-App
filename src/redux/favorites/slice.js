import { createSlice } from '@reduxjs/toolkit';

import { initialState } from '../teachers/initialState.js';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialState.favorites,
  reducers: {
    toggleFavorite(state, action) {
      const index = state.items.indexOf(action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
      state.items.push(action.payload);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
