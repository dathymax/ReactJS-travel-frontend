import { Button } from "@mui/material";
import { BackTop } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import ContentTravel from "../../layout/content/Content";
import FooterTravel from "../../layout/footer/Footer";
import Navigation from "../../layout/header/element/navigation/Navigation";
import HeaderTravel from "../../layout/header/Header";

const MainPage = (props) => {
	const { t } = useTranslation();

	return (
		<div className="main-page">
			<div className="wrapper-for-nav">
				<BackTop />
				<Navigation />
				<HeaderTravel
					descriptionHead={t("header.descriptionHead")}
					descriptionDetail1={t("header.descriptionDetail1")}
					descriptionDetail2={t("header.descriptionDetail2")}
				/>
				<ContentTravel />
				<FooterTravel />
			</div>
			<div className="overlay-tour-guide" id={props.idOverlayTour} />
			<div
				className="submit-tour-guide df__center--all"
				id={props.idSubmitTour}
			>
				<div className="submit-tour-guide--inner padding--20">
					<div>
						<p>{t("tourGuide.firstTime1")}</p>
						<p>{t("tourGuide.firstTime2")}</p>
						<p>{t("tourGuide.firstTime3")}</p>
						<p>{t("tourGuide.firstTime4")}</p>
					</div>
					<div className="space__height--20"></div>
					<Button
						onClick={props.openTourGuide}
						variant="contained"
						color="success"
						sx={{ textTransform: "none", m: "0 10px" }}
					>
						{t("tourGuide.accept")}
					</Button>
					<Button
						onClick={props.hiddenSubmitTour}
						variant="outlined"
						color="error"
						sx={{ textTransform: "none", m: "0 10px" }}
					>
						{t("tourGuide.cancel")}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
