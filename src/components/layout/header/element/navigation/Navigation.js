import { Button } from "@mui/material";
import { Menu } from "@mui/icons-material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ChangeLanguage from "./item/ChangeLanguage";
import NavigationItem from "./item/NavigationItem";

const Navigation = () => {
	const { t } = useTranslation();
	const [navBar, setNavBar] = useState(false);

	const changeBackgroundNav = () => {
		if (window.scrollY >= 10) {
			setNavBar(true);
		} else {
			setNavBar(false);
		}
	};

	window.addEventListener("scroll", changeBackgroundNav);

	return (
		<div className={navBar ? "header__nav active" : "header__nav"}>
			<div className="container__wrapper--outer margin--auto padding__tb--20">
				<div className="df__center--justify--bw df__center--align">
					<div className="header__logo">
						<Link
							to="/"
							className="header__logo char__white font__size--30 orange--hover"
						>
							Travel
						</Link>
					</div>
					<div className="hide__on-pc show__on-mobile">
						<Button>
							<Menu sx={{ color: "black", fontSize: "30px" }} />
						</Button>
					</div>
					<div className="df__center--justify--bw hide__on-mobile">
						<NavigationItem
							activeOnlyWhenExact={true}
							to="/"
							label={t("navigation.home")}
						/>
						<NavigationItem
							to="/about"
							label={t("navigation.about")}
						/>
						<NavigationItem
							to="/destinations"
							label={t("navigation.destinations")}
						/>
						<NavigationItem
							to="/blog"
							label={t("navigation.blog")}
						/>
						<NavigationItem
							to="/contact"
							label={t("navigation.contact")}
						/>
						<Link
							to="/login"
							className="text__decoration--none"
							data-tut="reactour__login"
						>
							<span className="join-with-us char__white font__size--15 background__color--btn-nav padding__tb--10 padding__lr--20 border__rds--20 margin__lr--20">
								{t("navigation.joinWithUs")}
							</span>
						</Link>
						<ChangeLanguage />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
