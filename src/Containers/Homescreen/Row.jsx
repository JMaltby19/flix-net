import React from "react";
import { Card } from "../../components/Card/Card";
import { useMoviesByUrl } from "../../hooks/useMovies";
import "../../styles/row.scss";

export const Row = ({
	title,
	fetchUrl,
	isLargeRow = false,
}) => {
	const { data: movies = [], isLoading, error } = useMoviesByUrl(fetchUrl, [title]);

	console.log(movies);

	if (isLoading) return <div>Loading {title}...</div>;
	if (error) return <div>Error loading {title}</div>;

	return (
		<div className={`row ${isLargeRow && "rowLarge"}`}>
			<h2 className="row__title">{title}</h2>
			<div className="row__slider">
				{/* <MdChevronLeft size={40} /> */}
				<div
					id="slider"
					className={`row__posters ${isLargeRow && "row__postersLarge"}`}
				>
					{movies
						.filter((movie) => movie.backdrop_path != null)
						.map(
							(movie) =>
								((isLargeRow && movie.poster_path) ||
									(!isLargeRow && movie.backdrop_path)) && (
									<Card
										className="card__poster"
										key={movie.id}
										movie={movie}
										largePoster={isLargeRow}
									/>
								)
						)}
				</div>
				{/* <MdChevronRight size={40} /> */}
			</div>
		</div>
	);
};
