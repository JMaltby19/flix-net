// need to put in env
export const BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY = process.env.REACT_APP_API_KEY;
export const IMG_URL = "https://image.tmdb.org/t/p/original/";
// export const API_URL = "http://localhost:6001";
export const API_URL = "https://api.flix-project.co.uk";

export const requests = {
	Netflix: {
		title: "Netflix",
		url: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
	},
	Popular: {
		title: "Popular",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=1`,
	},
	Trending: {
		title: "Trending",
		url: `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US`,
	},
	TopRated: {
		title: "Top Rated",
		url: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	},
	Action: {
		title: "Action",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
	},
	Comedy: {
		title: "Comedy",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
	},
	Horror: {
		title: "Horror",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
	},
	Documentaries: {
		title: "Documentaries",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
	},
	Romance: {
		title: "Romance",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	},
	Music: {
		title: "Music",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10402`,
	},
	Thriller: {
		title: "Thriller",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=53`,
	},
	Fantasy: {
		title: "Fantasy",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=14`,
	},
	Animation: {
		title: "Animation",
		url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`,
	},
};

export const seriesRequests = {
	TvPopular: {
		title: "Popular",
		url: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&page=1`,
	},
	TvAction: {
		title: "Action",
		url: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10759`,
	},
	TvAnimation: {
		title: "Animation",
		url: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16`,
	},
	TvComedy: {
		title: "Comedy",
		url: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=35`,
	},
	TvCrime: {
		title: "Crime",
		url: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=80`,
	},
	TvDocumentary: {
		title: "Documentary",
		url: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=99`,
	},
	TvDrama: {
		title: "Drama",
		url: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=18`,
	},
	TvFamily: {
		title: "Family",
		url: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10751`,
	},
	TvMystery: {
		title: "Mystery",
		url: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=9648`,
	},
	TvSciFi: {
		title: "Sci-Fi",
		url: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10765`,
	},
};

export const searchURL = (input) =>
	`${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&query=${input}&page=1&include_adult=false`;

export const genresList = {
	28: "Action",

	12: "Adventure",

	16: "Animation",

	35: "Comedy",

	80: "Crime",

	99: "Documentary",

	18: "Drama",

	10751: "Family",

	14: "Fantasy",

	36: "History",

	27: "Horror",

	10402: "Music",

	9648: "Mystery",

	10749: "Romance",

	878: "Science Fiction",

	10770: "TV Movie",

	53: "Thriller",

	10752: "War",

	37: "Western",

	10759: "Action & Adventure",

	10762: "Kids",

	10763: "News",

	10764: "Reality",

	10765: "Sci-Fi & Fantasy",

	10766: "Soap",

	10767: "Talk",

	10768: "War & Politics",
};
