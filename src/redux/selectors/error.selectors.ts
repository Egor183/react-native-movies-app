import { createSelector } from 'reselect';
import { RootState } from '../store';

export const selectErrorState = createSelector(
  (state: RootState) => state.error.isError,
  isError => isError,
);
