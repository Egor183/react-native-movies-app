import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slices/movies.slice';
import errorSlice from './slices/error.slice';
import loadingSlice from './slices/loading.slice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    error: errorSlice,
    loading: loadingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
