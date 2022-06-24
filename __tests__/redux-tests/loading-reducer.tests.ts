import { API_ROUTES } from '@src/constants/api.constants';
import { store } from '@src/redux/store';
import { fetchMovies, findMovies } from '@src/redux/thunks/movies.thunks';
import { mock, MOCK_MOVIES_LIST } from '../../__mocks__/mock-data';

describe('Loading reducer redux state test', () => {
  it('Should initially set isLoading: false', () => {
    const state = store.getState().loading;
    expect(state.isLoading).toEqual(false);
  });

  it('Should dispatch isLoading: false, when fetching of films fall', async () => {
    mock.onGet(API_ROUTES.MOVIES).networkError();

    const result = await store.dispatch(fetchMovies());

    expect(result.type).toBe('movies/fetchMovies/rejected');

    const state = store.getState().loading.isLoading;
    expect(state).toEqual(false);
  });

  it('Should dispatch isLoading: false when movie download succeeds', async () => {
    mock.onGet(API_ROUTES.MOVIES).reply(200, {
      movies: MOCK_MOVIES_LIST,
    });

    const result = await store.dispatch(fetchMovies());

    expect(result.type).toBe('movies/fetchMovies/fulfilled');

    const state = store.getState().loading.isLoading;
    expect(state).toEqual(false);
  });

  it('Should dispatch isLoading: true, when a finding of films falls', async () => {
    mock.onGet(API_ROUTES.MOVIES_SEARCH + 'The').networkError();

    const result = await store.dispatch(findMovies('The'));

    expect(result.type).toBe('movies/findMovies/rejected');

    const state = store.getState().loading.isLoading;
    expect(state).toEqual(false);
  });

  it('Should dispatch isLoading: true, when a finding of films succeeds', async () => {
    mock.onGet(API_ROUTES.MOVIES_SEARCH + 'The').reply(200, {
      movies: MOCK_MOVIES_LIST,
    });

    const result = await store.dispatch(findMovies('The'));

    expect(result.type).toBe('movies/findMovies/fulfilled');

    const state = store.getState().loading.isLoading;
    expect(state).toEqual(false);
  });
});
