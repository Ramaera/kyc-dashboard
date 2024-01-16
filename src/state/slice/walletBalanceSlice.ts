import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  walletBalance: 0
};

export const walletBalanceSlice = createSlice({
  name: 'walletBalance',
  initialState,
  reducers: {
    setWalletBalance: (state, action) => {
      state.walletBalance = action.payload;
    },
    addToWalletBalance: (state, action) => {
      state.walletBalance += action.payload;
    }
  }
});

export const { setWalletBalance, addToWalletBalance } =
  walletBalanceSlice.actions;

export default walletBalanceSlice.reducer;
