import { Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import TourDestination1 from "../../../../../image/tour-destination/tour-destination-1.webp";
import TourDestination2 from "../../../../../image/tour-destination/tour-destination-2.webp";
import TourDestination3 from "../../../../../image/tour-destination/tour-destination-3.webp";
import TourDestination4 from "../../../../../image/tour-destination/tour-destination-4.webp";
import TourDestination5 from "../../../../../image/tour-destination/tour-destination-5.webp";
import TourDestination6 from "../../../../../image/tour-destination/tour-destination-6.webp";
import TourDestinationItem from "./item/TourDestinationItem";

const TourDestination = () => {
	const { t } = useTranslation();

	const datas = [
		{
			img: TourDestination1,
			altItem: "The house from the offer.",
			price: `300$/${t("tourDestination.person")}`,
			day: "8 Days Tour",
			destination: "Italy",
			shower: 2,
			bed: 3,
			near: "Near Mountain",
		},
		{
			img: TourDestination2,
			altItem: "The house from the offer.",
			price: `300$/${t("tourDestination.person")}`,
			day: "10 Days Tour",
			destination: "Australia",
			shower: 2,
			bed: 3,
			near: "Near Beach",
		},
		{
			img: TourDestination3,
			altItem: "The house from the offer.",
			price: `300$/${t("tourDestination.person")}`,
			day: "7 Days Tour",
			destination: "Brazil",
			shower: 2,
			bed: 3,
			near: "Near Mountain",
		},
		{
			img: TourDestination4,
			altItem: "The house from the offer.",
			price: `300$/${t("tourDestination.person")}`,
			day: "8 Days Tour",
			destination: "America",
			shower: 2,
			bed: 3,
			near: "Near Mountain",
		},
		{
			img: TourDestination5,
			altItem: "The house from the offer.",
			price: `300$/${t("tourDestination.person")}`,
			day: "10 Days Tour",
			destination: "Nepal",
			shower: 2,
			bed: 3,
			near: "Near Mountain",
		},
		{
			img: TourDestination6,
			altItem: "The house from the offer.",
			price: `300$/${t("tourDestination.person")}`,
			day: "7 Days Tour",
			destination: "France",
			shower: 2,
			bed: 3,
			near: "Near Mountain",
		},
	];

	return (
		<>
			<div className="container__wrapper--outer margin--auto">
				<h1
					data-aos="fade-up"
					data-aos-duration="2000"
					className="char__black font__size--40 font__weight--600 text__align--center"
				>
					{t("tourDestination.heading")}
				</h1>
				<Grid container spacing={4}>
					{datas.map((item) => (
						<Grid item xs={6} md={4} lg={4}>
							<TourDestinationItem
								srcItem={item?.img}
								altItem={item?.altItem}
								priceItem={item?.price}
								dayItem={item?.day}
								destinationItem={item?.destination}
								showerItem={item?.shower}
								bedItem={item?.bed}
								nearWhereItem={item?.near}
							/>
						</Grid>
					))}
				</Grid>
			</div>
		</>
	);
};

export default TourDestination;
