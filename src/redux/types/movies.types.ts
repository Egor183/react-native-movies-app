import { MovieType, PosterType } from '@src/types/movies.types';

export type MoviesType = MovieType[];

export type MovieStateType = {
  movies: MoviesType;
  foundMovies: MoviesType;
};

export type GroupedPostersType = { [key: string]: PosterType[] };
