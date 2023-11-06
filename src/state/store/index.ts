import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import allUsersSlice from '../slice/allUsersSlice';
import foundUserSlice from '../slice/foundUserSlice';
import userSlice from '../slice/userSlice';

import allShareHolderSlice from '../slice/allShareHolderSlice';

import filtersSlice from '../slice/filtersSlice';


export const store = configureStore({
  reducer: {
    user: userSlice,
    allUsers: allUsersSlice,
    foundUser: foundUserSlice,

    allShareHolder: allShareHolderSlice,

    filters: filtersSlice

  }
});
export const persistor = store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
