import * as React from "react";
import { useTranslation } from "react-i18next";
import background from "../../../image/header/banner-header.jpg";
import clouds from "../../../image/header/clouds.png";
import SmallSocials from "../../common/SmallSocials";

const HeaderTravel = (props) => {
	const { t } = useTranslation();

	return (
		<header id="header" className="header df__center--justify--bw-col">
			<div
				className="banner"
				style={{
					backgroundImage: `url(${background})`,
					backgroundRepeat: "no-repeat",
					backgroundAttachment: "center",
					backgroundPosition: "center",
					backgroundSize: "cover",
					zIndex: "-1",
				}}
			>
				<div className="space__height--30"></div>

				<div className="overlay"></div>
				<div
					className="moving-clouds"
					style={{ backgroundImage: `url(${clouds})` }}
				></div>
			</div>
			<div className="space__height--100"></div>
			<div className="header__descriptions">
				<span className="char__white font__size--80 font__weight--600 db">
					{props.descriptionHead}
				</span>
				<div className="space__height--10"></div>
				<span className="char__white font__size--50 db">
					{props.descriptionDetail1}
				</span>
				<span className="char__white font__size--50 db">
					{props.descriptionDetail2}
				</span>
			</div>
			<div className="header__social df__center--all">
				<div className="width--200" data-tut="reactour__socials">
					<span className="char__white font__size--20 db">
						{t("header.findMeIn")}
					</span>
					<div className="space__height--5"></div>
					<SmallSocials
						dataTutIG="reactour__socials--instagram"
						dataTutFB="reactour__socials--facebook"
						dataTutTT="reactour__socials--twitter"
						pathFacebook={"https://www.facebook.com/"}
						pathTwitter={"https://twitter.com/?lang=vi"}
						pathInstagram={"https://www.instagram.com/"}
					/>
				</div>
			</div>
		</header>
	);
};

export default HeaderTravel;
