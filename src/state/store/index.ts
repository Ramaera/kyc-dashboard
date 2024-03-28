import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import allUsersSlice from '../slice/allUsersSlice';
import foundUserSlice from '../slice/foundUserSlice';
import userSlice from '../slice/userSlice';
import allShareHolderSlice from '../slice/allShareHolderSlice';
import filtersSlice from '../slice/filtersSlice';
import walletBalanceSlice from '../slice/walletBalanceSlice';

const rootReducer = combineReducers({
  user: userSlice,
  allUsers: allUsersSlice,
  foundUser: foundUserSlice,
  filters: filtersSlice,
  allShareHolder: allShareHolderSlice,
  walletBalance: walletBalanceSlice
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
