import { createSlice } from '@reduxjs/toolkit';
import { ErrorStateType } from '../types/error.types';
import { fetchMovies, findMovies } from '../thunks/movies.thunks';
import { handleSetError } from '../helpers/error.helpers';

const initialState: ErrorStateType = {
  isError: false,
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {},
  extraReducers: handleSetError([fetchMovies, findMovies]),
});

export default errorSlice.reducer;
