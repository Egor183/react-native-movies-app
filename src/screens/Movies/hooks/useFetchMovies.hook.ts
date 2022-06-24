import { useCallback, useMemo } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useAppDispatch } from '@src/hooks/useAppDispatch.hook';
import { useAppSelector } from '@src/hooks/useAppSelector.hook';
import { fetchMovies } from '@src/redux/thunks/movies.thunks';
import { selectGroupedPosters } from '@src/redux/selectors/movies.selectors';

export const useFetchMovies = () => {
  const dispatch = useAppDispatch();
  const groupedPosters = useAppSelector(selectGroupedPosters);

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchMovies());
    }, [dispatch]),
  );

  return useMemo(() => Object.entries(groupedPosters), [groupedPosters]);
};
