import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

const auth = getAuth();
const db = getDatabase();

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      await set(ref(db, 'users/'), {
        name: name,
        email: email,
      });
      return {
        email: user.email,
        name: name,
      };
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        return thunkAPI.rejectWithValue('This email is already in use!');
      }
    }
  },
);

export const logInUser = createAsyncThunk(
  'auth/logInUser',
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      return {
        email: user.email,
      };
    } catch (error) {
      console.error('Error during login:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logOutUser = createAsyncThunk(
  'auth/logOutUser',
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error during logout:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
