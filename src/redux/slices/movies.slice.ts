import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MoviesType, MovieStateType } from '../types/movies.types';
import { findMovies, fetchMovies } from '../thunks/movies.thunks';

const initialState: MovieStateType = {
  movies: [],
  foundMovies: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setFoundMovies: (state, action: PayloadAction<MoviesType>) => {
      state.foundMovies = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });

    builder.addCase(fetchMovies.rejected, state => {
      state.movies = [];
    });

    builder.addCase(findMovies.fulfilled, (state, action) => {
      state.foundMovies = action.payload;
    });

    builder.addCase(findMovies.rejected, state => {
      state.foundMovies = [];
    });
  },
});

export const { setFoundMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
