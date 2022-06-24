import { API_ROUTES } from '@src/constants/api.constants';
import { store } from '@src/redux/store';
import { fetchMovies, findMovies } from '@src/redux/thunks/movies.thunks';
import { mock, MOCK_MOVIES_LIST } from '../../__mocks__/mock-data';

describe('Error reducer redux state test', () => {
  it('Should initially set isError: false', () => {
    const state = store.getState().error;
    expect(state.isError).toEqual(false);
  });

  it('Should dispatch isError: true when fetching of films falls', async () => {
    mock.onGet(API_ROUTES.MOVIES).networkError();

    const result = await store.dispatch(fetchMovies());

    expect(result.type).toBe('movies/fetchMovies/rejected');

    const state = store.getState().error.isError;
    expect(state).toEqual(true);
  });

  it('Should dispatch isError: false when fetching of films succeed', async () => {
    mock.onGet(API_ROUTES.MOVIES).reply(200, {
      movies: MOCK_MOVIES_LIST,
    });

    const result = await store.dispatch(fetchMovies());

    expect(result.type).toBe('movies/fetchMovies/fulfilled');

    const state = store.getState().error.isError;
    expect(state).toEqual(false);
  });

  it('Should dispatch isError: true when a search of films fall', async () => {
    mock.onGet(API_ROUTES.MOVIES_SEARCH + 'The').networkError();

    const result = await store.dispatch(findMovies('The'));

    expect(result.type).toBe('movies/findMovies/rejected');

    const state = store.getState().error.isError;
    expect(state).toEqual(true);
  });

  it('Should dispatch isError: false when a search of films succeed', async () => {
    mock.onGet(API_ROUTES.MOVIES_SEARCH + 'The').reply(200, {
      movies: MOCK_MOVIES_LIST,
    });

    const result = await store.dispatch(findMovies('The'));

    expect(result.type).toBe('movies/findMovies/fulfilled');

    const state = store.getState().error.isError;
    expect(state).toEqual(false);
  });
});
