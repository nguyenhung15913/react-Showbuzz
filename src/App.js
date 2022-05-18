import "./App.css";
import Home from "./Home";
import Navigation from "./Navigation";
import Listing from "./Listing";
import Footer from "./Footer";
import Movie from "./Movie";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Navigation />

			<Switch>
				<Route exact path="/" render={() => <Home />} />

				<Route path="/movies" render={() => <Listing />} />

				<Route
					path="/movie/:id"
					render={(props) => <Movie id={props.match.params.id} />}
				/>

				<Route path="/movie/undefined" render={() => <Redirect to="/" />} />
			</Switch>

			<Footer />
		</div>
	);
}

export default App;
