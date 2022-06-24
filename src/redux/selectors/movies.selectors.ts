import { MovieType } from '@src/types/movies.types';
import { createSelector } from 'reselect';
import { GroupedPostersType, MoviesType } from '../types/movies.types';
import { RootState } from '../store';

const selectMovies = createSelector(
  (state: RootState) => state.movies.movies,
  movies => movies,
);

export const selectGroupedPosters = createSelector(
  selectMovies,
  (movies: MoviesType) => {
    return movies.reduce((result: GroupedPostersType, movie: MovieType) => {
      movie.genres.forEach((genre: string) => {
        const genrePosters = result[genre] ? result[genre] : [];
        result[genre] = [
          ...genrePosters,
          { id: movie.id, poster: movie.poster },
        ];
      });

      return result;
    }, {});
  },
);

export const selectCurrentMovie = createSelector(
  selectMovies,
  (state: RootState, id: string) => id,
  (movies, id) => movies.find(item => item.id === id),
);

export const selectFoundMovies = createSelector(
  (state: RootState) => state.movies.foundMovies,
  foundMovies => foundMovies,
);
