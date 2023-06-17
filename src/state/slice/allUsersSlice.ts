import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allTheUsers: [],
  allKycHandlerList: []
};

export const allUSersSlice = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {
    setAllTheUsers: (state, action) => {
      state.allTheUsers = action.payload;
    },
    setAllKycHandlerList: (state, action) => {
      state.allKycHandlerList = action.payload;
    }
  }
});

export const { setAllTheUsers, setAllKycHandlerList } = allUSersSlice.actions;

export default allUSersSlice.reducer;
