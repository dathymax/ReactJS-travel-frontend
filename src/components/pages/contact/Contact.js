import { Grid } from "@mui/material";
import { BackTop } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import Map from "../../common/Map";
import FooterTravel from "../../layout/footer/Footer";
import Navigation from "../../layout/header/element/navigation/Navigation";
import HeaderTravel from "../../layout/header/Header";

const Contact = () => {
	const { t } = useTranslation();

	return (
		<div className="wrapper-for-nav">
			<BackTop />
			<div className="header__nav">
				<Navigation />
			</div>
			<HeaderTravel descriptionHead={t("header.contact")} />
			<div className="space__height--100"></div>
			<div className="container__wrapper--outer margin--auto">
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<Map />
					</Grid>
				</Grid>
			</div>
			<div className="space__height--100 hide__on--mobile"></div>
			<FooterTravel />
		</div>
	);
};

export default Contact;
