import React from "react";
import { Button, Grid } from "@mui/material";
import PlaneImg from "../../../../../image/about/plane.webp";
import BoatImg from "../../../../../image/about/boat.webp";
import { useTranslation } from "react-i18next";

const About = () => {
	const { t } = useTranslation();

	return (
		<>
			<div className="container__wrapper--outer margin--auto padding__tb--80">
				<Grid container spacing={12}>
					<Grid item xs={12} md={6} lg={6}>
						<div
							data-aos="fade-up"
							data-aos-duration="2000"
							className="char__orange font__size--20"
						>
							{t("aboutUs.heading")}
						</div>
						<div
							data-aos="fade-up"
							data-aos-duration="2000"
							className="char__black font__size--50 font__weight--600"
						>
							{t("aboutUs.headingBig")}
						</div>
						<div className="space__height--20"></div>
						<div
							data-aos="fade-up"
							data-aos-duration="2000"
							className="char__gray font__size--15"
						>
							{t("aboutUs.aboutDetail1")}
						</div>
						<div className="space__height--20"></div>
						<div
							data-aos="fade-up"
							data-aos-duration="2000"
							className="char__gray font__size--15"
						>
							{t("aboutUs.aboutDetail2")}
						</div>
						<div className="space__height--20"></div>
						<div data-aos="fade-up" data-aos-duration="2000">
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
								{t("aboutUs.readMore")}
							</Button>
						</div>
					</Grid>
					<Grid item xs={12} md={6} lg={6}>
						<Grid container spacing={3}>
							<Grid item xs={12} md={6} lg={6}>
								<div
									data-aos="fade-left"
									data-aos-duration="2000"
									className="hover__scale--wrapper"
								>
									<img
										src={PlaneImg}
										alt="PlaneImg"
										className="width--100pc hover__scale--effect"
									/>
								</div>
							</Grid>
							<Grid item xs={12} md={6} lg={6}>
								<div className="space__height--40"></div>
								<div
									data-aos="fade-left"
									data-aos-duration="2500"
									className="hover__scale--wrapper"
								>
									<img
										src={BoatImg}
										alt="BoatImg"
										className="width--100pc hover__scale--effect"
									/>
								</div>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</>
	);
};

export default About;
