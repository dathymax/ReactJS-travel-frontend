import { Button } from "@mui/material";
import { Translation } from "react-i18next";

export const tourConfig = [
	{
		selector: '[data-tut="reactour__login"]',
		content: (
			<Translation>
				{(t, { i18n }) => <span>{t("tourGuide.login")}</span>}
			</Translation>
		),
	},
	{
		selector: '[data-tut="reactour__language"]',
		content: (
			<Translation>
				{(t, { i18n }) => <span>{t("tourGuide.language")}</span>}
			</Translation>
		),
	},
	{
		selector: '[data-tut="reactour__socials"]',
		content: (
			<Translation>
				{(t, { i18n }) => <span>{t("tourGuide.socials")}</span>}
			</Translation>
		),
	},
	{
		selector: '[data-tut="reactour__socials--facebook"]',
		content: (
			<Translation>
				{(t, { i18n }) => <span>{t("tourGuide.socialsFB")}</span>}
			</Translation>
		),
	},
	{
		selector: '[data-tut="reactour__socials--twitter"]',
		content: (
			<Translation>
				{(t, { i18n }) => <span>{t("tourGuide.socialsTT")}</span>}
			</Translation>
		),
	},
	{
		selector: '[data-tut="reactour__socials--instagram"]',
		content: (
			<Translation>
				{(t, { i18n }) => <span>{t("tourGuide.socialsIG")}</span>}
			</Translation>
		),
	},
	{
		selector: '[data-tut="reactour__aboutus"]',
		content: (
			<Translation>
				{(t, { i18n }) => <span>{t("tourGuide.aboutUs")}</span>}
			</Translation>
		),
	},
];
