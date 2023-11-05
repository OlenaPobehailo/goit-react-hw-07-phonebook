import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',

  initialState: '',

  reducers: {
    updateFilter: (state, { payload }) => {
      return payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;
export default filterSlice.reducer;
