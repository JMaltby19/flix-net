import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { truncate } from "../../utils";
import { IMG_URL } from "../../config";
import "../../styles/banner.scss";
import { addToFavourites } from "../../store/slices/favouritesSlice";
import { useBannerMovie } from "../../hooks/useMovies";

export const Banner = () => {
	const dispatch = useDispatch();
	const favourites = useSelector((state) => state.favourites.items);
	const { data: movie, isLoading, error } = useBannerMovie();

	console.log(movie);

	const addFavouriteMovie = (movie) => {
		if (
			favourites.some((item) => {
				return movie.id === item.id;
			})
		) {
			return;
		}
		dispatch(addToFavourites(movie));
		saveToStorage([...favourites, movie]);
	};

	const saveToStorage = (items) => {
		localStorage.setItem("Netflix-clone-favourites", JSON.stringify(items));
	};

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error loading banner</div>;
	if (!movie) return null;

	return (
		<div className="banner">
			<img
				className="banner__img"
				src={`${IMG_URL}${movie?.backdrop_path || movie?.poster_path}`}
				alt=""
			/>
			<div className="banner__cnts--container">
				<div className="banner__cnts">
					<h1 className="banner__title">
						{movie?.title || movie?.name || movie?.original_name}
					</h1>
					<div className="banner__btns">
						<button className="banner__btn play">Play</button>
						<button
							className="banner__btn myList"
							onClick={() => addFavouriteMovie(movie)}
						>
							My List
						</button>
					</div>
					<h1 className="banner__desc">{truncate(movie?.overview, 150)}</h1>
				</div>
			</div>
			<div className="banner--fadeBottom" />
			{/* </header> */}
		</div>
	);
};
