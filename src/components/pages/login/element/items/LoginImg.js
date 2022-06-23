import React from "react";
import background from "../../../../../image/login/login-form-img.jpg";
import SmallSocials from "../../../../common/SmallSocials";

const LoginImg = () => {
	return (
		<div
			className="login-form__img"
			style={{
				backgroundImage: `url(${background})`,
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "center",
				backgroundPosition: "center",
				backgroundSize: "cover",
				zIndex: "-2",
			}}
		>
			<div className="overlay-img"></div>
			<div className="df__center--justify-col--between height--100pc">
				<span className="logo--small margin--20 char__white font__size--20">
					Travel
				</span>
				<div className="login-form__img--description margin--30 margin__b--100">
					<span className="char__white font__size--30 font__weight--500 db">
						Keep it special
					</span>
					<div className="space__height--10"></div>
					<span className="char__white font__size--20 db">
						Capture your personal memories
					</span>
					<span className="char__white font__size--20 db">
						in a unique way, anywhere
					</span>
				</div>
				<SmallSocials
					pathFacebook={"https://www.facebook.com/"}
					pathTwitter={"https://twitter.com/?lang=vi"}
					pathInstagram={"https://www.instagram.com/"}
				/>
			</div>
		</div>
	);
};

export default LoginImg;
