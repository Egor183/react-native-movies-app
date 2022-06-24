import { debounce } from 'lodash';
import { useAppDispatch } from '@src/hooks/useAppDispatch.hook';
import { useCallback, useState, useEffect, useMemo } from 'react';
import { useAppSelector } from '@src/hooks/useAppSelector.hook';
import { selectFoundMovies } from '@src/redux/selectors/movies.selectors';
import { selectErrorState } from '@src/redux/selectors/error.selectors';
import { findMovies } from '@src/redux/thunks/movies.thunks';
import { setFoundMovies } from '@src/redux/slices/movies.slice';
import { DEBOUNCE_DELAY } from '../constants/constants';

export const useFindMovies = () => {
  const [search, setSearch] = useState('');
  const foundMovies = useAppSelector(selectFoundMovies);
  const dispatch = useAppDispatch();
  const isError = useAppSelector(selectErrorState);

  useEffect(() => {
    if (!isError) {
      return;
    }

    setSearch('');
  }, [isError]);

  const debouncedFindMovies = useMemo(
    () =>
      debounce((item: string) => {
        dispatch(findMovies(item));
      }, DEBOUNCE_DELAY),
    [dispatch],
  );

  useEffect(() => {
    // Clean up of side effects from debounce
    return debouncedFindMovies.cancel();
  }, [debouncedFindMovies]);

  const handleFindMovies = useCallback(
    (item: string) => {
      setSearch(item);

      if (!item) {
        dispatch(setFoundMovies([]));
        return;
      }

      debouncedFindMovies(item);
    },
    [dispatch, debouncedFindMovies],
  );

  return {
    search,
    foundMovies,
    handleFindMovies,
  };
};
