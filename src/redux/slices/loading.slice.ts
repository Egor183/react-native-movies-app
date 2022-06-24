import { createSlice } from '@reduxjs/toolkit';
import { fetchMovies, findMovies } from '../thunks/movies.thunks';
import { LoadingStateType } from '../types/loading.types';
import { handleSetLoading } from '../helpers/loading.helpers';

const initialState: LoadingStateType = {
  isLoading: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {},
  extraReducers: handleSetLoading([fetchMovies, findMovies]),
});

export default loadingSlice.reducer;
