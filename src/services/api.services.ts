import axios, { AxiosInstance } from 'axios';
import { API_METHODS, API_ROUTES } from '@src/constants/api.constants';

// TODO: remove token data from the front side for safety
const AUTHORIZATION_TOKEN = 'Bearer Wookie2019';

const api: AxiosInstance & { [key: string]: any } = axios.create({
  baseURL: API_ROUTES.BASE_URL,
  headers: { Authorization: AUTHORIZATION_TOKEN },
});

const makeRequest = async (
  url: string,
  method: API_METHODS = API_METHODS.GET,
) => {
  const data = await api[method](url);

  return data;
};

export { api };

export default makeRequest;
