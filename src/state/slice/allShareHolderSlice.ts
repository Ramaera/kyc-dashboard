import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allNumberShareHolder: {
    totalShareHolder: 0,
    totalBasicShareHolder: 0,
    totalAdvanceShareHolder: 0,
    totalHajipurShareHolder: 0
  }
};

export const allShareHolderSlice = createSlice({
  name: 'allShareHolder',
  initialState,
  reducers: {
    setAllNumberShareHolder: (state, action) => {
      state.allNumberShareHolder = action.payload;
    }
  }
});

export const { setAllNumberShareHolder } = allShareHolderSlice.actions;

export default allShareHolderSlice.reducer;
