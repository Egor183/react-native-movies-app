import { useCallback, useMemo } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useAppDispatch } from '@src/hooks/useAppDispatch.hook';
import { useAppSelector } from '@src/hooks/useAppSelector.hook';
import { fetchMovies } from '@src/redux/thunks/movies.thunks';
import { selectGroupedMoviePosters } from '@src/redux/selectors/movies.selectors';

export const useFetchMovies = () => {
  const dispatch = useAppDispatch();
  const groupedMoviePosters = useAppSelector(selectGroupedMoviePosters);

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchMovies());
    }, [dispatch]),
  );

  return useMemo(
    () => Object.entries(groupedMoviePosters),
    [groupedMoviePosters],
  );
};
