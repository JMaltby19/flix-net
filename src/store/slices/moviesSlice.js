import { createSlice } from '@reduxjs/toolkit';

// Since we're using TanStack Query for data fetching, this slice is now simplified
// We can remove it entirely if no movie-related state is needed in Redux
const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    // Keep any movie-related state that's not about fetching data
    // For example, user preferences, filters, etc.
  },
  reducers: {
    // Add any movie-related actions that aren't about data fetching
  },
});

export const actions = moviesSlice.actions;
export default moviesSlice.reducer;