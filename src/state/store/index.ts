import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import allUsersSlice from '../slice/allUsersSlice';
import foundUserSlice from '../slice/foundUserSlice';
import userSlice from '../slice/userSlice';

const persistConfig = {
  key: 'root',
  storage
};

const persistedUserReducer = persistReducer(persistConfig, userSlice);
const persistedAllUsersReducer = persistReducer(persistConfig, allUsersSlice);
const persistedFoundUserReducer = persistReducer(persistConfig, foundUserSlice);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    allUsers: persistedAllUsersReducer,
    foundUser: persistedFoundUserReducer
  },
  middleware: [thunk]
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
