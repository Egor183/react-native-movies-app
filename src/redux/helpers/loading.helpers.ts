import { AsyncThunk } from '@reduxjs/toolkit';
import { LoadingStateType } from '../types/loading.types';

type ActionsCreatorsType = {
  [creator: string]: (state: LoadingStateType) => void;
};
type AsyncThunkType = AsyncThunk<any, any, {}>;

export const handleSetLoading = (
  thunks: AsyncThunkType[],
): ActionsCreatorsType => {
  return thunks.reduce((result: ActionsCreatorsType, item: AsyncThunkType) => {
    result[item.pending.toString()] = (state: LoadingStateType) => {
      state.isLoading = true;
    };
    result[item.fulfilled.toString()] = (state: LoadingStateType) => {
      state.isLoading = false;
    };
    result[item.rejected.toString()] = (state: LoadingStateType) => {
      state.isLoading = false;
    };

    return result;
  }, {});
};
