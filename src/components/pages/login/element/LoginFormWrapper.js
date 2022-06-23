import React from "react";
import LoginImg from "./items/LoginImg";
import LoginForm from "./items/LoginForm";
import { Grid } from "@mui/material";

const LoginFormWrapper = () => {
	return (
		<div className="login-form__wrapper df__center--all">
			<div className="login-form__inner box-shadow">
				<Grid container spacing={0}>
					<Grid item xs={0} md={6} lg={6}>
						<LoginImg />
					</Grid>
					<Grid item xs={12} md={6} lg={6}>
						<LoginForm />
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default LoginFormWrapper;
