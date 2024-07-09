export default function Moviecard({ movie }) {
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
			className="rounded-lg transition duration-150 hover:ease-in-out overflow-hidden flex flex-col bg-teal-800 justify-center items-center m-7  max-md:m-5 shadow-lg shadow-black hover:scale-110"
		>
			<img
				src={`images/${movie.image}`}
				alt={movie.title}
				onError={handleError}
			/>
			<div className="text-base font-medium my-2 text-center">
				{movie.title}
			</div>
			<div className="text-base font-light text-center">{movie.genre}</div>
			<div
				className={`bg-black my-2 font-semibold rounded-xl px-2 ${handleRating(
					movie.rating
				)}`}
			>
				{movie.rating}
			</div>
		</div>
	);
}
