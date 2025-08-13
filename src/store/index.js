import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './slices/moviesSlice';
import searchSlice from './slices/searchSlice';
import favouritesSlice from './slices/favouritesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    search: searchSlice,
    favourites: favouritesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;