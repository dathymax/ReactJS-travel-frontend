import React, { useState } from "react";
import MainPage from "./components/pages/home/MainPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import AboutPage from "./components/pages/about/AboutPage";
import Blog from "./components/pages/blog/Blog";
import Destinations from "./components/pages/destinations/Destinations";
import Contact from "./components/pages/contact/Contact";
import DetailBlog from "./components/pages/blog/DetailBlog";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Tour from "reactour";
import { tourConfig } from "./tour-guide/tourConfig";

function App() {
	const [isTourOpen, setIsTourOpen] = useState(false);

	const disableBody = (target) => disableBodyScroll(target);
	const enableBody = (target) => enableBodyScroll(target);

	const closeTour = () => {
		setIsTourOpen(false);
	};

	const openTour = () => {
		setIsTourOpen(true);
		const overlayTour = document.getElementById("overlay-tour");
		const submitTour = document.getElementById("submit-tour");

		overlayTour.style.display = "none";
		submitTour.style.display = "none";
	};

	const hiddenSubmitTour = () => {
		const overlayTour = document.getElementById("overlay-tour");
		const submitTour = document.getElementById("submit-tour");

		overlayTour.style.display = "none";
		submitTour.style.display = "none";
	};

	const accentColor = "#5cb7b7";

	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/travel-frontend">
						<MainPage
							openTourGuide={openTour}
							idOverlayTour="overlay-tour"
							idSubmitTour="submit-tour"
							hiddenSubmitTour={hiddenSubmitTour}
						/>
					</Route>
					<Route path="/login">
						<LoginPage />
					</Route>
					<Route path="/destinations">
						<Destinations />
					</Route>
					<Route path="/about">
						<AboutPage />
					</Route>
					<Route path="/blog">
						<Blog />
					</Route>
					<Route path="/detail-blog/:id">
						<DetailBlog />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
				</Switch>
			</Router>
			<Tour
				onRequestClose={closeTour}
				steps={tourConfig}
				isOpen={isTourOpen}
				className="helper"
				rounded={5}
				accentColor={accentColor}
				onAfterOpen={disableBody}
				onBeforeClose={enableBody}
			/>
		</>
	);
}

export default App;
