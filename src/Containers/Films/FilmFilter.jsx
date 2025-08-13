import React from "react";
import { Card } from "../../components/Card/Card";
import { useMoviesByUrl } from "../../hooks/useMovies";
import "../../styles/filmfilter.scss";

export const FilmFilter = ({ selectedGenre }) => {
	const { data: movies = [], isLoading, error } = useMoviesByUrl(selectedGenre, ['films', selectedGenre]);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div className="films">
			<div>
				<div className="films__posters">
					{movies
						.filter((movie) => movie.backdrop_path != null)
						.map((movie, index) => (
							<Card
								className="films__card"
								key={movie.id}
								movie={movie}
							/>
						))}
				</div>
			</div>
		</div>
	);
};
