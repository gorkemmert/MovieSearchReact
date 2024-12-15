/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '75adbfae';
const BASE_URL = 'http://www.omdbapi.com/';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async ({ query, year, type }: { query?: string; year?: string; type?: string }) => {
    const params: any = {
      s: query,
      apiKey: API_KEY,
      type,
    };
    if (year) params.y = year;

    const response = await axios.get(BASE_URL, { params });
    return response.data;
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    status: 'idle',
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload.Search || [];
        state.error = null
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'An error occurred';;
      });
  },
});

export default moviesSlice.reducer;