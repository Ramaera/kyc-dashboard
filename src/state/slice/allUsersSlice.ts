import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allTheUsers: [],
  allKycHandlerList: [],
  allAgencyList: [],
  totalHajipurAmount: 0,
  totalAgraAmount: 0,
  isData: false
};

export const allUSersSlice = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {
    setAllTheUsers: (state, action) => {
      state.allTheUsers = action.payload;
    },
    gotData: (state, action) => {
      state.isData = action.payload;
    },
    setAllKycHandlerList: (state, action) => {
      state.allKycHandlerList = action.payload;
    },
    setTotalHajipurAmount: (state, action) => {
      state.totalHajipurAmount = action.payload;
    },
    setTotalAgraAmount: (state, action) => {
      state.totalAgraAmount = action.payload;
    },
    setAllAgencyList: (state, action) => {
      state.allAgencyList = action.payload;
    }
  }
});

export const {
  setAllTheUsers,
  gotData,
  setTotalHajipurAmount,
  setAllAgencyList,
  setTotalAgraAmount,
  setAllKycHandlerList
} = allUSersSlice.actions;

export default allUSersSlice.reducer;
