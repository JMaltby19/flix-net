import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IMG_URL } from "../../config";
import "../../styles/card.scss";
import { motion } from "framer-motion";
import { Modal } from "./Modal";
import { genresList } from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { useClickOutside } from "../../utils";
import { addToFavourites, removeFromFavourites } from "../../store/slices/favouritesSlice";

export const Card = ({ movie, largePoster }) => {
	const [selectedId, setSelectedId] = useState(false);
	const dispatch = useDispatch();
	const favourites = useSelector((state) => state.favourites.items);

	const cardClicked = () => {
		setSelectedId(!selectedId);
	};

	const capitaliseDate = (str) => {
		return movie.original_language.charAt(0).toUpperCase() + str.slice(1, 2);
	};

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

	const removeFavouriteMovie = (movie) => {
		dispatch(removeFromFavourites(movie.id));
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.id !== movie.id
		);
		saveToStorage(newFavouriteList);
	};

	let clickRef = useClickOutside(() => {
		setSelectedId(false);
	});

	return (
		<div>
			<div
				// layoutId={movie.id}
				onClick={() => cardClicked(movie.id)}
				className={`card__slider ${largePoster && "card__sliderLarge"}`}
			>
				<img
					className={`card__poster ${largePoster && "card__posterLarge"}`}
					key={movie.id}
					src={`${IMG_URL}${
						largePoster ? movie.poster_path : movie.backdrop_path
					}`}
					alt={movie.name}
				/>
			</div>

			<Modal selectedId={selectedId} setSelectedId={setSelectedId}>
				{selectedId && (
					<motion.div layoutId={movie.id} ref={clickRef} className="card">
						<FontAwesomeIcon
							className="close__btn"
							icon={faCircleXmark}
							inverse
							onClick={() => setSelectedId(false)}
						/>
						<motion.div className="add__toList">
							<FontAwesomeIcon
								className="add__btn"
								icon={faPlusCircle}
								// style={{ width: "2em" }}
								onClick={() => addFavouriteMovie(movie)}
							/>
							My list
						</motion.div>
						<motion.div className="remove__fromList">
							<FontAwesomeIcon
								className="remove__btn"
								icon={faMinusCircle}
								// style={{ width: "2em" }}
								onClick={() => removeFavouriteMovie(movie)}
							/>
							Remove
						</motion.div>
						<motion.div
							className="card__img"
							style={{
								backgroundSize: "cover",
								backgroundImage: `url("${IMG_URL}${movie?.backdrop_path}")`,
								backgroundPosition: "center center",
							}}
						>
							<motion.h2 className="card__date">
								{(movie?.release_date || movie?.first_air_date).substring(0, 4)}
							</motion.h2>
							<motion.h1 className="card__title">
								{movie?.title || movie?.name || movie?.original_name}
							</motion.h1>
							<motion.p className="card__desc">{movie.overview}</motion.p>
							<motion.p className="card__genres">
								Genres:{" "}
								{movie.genre_ids.map((id, index) => {
									return <span>{(index ? ", " : "") + genresList[id]}</span>;
								})}
							</motion.p>
							<motion.p className="card__avVote">
								Average vote: {movie.vote_average}
							</motion.p>
							<motion.p className="card__lang">
								Original language: {capitaliseDate(movie.original_language)}
								<hr />
							</motion.p>
						</motion.div>
					</motion.div>
				)}
				{/* </AnimatePresence> */}
			</Modal>
		</div>
	);
};
