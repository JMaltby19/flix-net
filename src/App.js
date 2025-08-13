import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { HomeScreen } from "./Containers/Homescreen/HomeScreen";
import { LoginScreen } from "./Containers/Login/LoginScreen";
import { Profile } from "./Containers/Account/Profile";
import { Series } from "./Containers/Series/Series";
import { Films } from "./Containers/Films/Films";
import { Trending } from "./Containers/Trending/Trending";
import { ProfileLoader } from "./components/Loader/ProfileLoader";
import { SearchResult } from "./Containers/SearchResults/SearchResult";
import { FavouriteList } from "./Containers/MyList/FavouriteList";
import { Nav } from "./components/Navigation/Nav";
import { setSearchInput } from "./store/slices/searchSlice";

function App() {
	const dispatch = useDispatch();
	const history = useHistory();
	
	const { searchInput } = useSelector((state) => state.search);

	console.log(searchInput);

	useEffect(() => {
		if (searchInput) {
			history.push(`/search`);
		}
	}, [searchInput, history]);

	const onSearch = async () => {
		try {
			history.push(`/search`);
		} catch (error) {
			console.log("Error", error);
		}
	};

	const handleSearchInputChange = (value) => {
		dispatch(setSearchInput(value));
	};

	const enter = (e) => {
		console.log("enter key clicked");
		if (e.key === "Enter" && searchInput.length > 1) {
			onSearch();
			e.target.value = "";
		}
		console.log("A key clicked!");
	};

	return (
		<div className="app">
			<Route
				render={({ location }) => {
					if (location.pathname !== "/") {
						return (
							<Nav
								searchInput={searchInput}
								setSearchInput={handleSearchInputChange}
								enter={enter}
							/>
						);
					}
				}}
			/>

			<Switch>
				<Route path="/" exact component={LoginScreen} />
				<Route path="/profileloader" exact component={ProfileLoader} />
				<Route
					path="/home"
					exact
					render={() => (
						<HomeScreen />
					)}
				/>
				<Route path="/profile" exact component={Profile} />
				<Route
					path="/series"
					render={() => (
						<Series />
					)}
				/>
				<Route
					path="/films"
					render={() => (
						<Films />
					)}
				/>
				<Route
					path="/trending"
					render={() => (
						<Trending />
					)}
				/>
				<Route
					path="/mylist"
					render={() => (
						<FavouriteList />
					)}
				/>
				<Route
					path="/search"
					render={() => (
						<SearchResult />
					)}
				/>
			</Switch>
		</div>
	);
}

export default App;
