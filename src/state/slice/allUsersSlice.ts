import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allTheUsers: [],
  allTheUsersForList: [],
  allKycHandlerList: []
};

export const allUSersSlice = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {
    setAllTheUsers: (state, action) => {
      state.allTheUsers = action.payload;
    },
    setAllTheUsersForList: (state, action) => {
      state.allTheUsersForList = action.payload;
    },
    setAllKycHandlerList: (state, action) => {
      state.allKycHandlerList = action.payload;
    }
  }
});

export const { setAllTheUsers, setAllTheUsersForList, setAllKycHandlerList } =
  allUSersSlice.actions;

export default allUSersSlice.reducer;
