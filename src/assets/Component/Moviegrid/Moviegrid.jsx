import { useEffect } from "react";
import { useState } from "react";
import Moviecard from "../Moviecard/Moviecard";
export const Moviegrid = () => {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	useEffect(() => {
		fetch("movies.json")
			.then((response) => response.json())
			.then((data) => setMovies(data));
	}, []);

	const inputHandler = (e) => {
		setSearchTerm(e.target.value);
		console.log(e.target.value);
	};

	return (
		<div>
			<input
				type="text"
				placeholder=" Search movies"
				className="w-full border-2 border-neutral-800 text-black rounded-3xl p-2 my-5 bg-slate-100"
				onChange={inputHandler}
				value={searchTerm}
			></input>
			<div className="w-full grid grid-cols-4 max-sm:grid-cols-2 max-lg:grid-cols-3">
				{movies.map((movie) => (
					<Moviecard movie={movie} key={movie.id} />
				))}
			</div>
		</div>
	);
};
