import { useAppSelector } from '@src/hooks/useAppSelector.hook';
import { selectCurrentMovie } from '@src/redux/selectors/movies.selectors';

export const useSelectMovie = (id: string) =>
  useAppSelector(state => selectCurrentMovie(state, id));
