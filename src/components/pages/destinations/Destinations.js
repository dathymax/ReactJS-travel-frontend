import { BackTop } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import BestPlace from "../../layout/content/element/best-place/BestPlace";
import TourDestination from "../../layout/content/element/tour-destination/TourDestination";
import FooterTravel from "../../layout/footer/Footer";
import Navigation from "../../layout/header/element/navigation/Navigation";
import HeaderTravel from "../../layout/header/Header";

const Destinations = () => {
	const { t } = useTranslation();

	return (
		<div className="wrapper-for-nav">
			<BackTop />
			<div className="header__nav">
				<Navigation />
			</div>
			<HeaderTravel
				descriptionHead={t("header.destination")}
				descriptionDetail1={t("header.destinationDetail")}
			/>
			<section className="padding__tb--100">
				<BestPlace />
			</section>
			<section className="content__tour-destination">
				<TourDestination />
			</section>
			<div className="space__height--100"></div>
			<FooterTravel />
		</div>
	);
};

export default Destinations;
