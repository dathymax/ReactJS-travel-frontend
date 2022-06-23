import React from "react";
import { FmdGood, LocalPhone, Mail } from "@mui/icons-material";

const Question = () => {
	return (
		<div
			data-aos="fade-left"
			data-aos-duration="2000"
			className="footer__question"
		>
			<div className="font__size--20 font__weight--600 char__white">
				Have a Questions?
			</div>
			<div className="space__height--30 hide__on-mobile"></div>
			<div className="df__center--align padding__b--20">
				<FmdGood sx={{ color: "white", fontSize: "17px" }} />
				<div className="char__gray font__size--17 padding__l--20 ">
					Ha Noi - Viet Nam
				</div>
			</div>
			<div className="df__center--align padding__b--20">
				<LocalPhone sx={{ color: "white", fontSize: "17px" }} />
				<div className="char__gray font__size--17 padding__l--20 ">
					<a
						href="tel:0984193954"
						className="text__decoration--none char__gray"
					>
						+84 984 193 954
					</a>
				</div>
			</div>
			<div className="df__center--align padding__b--20">
				<Mail sx={{ color: "white", fontSize: "17px" }} />
				<div className="char__gray font__size--17 padding__l--20 ">
					<a
						href="mailto:dathymax@gmail.com"
						className="text__decoration--none font__size--17"
					>
						dathymax@gmail.com
					</a>
				</div>
			</div>
		</div>
	);
};

export default Question;
