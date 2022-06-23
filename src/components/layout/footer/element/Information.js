import React from "react";
import { Link } from "react-router-dom";

const Information = () => {
	return (
		<div
			data-aos="fade-right"
			data-aos-duration="2000"
			className="footer__information"
		>
			<div className="font__size--20 font__weight--600 char__white">
				Information
			</div>
			<div className="space__height--30 hide__on-mobile"></div>
			<Link
				to="#"
				className="db font__size--17 char__gray padding__r--30 padding__b--20"
			>
				Online Enquiry
			</Link>
			<Link
				to="#"
				className="db font__size--17 char__gray padding__r--30 padding__b--20"
			>
				General Enquiries
			</Link>
			<Link
				to="#"
				className="db font__size--17 char__gray padding__r--30 padding__b--20"
			>
				Booking Conditions
			</Link>
			<Link
				to="#"
				className="db font__size--17 char__gray padding__r--30 padding__b--20"
			>
				Privacy and Policy
			</Link>
			<Link
				to="#"
				className="db font__size--17 char__gray padding__r--30 padding__b--20"
			>
				Refund Policy
			</Link>
			<Link
				to="#"
				className="db font__size--17 char__gray padding__r--30 padding__b--20"
			>
				Call Us
			</Link>
		</div>
	);
};

export default Information;
