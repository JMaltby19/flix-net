import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchInput: '',
  },
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    clearSearch: (state) => {
      state.searchInput = '';
    },
  },
});

export const { setSearchInput, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;