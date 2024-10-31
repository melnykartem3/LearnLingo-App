import { createAsyncThunk } from '@reduxjs/toolkit';
import { ref, get, push } from 'firebase/database';
import { db } from '../../auth/firebaseAuth.js';

export const fetchTeachers = createAsyncThunk(
  'teachers/fetchTeachers',
  async (_, thunkAPI) => {
    try {
      const teachersRef = ref(db, 'teachers');
      const snapshot = await get(teachersRef);
      const teachers = [];

      snapshot.forEach(childSnapshot => {
        teachers.push({ id: childSnapshot.key, ...childSnapshot.val() });
      });

      return teachers;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const bookLesson = createAsyncThunk(
  '/bookings/bookLesson',
  async ({ name, email, phone, reasonTopic }, thunkAPI) => {
    try {
      const bookingsRef = ref(db, 'bookings');

      const newBookingRef = await push(bookingsRef, {
        name,
        email,
        phone,
        reasonTopic,
        bookedAt: new Date().toISOString(),
      });

      return { id: newBookingRef.key, name, email, phone, reasonTopic };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
