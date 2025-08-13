import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../../components/Card/Card";
import { setFavourites } from "../../store/slices/favouritesSlice";
import "../../styles/mylist.scss";

export const MyList = () => {
	const dispatch = useDispatch();
	const favourites = useSelector((state) => state.favourites.items);

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem("Netflix-clone-favourites")
		);
		if (movieFavourites) {
			dispatch(setFavourites(movieFavourites));
		}
	}, [dispatch]);

	console.log(favourites);
	return (
		<>
			<div className="list__container">
				<div className="list__posters">
					{favourites &&
						favourites
							.filter((movie) => movie.backdrop_path != null)
							.map((movie) => (
								<Card
									movie={movie}
									key={movie.id}
								/>
							))}
				</div>
			</div>
		</>
	);
};
