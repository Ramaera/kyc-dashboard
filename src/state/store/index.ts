import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import userSlice from '../slice/userSlice';
import allUsersSlice from '../slice/allUsersSlice';
import foundUserSlice from '../slice/foundUserSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, allUsersSlice);
const persistedFoundUserReducer = persistReducer(persistConfig, foundUserSlice);

export const store = configureStore({
  reducer: {
    user: userSlice,
    allUsers: persistedReducer,
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
