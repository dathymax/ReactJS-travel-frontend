import { Grid } from "@mui/material";
import React from "react";
import Experience from "./element/Experience";
import Information from "./element/Information";
import Question from "./element/Question";
import Vacation from "./element/Vacation";
import background from "../../../image/footer/footer-bg.webp";

const FooterTravel = () => {
	return (
		<footer
			className="footer"
			style={{
				backgroundImage: `url(${background})`,
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "center",
				backgroundPosition: "center",
				backgroundSize: "cover",
				zIndex: "-1",
			}}
		>
			<div className="footer__body">
				<Grid container spacing={2}>
					<Grid item xs={6} md={3} lg={3}>
						<Vacation />
					</Grid>
					<Grid item xs={6} md={3} lg={3}>
						<Information />
					</Grid>
					<Grid item xs={6} md={3} lg={3}>
						<Experience />
					</Grid>
					<Grid item xs={6} md={3} lg={3}>
						<Question />
					</Grid>
				</Grid>
				<div className="space__height--40 hide__on-mobile"></div>
				<div
					data-aos="fade-up"
					data-aos-duration="2000"
					className="df__center--all char__gray font__size--15"
				>
					Copyright ©2022 All rights reserved | This template is made
					with by Do Tuan Dat
				</div>
			</div>
		</footer>
	);
};

export default FooterTravel;
