import { Carousel } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import SomeoneImg from "../../../../../image/tourist-feedback/someone.png";
import TouristFeedBackItem from "./item/TouristFeedBackItem";

const TouristFeedBack = () => {
	const { t } = useTranslation();

	const datas = [
		{
			comment:
				"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
			avatar: SomeoneImg,
			author: "Roger Scott",
			job: "Marketing Manager",
		},
		{
			comment:
				"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
			avatar: SomeoneImg,
			author: "Roger Scott",
			job: "Marketing Manager",
		},
		{
			comment:
				"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
			avatar: SomeoneImg,
			author: "Roger Scott",
			job: "Marketing Manager",
		},
		{
			comment:
				"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
			avatar: SomeoneImg,
			author: "Roger Scott",
			job: "Marketing Manager",
		},
		{
			comment:
				"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
			avatar: SomeoneImg,
			author: "Roger Scott",
			job: "Marketing Manager",
		},
	];

	return (
		<>
			<div className="container__wrapper--outer margin--auto ">
				<h1
					data-aos="fade-down"
					data-aos-duration="2000"
					className="char__black font__size--40 font__weight--600 text__align--center"
				>
					{t("touristFeedback.heading")}
				</h1>
				<div data-aos="fade-right" data-aos-duration="2000">
					<Carousel
						dotPosition="right"
						className="tourist-feedback__wrapper-item"
					>
						{datas.map((data) => (
							<TouristFeedBackItem
								comment={`${data.comment.slice(0, 250)}...`}
								avatar={data.avatar}
								author={data.author}
								job={data.job}
							/>
						))}
					</Carousel>
				</div>
			</div>
		</>
	);
};

export default TouristFeedBack;
