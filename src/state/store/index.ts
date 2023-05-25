import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import userSlice from '../slice/userSlice';
import allUsersSlice from '../slice/allUsersSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    allUsers: allUsersSlice

    // This is where we add reducers.
    // Since we don't have any yet, leave this empty
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
