export type MovieType = {
  backdrop: string;
  cast: string[];
  director: string;
  genres: string[];
  id: string;
  imdb_rating: number;
  length: string;
  overview: string;
  poster: string;
  released_on: string;
  title: string;
  classification: string;
};

export type MoviePosterType = {
  id: string;
  poster: string;
};

export type PostersSliderType = {
  genre: string;
  posters: MoviePosterType[];
};
