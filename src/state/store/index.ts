import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import allUsersSlice from '../slice/allUsersSlice';
import foundUserSlice from '../slice/foundUserSlice';
import userSlice from '../slice/userSlice';
import filtersSlice from '../slice/filtersSlice';
import allShareHolderSlice from '../slice/allShareHolderSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    allUsers: allUsersSlice,
    foundUser: foundUserSlice,
    filters: filtersSlice,
    allShareHolder: allShareHolderSlice
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
