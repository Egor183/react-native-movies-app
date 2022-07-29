import { MovieType, MoviePosterType } from '@src/types/movies.types';

export type MoviesType = MovieType[];

export type MovieStateType = {
  movies: MoviesType;
  foundMovies: MoviesType;
};

export type GroupedMoviePostersType = { [key: string]: MoviePosterType[] };
