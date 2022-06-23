import React from "react";
import { Link } from "react-router-dom";

const Experience = () => {
	return (
		<div
			data-aos="fade-left"
			data-aos-duration="2000"
			className="footer__experience"
		>
			<div className="font__size--20 font__weight--600 char__white">
				Experience
			</div>
			<div className="space__height--30 hide__on-mobile"></div>
			<Link
				to="#"
				className="db font__size--17 char__gray padding__r--30 padding__b--20"
			>
				Adventure
			</Link>
			<Link
				to="#"
				className="db font__size--17 char__gray padding__r--30 padding__b--20"
			>
				Hotel and Restaurant
			</Link>
			<Link
				to="#"
				className="db font__size--17 char__gray padding__r--30 padding__b--20"
			>
				Beach
			</Link>
			<Link
				to="#"
				className="db font__size--17 char__gray padding__r--30 padding__b--20"
			>
				Nature
			</Link>
			<Link
				to="#"
				className="db font__size--17 char__gray padding__r--30 padding__b--20"
			>
				Camping
			</Link>
			<Link
				to="#"
				className="db font__size--17 char__gray padding__r--30 padding__b--20"
			>
				Party
			</Link>
		</div>
	);
};

export default Experience;
