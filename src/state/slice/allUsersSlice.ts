import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allTheUsers: []
};

export const allUSersSlice = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {
    setAllTheUsers: (state, action) => {
      state.allTheUsers = action.payload;
    }
  }
});

export const { setAllTheUsers } = allUSersSlice.actions;

export default allUSersSlice.reducer;
