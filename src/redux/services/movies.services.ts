import { API_ROUTES } from '@src/constants/api.constants';
import makeRequest from '@src/services/api.services';

const fetchMovies = async () => {
  const data = await makeRequest(API_ROUTES.MOVIES);

  return data;
};

export const findMovies = async (value: string) => {
  const data = await makeRequest(`${API_ROUTES.MOVIES_SEARCH}${value}`);

  return data;
};

export default { fetchMovies, findMovies };
