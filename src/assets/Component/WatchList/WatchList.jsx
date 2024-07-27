import Moviecard from "../Moviecard/Moviecard";

export default function Watchlist({ movies, watchList, toggleWatchlist }) {
	return (
		<div>
			<h1 className="font-semibold text-3xl text-center">Your Watchlist</h1>
			<div className="w-full grid grid-cols-4 max-md:grid-cols-2 mt-5 max-lg:grid-cols-3">
				{watchList &&
					watchList.map((id) => {
						const movie = movies && movies.find((movie) => movie.id === id);
						return (
							<Moviecard
								key={id}
								movie={movie}
								toggleWatchlist={toggleWatchlist}
								isWatchlisted={true}
							></Moviecard>
						);
					})}
			</div>
		</div>
	);
}
