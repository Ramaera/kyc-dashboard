import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allTheUsers: [],
  allTheUsersForList: [],
  allKycHandlerList: [],
  totalHajipurAmount: 0,
  totalAgraAmount: 0
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
    },
    setTotalHajipurAmount: (state, action) => {
      state.totalHajipurAmount = action.payload;
    },
    setTotalAgraAmount: (state, action) => {
      state.totalAgraAmount = action.payload;
    }
  }
});

export const {
  setAllTheUsers,
  setTotalHajipurAmount,
  setTotalAgraAmount,
  setAllTheUsersForList,
  setAllKycHandlerList
} = allUSersSlice.actions;

export default allUSersSlice.reducer;
