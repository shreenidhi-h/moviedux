import { Footer } from "./assets/Component/Foooter/Footer";
import { Header } from "./assets/Component/Header/Header";
import { Moviegrid } from "./assets/Component/Moviegrid/Moviegrid";
import { WatchList } from "./assets/Component/WatchList/WatchList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function App() {
	const [movies, setMovies] = useState([]);
	const [watchList, setWatchlist] = useState();

	useEffect(() => {
		fetch("movies.json")
			.then((response) => response.json())
			.then((data) => setMovies(data));
	}, []);
	const toggleWatchlist = (movieId) => {
		setWatchlist((prev) =>
			prev.includes(movieId)
				? prev.filter((id) => id !== movieId)
				: [...prev, movieId]
		);
	};
	return (
		<div>
			<Header />
			<Router>
				<nav>
					<ul className="flex justify-center items-center m-5">
						<li className="m-6">
							<Link
								to="/"
								className="bg-cyan-700 hover:border-black font-semibold border-2 rounded-lg p-3 text-center"
							>
								Home
							</Link>
						</li>
						<li className="m-6">
							<Link
								to="/watchlist"
								className="bg-cyan-700 hover:border-black font-semibold border-2 rounded-lg p-3 text-center"
							>
								Watchlist
							</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route
						path="/"
						element={
							<Moviegrid
								movies={movies}
								WatchList={watchList}
								toggleWatchlist={toggleWatchlist}
							/>
						}
					></Route>
					<Route
						path="/watchlist"
						element={
							<WatchList
								movies={movies}
								WatchList={watchList}
								toggleWatchlist={toggleWatchlist}
							/>
						}
					></Route>
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}
