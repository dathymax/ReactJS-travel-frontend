import React from "react";
import { useTranslation } from "react-i18next";
import Navigation from "../../layout/header/element/navigation/Navigation";
import HeaderTravel from "../../layout/header/Header";

const DetailBlog = () => {
	const { t } = useTranslation();

	return (
		<div className="wrapper-for-nav">
			<div className="header__nav">
				<Navigation />
			</div>
			<HeaderTravel descriptionHead={t("header.detailBlog")} />
			<div className="space__height--100"></div>
		</div>
	);
};

export default DetailBlog;
