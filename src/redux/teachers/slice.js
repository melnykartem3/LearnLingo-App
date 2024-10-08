import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState.js';

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
  //   extraReducers: builder => builder.addCase(),
});

export default teachersSlice.reducer;
