import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  logInUser,
  logOutUser,
  reAuthenticateUser,
} from './operations.js';

const handlePending = state => {
  state.isLoading = true;
  state.isError = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: null,
      name: null,
    },
    isLoggedIn: false,
    isLoading: false,
    isError: null,
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(registerUser.rejected, handleRejected)
      .addCase(logInUser.pending, handlePending)
      .addCase(logInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(logInUser.rejected, handleRejected)
      .addCase(logOutUser.pending, handlePending)
      .addCase(logOutUser.fulfilled, state => {
        state.isLoading = false;
        state.user = { uid: null, email: null, name: null };
        state.isLoggedIn = false;
      })
      .addCase(logOutUser.rejected, handleRejected)
      .addCase(reAuthenticateUser.pending, handlePending)
      .addCase(reAuthenticateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(reAuthenticateUser.rejected, handleRejected);
  },
});

export default authSlice.reducer;
