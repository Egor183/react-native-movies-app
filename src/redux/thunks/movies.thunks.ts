import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../services';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const { data } = await API.moviesApi.fetchMovies();

  return data.movies;
});

export const findMovies = createAsyncThunk(
  'movies/findMovies',
  async (value: string) => {
    const { data } = await API.moviesApi.findMovies(value);

    return data.movies;
  },
);
