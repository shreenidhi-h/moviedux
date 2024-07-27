export default function Moviecard({ movie, isWatchlisted, toggleWatchlist }) {
	const handleError = (e) => {
		e.target.src = "./images/default.jpg";
	};
	const handleRating = (rating) => {
		if (rating >= 7) {
			return "text-lime-600";
		} else if (rating < 7 && rating > 4) {
			return "text-amber-400";
		} else {
			return "text-red-600";
		}
	};
	return (
		<div
			key={movie.id}
			className="rounded-lg transition duration-150 hover:ease-in-out overflow-hidden flex flex-col bg-cyan-900 justify-center items-center max-lg:m-3 sm:m-4 shadow-lg shadow-black hover:scale-110"
		>
			<img
				src={`images/${movie.image}`}
				alt={movie.title}
				onError={handleError}
			/>
			<div className="text-base font-medium my-2 text-center">
				{movie.title}
			</div>
			<div className="pb-3">
				<span className="text-base mr-2 font-light text-center">
					{movie.genre}
				</span>
				<span
					className={`bg-black font-semibold rounded-xl px-2 ${handleRating(
						movie.rating
					)}`}
				>
					{movie.rating}
				</span>
			</div>
			<label className="mb-4 relative inline-block">
				<input
					type="checkbox"
					className="w-0 h-0"
					checked={isWatchlisted}
					onChange={() => toggleWatchlist(movie.id)}
				></input>
				<span
					id="toggle-switch"
					className="border-white border-2 bg-cyan-600 rounded-full cursor-pointer transition duration-200 relative"
				>
					<span className="px-6  mx-3">
						{isWatchlisted ? "In Watchlist" : "Add to Watchlist"}
					</span>
				</span>
			</label>
		</div>
	);
}
