import React from "react";
import LargeSocials from "../../../common/LargeSocials";

const Vacation = () => {
	return (
		<div
			data-aos="fade-right"
			data-aos-duration="2000"
			className="footer__vacation"
		>
			<div className="font__size--20 font__weight--600 char__white">
				Vacation
			</div>
			<div className="space__height--30 hide__on-mobile"></div>
			<div className="font__size--17 char__gray padding__r--30">
				Far far away, behind the word mountains, far from the countries
				Vokalia and Consonantia, there live the blind texts.
			</div>
			<div className="space__height--30 hide__on-mobile"></div>
			<LargeSocials
				pathFacebook={"https://www.facebook.com/"}
				pathTwitter={"https://twitter.com/?lang=vi"}
				pathInstagram={"https://www.instagram.com/"}
				sx={{
					color: "white",
					fontSize: "40px",
					"&:hover": {
						color: "#f9ab30",
					},
				}}
			/>
		</div>
	);
};

export default Vacation;
