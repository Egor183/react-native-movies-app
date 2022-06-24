import { API_ROUTES } from '@src/constants/api.constants';
import { fetchMovies, findMovies } from '@src/redux/thunks/movies.thunks';
import { store } from '@src/redux/store';
import { mock, MOCK_MOVIES_LIST } from '../../__mocks__/mock-data';

describe('Movies reducer redux state tests', () => {
  it('Should initially set {movies:[], foundMovies:[]}', () => {
    const state = store.getState().movies;
    expect(state).toEqual({ movies: [], foundMovies: [] });
  });

  it('Should be able to fetch the movies list and dispatch it', async () => {
    mock.onGet(API_ROUTES.MOVIES).reply(200, {
      movies: MOCK_MOVIES_LIST,
    });

    const result = await store.dispatch(fetchMovies());
    const movies = result.payload;

    expect(result.type).toBe('movies/fetchMovies/fulfilled');
    expect(movies).toEqual(MOCK_MOVIES_LIST);

    const state = store.getState().movies.movies;
    expect(state).toEqual(MOCK_MOVIES_LIST);
  });

  it('Should not be able to fetch the movies list, should dispatch empty list', async () => {
    mock.onGet(API_ROUTES.MOVIES).networkError();

    const result = await store.dispatch(fetchMovies());
    const movies = result.payload;

    expect(result.type).toBe('movies/fetchMovies/rejected');
    expect(movies).toEqual(undefined);

    const state = store.getState().movies.movies;
    expect(state).toEqual([]);
  });

  it('Should be able to find and dispatch the movies list', async () => {
    mock.onGet(API_ROUTES.MOVIES_SEARCH + 'The').reply(200, {
      movies: MOCK_MOVIES_LIST,
    });

    const result = await store.dispatch(findMovies('The'));
    const movies = result.payload;

    expect(result.type).toBe('movies/findMovies/fulfilled');
    expect(movies).toEqual(MOCK_MOVIES_LIST);

    const state = store.getState().movies.foundMovies;
    expect(state).toEqual(MOCK_MOVIES_LIST);
  });

  it('Should not be able to find movies, should dispatch the empty list', async () => {
    mock.onGet(API_ROUTES.MOVIES_SEARCH + 'The').networkError();

    const result = await store.dispatch(findMovies('The'));
    const movies = result.payload;

    expect(result.type).toBe('movies/findMovies/rejected');
    expect(movies).toEqual(undefined);

    const state = store.getState().movies.foundMovies;
    expect(state).toEqual([]);
  });
});
