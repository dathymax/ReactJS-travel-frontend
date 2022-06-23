import React from "react";
import background from "../../../image/login/banner-login.jpg";
import clouds from "../../../image/header/clouds.png";
import LoginFormWrapper from "./element/LoginFormWrapper";

const LoginPage = () => {
	return (
		<>
			<div
				id="login"
				className="login"
				style={{
					backgroundImage: `url(${background})`,
					backgroundRepeat: "no-repeat",
					backgroundAttachment: "center",
					backgroundPosition: "center",
					backgroundSize: "cover",
					zIndex: "-2",
				}}
			>
				<div
					className="moving-clouds"
					style={{ backgroundImage: `url(${clouds})` }}
				/>
				<div className="overlay" />
			</div>
			<LoginFormWrapper />
		</>
	);
};

export default LoginPage;
