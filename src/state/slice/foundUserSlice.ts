import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  foundUser: {}
};

export const foundUserSlice = createSlice({
  name: 'foundUser',
  initialState,
  reducers: {
    setFoundUser: (state, action) => {
      state.foundUser = action.payload;
    }
  }
});

export const { setFoundUser } = foundUserSlice.actions;

export default foundUserSlice.reducer;
