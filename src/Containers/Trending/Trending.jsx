import React from "react";
import { Card } from "../../components/Card/Card";
import { useTrendingMovies } from "../../hooks/useMovies";

export const Trending = () => {
	const { data: trending = [], isLoading, error } = useTrendingMovies();

	console.log(trending);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<>
			<div className="films">
				<div className="films__posters">
					{trending
						.filter((movie) => movie.backdrop_path != null)
						.map((movie) => (
							<Card
								className="films__card"
								key={movie.id}
								movie={movie}
							/>
						))}
				</div>
			</div>
		</>
	);
};
