import { navigate } from '@src/modules/Navigation/actions';
import { AsyncThunk } from '@reduxjs/toolkit';
import { MODAL_ROUTES } from '@src/constants/routes.constants';
import { ErrorStateType } from './../types/error.types';

type ActionsCreatorsType = {
  [creator: string]: (state: ErrorStateType) => void;
};
type AsyncThunkType = AsyncThunk<void, void, {}>;

export const handleSetError = (
  thunks: AsyncThunkType[],
): ActionsCreatorsType => {
  return thunks.reduce((result: ActionsCreatorsType, item: AsyncThunkType) => {
    result[item.pending.toString()] = (state: ErrorStateType) => {
      state.isError = false;
    };
    result[item.fulfilled.toString()] = (state: ErrorStateType) => {
      state.isError = false;
    };
    result[item.rejected.toString()] = (state: ErrorStateType) => {
      state.isError = true;
      navigate(MODAL_ROUTES.ERROR);
    };

    return result;
  }, {});
};
