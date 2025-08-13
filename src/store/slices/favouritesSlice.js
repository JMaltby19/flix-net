import { createSlice } from '@reduxjs/toolkit';

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    items: [],
  },
  reducers: {
    addToFavourites: (state, action) => {
      const movie = action.payload;
      const existingIndex = state.items.findIndex(item => item.id === movie.id);
      
      if (existingIndex === -1) {
        state.items.push(movie);
      }
    },
    removeFromFavourites: (state, action) => {
      const movieId = action.payload;
      state.items = state.items.filter(item => item.id !== movieId);
    },
    clearFavourites: (state) => {
      state.items = [];
    },
    setFavourites: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { 
  addToFavourites, 
  removeFromFavourites, 
  clearFavourites, 
  setFavourites 
} = favouritesSlice.actions;

export default favouritesSlice.reducer;