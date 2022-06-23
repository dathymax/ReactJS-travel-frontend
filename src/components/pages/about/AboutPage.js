import { BackTop } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import About from "../../layout/content/element/about/About";
import Descriptions from "../../layout/content/element/descriptions/Descriptions";
import FooterTravel from "../../layout/footer/Footer";
import Navigation from "../../layout/header/element/navigation/Navigation";
import HeaderTravel from "../../layout/header/Header";

const AboutPage = () => {
	const { t } = useTranslation();

	return (
		<div className="wrapper-for-nav">
			<BackTop />
			<div className="header__nav">
				<Navigation />
			</div>
			<HeaderTravel
				descriptionHead={t("header.about")}
				descriptionDetail1={t("header.aboutDetail")}
			/>
			<section className="content__about">
				<About />
			</section>
			<section className="content__description">
				<Descriptions />
			</section>
			<div className="space__height--100"></div>
			<FooterTravel />
		</div>
	);
};

export default AboutPage;
