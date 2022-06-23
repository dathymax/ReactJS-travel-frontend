import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const NavigationItem = ({ label, to, activeOnlyWhenExact }, props) => {
	let match = useRouteMatch({
		path: to,
		exact: activeOnlyWhenExact,
	});

	return (
		<Link
			to={to}
			className={
				match
					? "margin__lr--20 text__decoration--none char__white primary--hover char__orange"
					: "margin__lr--20 text__decoration--none char__white primary--hover"
			}
		>
			<span className=" font__size--15">{label}</span>
		</Link>
	);
};

export default NavigationItem;
