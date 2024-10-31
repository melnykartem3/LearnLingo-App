import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const teacher = action.payload;
      const existingFavoriteIndex = state.favorites.findIndex(
        item => item.id === teacher.id,
      );

      if (existingFavoriteIndex >= 0) {
        state.favorites.splice(existingFavoriteIndex, 1);
      } else {
        state.favorites.push(teacher);
      }

      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    loadFavorites: state => {
      const favorites = JSON.parse(localStorage.getItem('favorites'));
      if (favorites) {
        state.favorites = favorites;
      }
    },
  },
});

export const { toggleFavorite, loadFavorites } = favoritesSlice.actions;
export const selectFavorites = state => state.favorites.favorites;

export default favoritesSlice.reducer;
