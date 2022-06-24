import { createSelector } from 'reselect';
import { RootState } from '../store';

export const selectLoadingState = createSelector(
  (state: RootState) => state.loading.isLoading,
  isLoading => isLoading,
);
