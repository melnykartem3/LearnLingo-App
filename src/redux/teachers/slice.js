import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState.js';
import { fetchTeachers } from './operations.js';

const handlePending = state => {
  state.isLoading = true;
  state.isError = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

const teachersSlice = createSlice({
  name: 'teachers',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTeachers.pending, handlePending)
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.teachers = action.payload;
      })
      .addCase(fetchTeachers.rejected, handleRejected);
  },
});

export default teachersSlice.reducer;
