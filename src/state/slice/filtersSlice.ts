import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  agencyUsersFilters: {}
};

export const userSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setOrUpdateAgencyUsersFilters: (state, action) => {
      state.agencyUsersFilters = action.payload;
    }
  }
});
export const { setOrUpdateAgencyUsersFilters } = userSlice.actions;

export default userSlice.reducer;
