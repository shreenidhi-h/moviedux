import Moviecard from "../Moviecard/Moviecard";

export default function Watchlist({ movies, watchList, toggleWatchlist }) {
	return (
		<div>
			<h1 className="font-semibold text-3xl text-center">Your Watchlist</h1>
			<div className="mt-10 w-full grid lg:gap-20 md:gap-16 xl:gap-28  grid-cols-auto-fit place-items-center">
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
