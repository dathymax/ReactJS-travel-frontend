import { CardContent } from "@mui/material";
import React from "react";

const BestPlaceItem = (props) => {
	return (
		<div
			className="card cursor__pointer hover__scale--effect"
			style={{
				backgroundImage: `url(${props.urlItem})`,
				backgroundRepeat: "no-repeat",
				backgroundAttachment: "center",
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
		>
			<CardContent
				sx={{
					height: "80%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					cursor: "pointer",
				}}
			>
				<div className="char__white font__size--20 font__weight--600">
					{props.countryItem}
				</div>
			</CardContent>
		</div>
	);
};

export default BestPlaceItem;
