import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../../components/Card/Card";
import { useSearchMovies } from "../../hooks/useMovies";
import "../../styles/searchResult.scss";

export const SearchResult = () => {
	const searchInput = useSelector((state) => state.search.searchInput);
	const { data, isLoading, error } = useSearchMovies(searchInput, !!searchInput && searchInput.length >= 2);
	
	console.log(searchInput);

	return (
		<div>
			<div className="films">
				<div className="search__result">Search result: {searchInput}</div>
				{isLoading && <div>Loading...</div>}
				{error && <div>Error: {error.message}</div>}
				<div className="search__posters">
					{data?.results?.length &&
						data.results
							.filter((movie) => movie.backdrop_path != null)
							.map((movie) => <Card movie={movie} key={movie.id} />)}
				</div>
			</div>
		</div>
	);
};
