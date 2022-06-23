import { Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import BestPlace1 from "../../../../../image/best-place/best-place-1.webp";
import BestPlace2 from "../../../../../image/best-place/best-place-2.webp";
import BestPlace3 from "../../../../../image/best-place/best-place-3.webp";
import BestPlace4 from "../../../../../image/best-place/best-place-4.webp";
import BestPlaceItem from "./item/BestPlaceItem";

const BestPlace = () => {
	const { t } = useTranslation();

	return (
		<>
			<div className="container__wrapper--outer margin--auto padding__tb--60">
				<h1
					data-aos="fade-down"
					data-aos-duration="2000"
					className="char__black font__size--40 font__weight--600 text__align--center"
				>
					{t("bestPlace.heading")}
				</h1>
				<div className="space__height--40"></div>
				<Grid container spacing={6}>
					<Grid item xs={6} md={3} lg={3}>
						<div data-aos="fade-up" data-aos-duration="2000">
							<BestPlaceItem
								urlItem={BestPlace1}
								countryItem="Singapore"
							/>
						</div>
					</Grid>
					<Grid item xs={6} md={3} lg={3}>
						<div data-aos="fade-down" data-aos-duration="2000">
							<BestPlaceItem
								urlItem={BestPlace2}
								countryItem="Canada"
							/>
						</div>
					</Grid>
					<Grid item xs={6} md={3} lg={3}>
						<div data-aos="fade-up" data-aos-duration="2000">
							<BestPlaceItem
								urlItem={BestPlace3}
								countryItem="Thailand"
							/>
						</div>
					</Grid>
					<Grid item xs={6} md={3} lg={3}>
						<div data-aos="fade-down" data-aos-duration="2000">
							<BestPlaceItem
								urlItem={BestPlace4}
								countryItem="Australia"
							/>
						</div>
					</Grid>
				</Grid>
			</div>
		</>
	);
};

export default BestPlace;
