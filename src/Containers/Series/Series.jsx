import React, { useState } from "react";
import { SeriesFilter } from "./SeriesFilter";
import { seriesRequests } from "../../config";
import "../../styles/films.scss";

export const Series = () => {
	const [selectedGenre, setSelectedGenre] = useState(
		seriesRequests.TvPopular.url
	);

	const requestsArray = Object.values(seriesRequests);

	return (
		<div>
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
			<h3>{seriesRequests.title}</h3>
			<SeriesFilter
				selectedGenre={selectedGenre}
			/>
		</div>
	);
};
