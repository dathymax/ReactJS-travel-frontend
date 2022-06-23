import React, { useState } from "react";
import BigSocials from "../../../../common/BigSocials";
import { TextField, Box, Button } from "@mui/material";
import { Link, useHistory } from "react-router-dom";

const LoginForm = () => {
	const [isRegister, setIsRegister] = useState(true);
	const history = useHistory();

	const handleRegister = () => {
		setIsRegister(!isRegister);
	};

	const testLogin = () => {
		history.push("/");
	};

	return (
		<div className="login-form__form border__rds-tb--5 df__center--all">
			<div className="df__center--align-col">
				<span className="login-form__logo--big char__black font__size--35">
					Travel
				</span>
				<span className="login-form__logo--big char__black font__size--20">
					Join with
				</span>
				<BigSocials
					pathFacebook="https://www.facebook.com/"
					pathGoogle="https://www.google.com/"
					pathLinkedIn="https://www.linkedin.com/"
					sx={{
						color: "black",
					}}
				/>
				<div className="char__black font__size--15 margin__t--20">
					{!isRegister ? (
						<span>or create your account</span>
					) : (
						<span>or use your account</span>
					)}
				</div>
				<Box
					component="form"
					sx={{
						mt: "20px",
						width: "300px",
					}}
					noValidate
					autoComplete="off"
				>
					<div>
						<TextField
							label="Account"
							id="outlined-size-small"
							size="small"
							sx={{
								width: "100%",
								mb: "20px",
							}}
						/>
						<TextField
							label="Password"
							id="outlined-size-small"
							size="small"
							sx={{
								width: "100%",
								mb: "20px",
							}}
						/>
						{!isRegister ? (
							<TextField
								label="Retype password"
								id="outlined-size-small"
								size="small"
								sx={{
									width: "100%",
								}}
							/>
						) : (
							<></>
						)}
					</div>
				</Box>
				{!isRegister ? (
					<></>
				) : (
					<div className="redirect-action df__center--justify--fe margin__t--10 width--300">
						<div className="forgot-password">
							<Link
								to="/forgot-password"
								className="char__black font__size--12 text__decoration--none"
							>
								You forgot your password?
							</Link>
						</div>
					</div>
				)}
				<div className="space__height--30"></div>
				<Button
					variant="contained"
					onClick={testLogin}
					sx={{
						width: "200px",
						borderRadius: "20px",
						backgroundColor: "rgba(0, 0, 0, 0.5)",
						"&:hover": {
							backgroundColor: "rgba(0, 0, 0, 0.7)",
						},
					}}
				>
					{!isRegister ? "Register" : "Sign in"}
				</Button>
				<div className="redirect-action df__center--all margin__t--20 width--300">
					{!isRegister ? (
						<div className="forgot-password char__black font__size--12">
							You have account? Login{" "}
							<span
								className="char__black font__size--12 text__decoration--underline cursor__pointer"
								onClick={handleRegister}
							>
								here
							</span>
							?
						</div>
					) : (
						<div className="forgot-password char__black font__size--12">
							You not have account? Register{" "}
							<span
								className="char__black font__size--12 text__decoration--underline cursor__pointer"
								onClick={handleRegister}
							>
								here
							</span>
							?
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
