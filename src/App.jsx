import { Footer } from "./assets/Component/Foooter/Footer";
import { Header } from "./assets/Component/Header/Header";
import { Moviegrid } from "./assets/Component/Moviegrid/Moviegrid";
import { WatchList } from "./assets/Component/WatchList/WatchList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
	return (
		<div>
			<Header />
			<Router>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/watchlist">Watchlist</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path="/" element={<Moviegrid />}></Route>
					<Route path="/watchlist" element={<WatchList />}></Route>
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}
