import { Button, Grid } from "@mui/material";
import React from "react";
import Activities from "../../../../../image/descriptions/activities.png";
import TourManager from "../../../../../image/descriptions/map.png";
import Tours from "../../../../../image/descriptions/tour-guide.png";
import Travel from "../../../../../image/descriptions/travel.png";
import Memories from "../../../../../image/descriptions/memories.webp";
import { useTranslation } from "react-i18next";
import DescriptionItemWithIcon from "./item/DescriptionItemWithIcon";

const Descriptions = () => {
	const { t } = useTranslation();

	return (
		<>
			<div className="content__descriptions-up">
				<div className="container__wrapper--outer margin--auto">
					<Grid container spacing={12}>
						<Grid item xs={12} md={3} lg={3}>
							<DescriptionItemWithIcon
								srcItem={Activities}
								altItem="Activities"
								detailItemUp={t("descriptions.activities")}
								detailItemDown={t(
									"descriptions.activitiesDetail"
								)}
							/>
							<div className="space__height--30"></div>
							<DescriptionItemWithIcon
								srcItem={Tours}
								altItem="Tours"
								detailItemUp={t("descriptions.locationManager")}
								detailItemDown={t(
									"descriptions.locationManagerDetail"
								)}
							/>
						</Grid>
						<Grid item xs={12} md={3} lg={3}>
							<DescriptionItemWithIcon
								srcItem={Travel}
								altItem="Travel"
								detailItemUp={t(
									"descriptions.travelArrangements"
								)}
								detailItemDown={t(
									"descriptions.travelArrangementsDetail"
								)}
							/>
							<div className="space__height--30"></div>
							<DescriptionItemWithIcon
								srcItem={TourManager}
								altItem="TourManager"
								detailItemUp={t("descriptions.locationManager")}
								detailItemDown={t(
									"descriptions.locationManagerDetail"
								)}
							/>
						</Grid>
						<Grid item xs={12} md={6} lg={6}>
							<div className="content__destination-item">
								<div
									data-aos="fade-up"
									data-aos-duration="2000"
									className="char__black font__size--40 font__weight--600"
								>
									{t("descriptions.headingRight1")}
								</div>
								<div
									data-aos="fade-up"
									data-aos-duration="2000"
									className="char__black font__size--40 font__weight--600"
								>
									{t("descriptions.headingRight2")}
								</div>
								<div className="space__height--30"></div>
								<div
									data-aos="fade-up"
									data-aos-duration="2000"
									className="char__gray font__size--15"
								>
									{t("descriptions.contentRight1")}
								</div>
								<div className="space__height--30"></div>
								<div
									data-aos="fade-up"
									data-aos-duration="2000"
									className="char__gray font__size--15"
								>
									{t("descriptions.contentRight2")}
								</div>
								<div className="space__height--30"></div>
								<div
									data-aos="fade-up"
									data-aos-duration="2000"
								>
									<Button
										variant="contained"
										sx={{
											backgroundColor: "#f9ab30",
											borderRadius: "30px",
											"&:hover": {
												backgroundColor: "#f9ab30",
												opacity: "0.8",
											},
										}}
									>
										{t("descriptions.searchDestination")}
									</Button>
								</div>
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
			<div className="content__descriptions-down">
				<div className="container__wrapper--outer margin--auto">
					<Grid
						container
						spacing={12}
						sx={{
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Grid item xs={12} md={6} lg={6}>
							<div className="content__destination-item">
								<div
									data-aos="fade-right"
									data-aos-duration="2000"
									className="content__destination-item--icon hover__scale--wrapper"
								>
									<img
										src={Memories}
										alt="Memories"
										className="width--100pc hover__scale--effect"
									/>
								</div>
							</div>
						</Grid>
						<Grid item xs={12} md={6} lg={6}>
							<div className="content__destination-item">
								<div
									data-aos="fade-left"
									data-aos-duration="2000"
									className="char__black font__size--40 font__weight--600"
								>
									{t("descriptions.headingRight3")}
								</div>
								<div
									data-aos="fade-left"
									data-aos-duration="2000"
									className="char__black font__size--40 font__weight--600"
								>
									{t("descriptions.headingRight4")}
								</div>
								<div
									data-aos="fade-left"
									data-aos-duration="2000"
									className="char__black font__size--40 font__weight--600"
								>
									{t("descriptions.headingRight5")}
								</div>
								<div className="space__height--30"></div>
								<div
									data-aos="fade-left"
									data-aos-duration="2000"
									className="char__gray font__size--15"
								>
									{t("descriptions.contentRight3")}
								</div>
								<div className="space__height--30"></div>
								<Grid container spacing={12}>
									<Grid item xs={4} md={4} lg={4}>
										<div
											data-aos="fade-left"
											data-aos-duration="2000"
											className="df__center--all-col"
										>
											<span className="char__orange font__size--30 font__weight--600">
												300
											</span>
											<div className="space__height--10"></div>
											<span
												data-aos="fade-left"
												data-aos-duration="2000"
												className="char__gray"
											>
												{t(
													"descriptions.successfullTour"
												)}
											</span>
										</div>
									</Grid>
									<Grid item xs={4} md={4} lg={4}>
										<div className="df__center--all-col">
											<span
												data-aos="fade-left"
												data-aos-duration="2000"
												className="char__orange font__size--30 font__weight--600"
											>
												24.000
											</span>
											<div className="space__height--10"></div>
											<span
												data-aos="fade-left"
												data-aos-duration="2000"
												className="char__gray"
											>
												{t("descriptions.happyTourist")}
											</span>
										</div>
									</Grid>
									<Grid item xs={4} md={4} lg={4}>
										<div className="df__center--all-col">
											<span
												data-aos="fade-left"
												data-aos-duration="2000"
												className="char__orange font__size--30 font__weight--600"
											>
												200
											</span>
											<div className="space__height--10"></div>
											<span
												data-aos="fade-left"
												data-aos-duration="2000"
												className="char__gray"
											>
												{t(
													"descriptions.placeExplored"
												)}
											</span>
										</div>
									</Grid>
								</Grid>
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
		</>
	);
};

export default Descriptions;
