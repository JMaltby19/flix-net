import React, { useState } from "react";
import { FilmFilter } from "./FilmFilter";
import { requests } from "../../config";
import "../../styles/films.scss";

export const Films = () => {
	const [selectedGenre, setSelectedGenre] = useState(requests.Popular.url);

	const requestsArray = Object.values(requests);

	return (
		<>
			<div className="filter__container">
				{requestsArray.map((item) => {
					return (
						<button
							key={item.title}
							className={selectedGenre === item.url ? "active" : ""}
							onClick={() => setSelectedGenre(item.url)}
						>
							{item.title}
						</button>
					);
				})}
			</div>
			<h3>{requests.title}</h3>
			<FilmFilter
				selectedGenre={selectedGenre}
			/>
		</>
	);
};
