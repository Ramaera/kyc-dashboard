import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../types';

// declaring the types for our state

export type UserState = {
  data: UserType | undefined;
  agencyCode: String;
};

const initialState: UserState = {
  data: undefined,
  agencyCode: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setOrUpdateUser: (state, action: PayloadAction<UserType>) => {
      state.data = action.payload;
    },
    setAgencyCode: (state, action) => {
      state.agencyCode = action.payload;
    },
    logout: (state) => {
      state.data = null;
      localStorage.clear();
      window.location.reload();
    }
  }
});
export const { setOrUpdateUser, setAgencyCode, logout } = userSlice.actions;

export default userSlice.reducer;
