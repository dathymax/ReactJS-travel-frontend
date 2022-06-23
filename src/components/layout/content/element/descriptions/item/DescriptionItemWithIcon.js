import React, { useEffect } from "react";
import Aos from "aos";

const DescriptionItemWithIcon = (props) => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<div className="content__destination-item">
			<div
				data-aos="fade-up"
				data-aos-duration="2000"
				className="content__destination-item--icon"
			>
				<img
					src={props.srcItem}
					alt={props.altItem}
					className="width--60"
				/>
			</div>
			<div
				data-aos="fade-up"
				data-aos-duration="2000"
				className="char__black font__size--20"
			>
				{props.detailItemUp}
			</div>
			<div className="space__height--20"></div>
			<div
				data-aos="fade-up"
				data-aos-duration="2000"
				className="char__gray font__size--15"
			>
				{props.detailItemDown}
			</div>
		</div>
	);
};

export default DescriptionItemWithIcon;
