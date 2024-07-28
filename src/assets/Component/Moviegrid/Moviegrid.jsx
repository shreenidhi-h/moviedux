import { useState } from "react";
import Moviecard from "../Moviecard/Moviecard";

export const Moviegrid = ({ movies, watchList, toggleWatchlist }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [genreTerm, setGenre] = useState("All Genre");
	const [rating, setRating] = useState("All");

	const handleGenreChange = (e) => {
		setGenre(e.target.value);
	};
	const handleRatingChange = (e) => {
		setRating(e.target.value);
	};

	const inputHandler = (e) => {
		setSearchTerm(e.target.value);
	};

	const matchesGenre = (movie, genreTerm) => {
		return (
			genreTerm === "All Genre" ||
			movie.genre.toLowerCase() === genreTerm.toLowerCase()
		);
	};

	const matchesSearchTerm = (movie, searchTerm) => {
		return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
	};

	const matchesRating = (movie, rating) => {
		switch (rating) {
			case "All":
				return true;
			case "Best":
				return movie.rating >= 7;
			case "Better":
				return movie.rating < 7 && movie.rating >= 5;
			case "Good":
				return movie.rating < 5;
		}
	};
	const filteredMovies = movies.filter(
		(movie) =>
			matchesGenre(movie, genreTerm) &&
			matchesRating(movie, rating) &&
			matchesSearchTerm(movie, searchTerm)
	);

	return (
		<div>
			<input
				type="text"
				placeholder=" Search movies..."
				className="w-full border-2 border-neutral-800 text-black rounded-3xl p-2 my-5 bg-slate-100"
				onChange={inputHandler}
				value={searchTerm}
			></input>
			<div className="flex justify-center items-center">
				<div className="rounded-lg max-w-fit bg-cyan-900 p-2 mr-3">
					<label className="mr-2">Genre</label>
					<select
						value={genreTerm}
						onChange={handleGenreChange}
						className="text-black rounded-lg px-2"
					>
						<option value="All Genre">All Genre</option>
						<option value="action">action</option>
						<option value="fantasy">fantasy</option>
						<option value="drama">drama</option>
						<option value="horror">horror</option>
					</select>
				</div>
				<div className="rounded-lg max-w-fit bg-cyan-900 p-2 mr-3">
					<label className="mr-2">Ratings</label>
					<select
						className="text-black rounded-lg px-2"
						value={rating}
						onChange={handleRatingChange}
					>
						<option value="All">All</option>
						<option value="Good">Good</option>
						<option value="Better">Better</option>
						<option value="Best">Best</option>
					</select>
				</div>
			</div>
			<div className="mt-10 w-full grid gap-7 grid-cols-auto-fit place-items-center">
				{filteredMovies.map((movie) => (
					<Moviecard
						movie={movie}
						key={movie.id}
						toggleWatchlist={toggleWatchlist}
						isWatchlisted={watchList && watchList.includes(movie.id)}
					></Moviecard>
				))}
			</div>
		</div>
	);
};
