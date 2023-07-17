import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  foundUser: {},
  toAdvance: false
};

export const foundUserSlice = createSlice({
  name: 'foundUser',
  initialState,
  reducers: {
    setFoundUser: (state, action) => {
      state.foundUser = action.payload;
    },
    upgradeKYC: (state, action) => {
      state.toAdvance = action.payload;
    }
  }
});

export const { setFoundUser, upgradeKYC } = foundUserSlice.actions;

export default foundUserSlice.reducer;
