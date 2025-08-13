import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { requests, seriesRequests, searchURL } from '../config';

// Fetch movies by category
export const useMoviesByCategory = (category) => {
  return useQuery({
    queryKey: ['movies', category],
    queryFn: async () => {
      const url = requests[category]?.url || seriesRequests[category]?.url;
      if (!url) throw new Error(`Invalid category: ${category}`);
      
      const response = await axios.get(url);
      return {
        category,
        data: response.data.results,
        title: requests[category]?.title || seriesRequests[category]?.title
      };
    },
    enabled: !!category,
  });
};

// Fetch trending movies
export const useTrendingMovies = () => {
  return useQuery({
    queryKey: ['movies', 'trending'],
    queryFn: async () => {
      const response = await axios.get(requests.Trending.url);
      return response.data.results;
    },
  });
};

// Search movies
export const useSearchMovies = (searchTerm, enabled = false) => {
  return useQuery({
    queryKey: ['movies', 'search', searchTerm],
    queryFn: async () => {
      if (!searchTerm || searchTerm.trim().length < 2) {
        throw new Error('Search term must be at least 2 characters');
      }
      
      const response = await axios.get(searchURL(searchTerm.trim()));
      return {
        searchTerm: searchTerm.trim(),
        results: response.data.results
      };
    },
    enabled: enabled && !!searchTerm && searchTerm.trim().length >= 2,
  });
};

// Fetch movies by URL (for generic fetching)
export const useMoviesByUrl = (url, queryKey) => {
  return useQuery({
    queryKey: ['movies', ...queryKey],
    queryFn: async () => {
      const response = await axios.get(url);
      return response.data.results;
    },
    enabled: !!url,
  });
};

// Random banner movie from trending
export const useBannerMovie = () => {
  return useQuery({
    queryKey: ['movies', 'banner'],
    queryFn: async () => {
      const response = await axios.get(requests.Trending.url);
      const results = response.data.results;
      return results[Math.floor(Math.random() * results.length)];
    },
    staleTime: 10 * 60 * 1000, // 10 minutes for banner
  });
};