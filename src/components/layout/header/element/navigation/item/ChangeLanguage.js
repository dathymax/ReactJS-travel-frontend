import React, { useState } from "react";
import i18n from "../../../../../../translation/Translation";
import VietNam from "../../../../../../image/navigation/vietnam.png";
import USA from "../../../../../../image/navigation/usa.png";

const ChangeLanguage = () => {
	const [language, setLanguage] = useState("en");

	function changeLanguage() {
		i18n.changeLanguage(language);
	}

	function changeToVI() {
		setLanguage("vi");
		changeLanguage();
	}

	function changeToEN() {
		setLanguage("en");
		changeLanguage();
	}

	function changeImgLanguage() {
		if (language === "vi") {
			return (
				<img
					src={USA}
					alt="US"
					className="width--20 cursor__pointer"
					onClick={changeToEN}
				/>
			);
		} else {
			return (
				<img
					src={VietNam}
					alt="VI"
					className="width--20 cursor__pointer"
					onClick={changeToVI}
				/>
			);
		}
	}

	return (
		<div
			data-tut="reactour__language"
			className="header__change-language margin__lr--10"
		>
			{changeImgLanguage()}
		</div>
	);
};

export default ChangeLanguage;
