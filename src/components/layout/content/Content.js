import React from "react";
import Descriptions from "./element/descriptions/Descriptions";
import BestPlace from "./element/best-place/BestPlace";
import TourDestination from "./element/tour-destination/TourDestination";
import TouristFeedBack from "./element/tourist-feedback/TouristFeedBack";
import RecentPost from "./element/recent-post/RecentPost";
import About from "./element/about/About";
import TouristFeedBackBG from "../../../image/tourist-feedback/tourist-feedback-bg.webp";

const ContentTravel = () => {
	return (
		<div className="content" id="content">
			<section data-tut="reactour__aboutus" className="content__about">
				<About />
			</section>
			<section className="content__description">
				<Descriptions />
			</section>
			<section className="padding__tb--100">
				<BestPlace />
			</section>
			<section className="content__tour-destination">
				<TourDestination />
			</section>
			<section
				className="content__tourist-feedback tourist-feedback margin__tb--100 padding__tb--100"
				style={{
					backgroundImage: `url(${TouristFeedBackBG})`,
					backgroundRepeat: "no-repeat",
					backgroundAttachment: "center",
					backgroundPosition: "center",
					backgroundSize: "cover",
					zIndex: "-1",
				}}
			>
				<TouristFeedBack />
			</section>
			<section className="content__recent-post">
				<RecentPost />
			</section>
		</div>
	);
};

export default ContentTravel;
