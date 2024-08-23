export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="opacity-70 mt-32  w-full text-center bg-zinc-700">
			© {currentYear} Moviedux, All rights reserved.
		</div>
	);
};
