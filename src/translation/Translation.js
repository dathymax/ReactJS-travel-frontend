import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import TranslationContentEN from "./locales/en/content/TranslationContentEN.json";
import TranslationHeaderEN from "./locales/en/header/TranslationHeaderEN.json";
import TranslationTourGuideEN from "./locales/en/tour-guide/TranslationTourGuideEN.json";

import TranslationContentVI from "./locales/vi/content/TranslationContentVI.json";
import TranslationHeaderVI from "./locales/vi/header/TranslationHeaderVI.json";
import TranslationTourGuideVI from "./locales/vi/tour-guide/TranslationTourGuideVI.json";

const resources = {
	en: {
		translation: {
			...TranslationContentEN,
			...TranslationHeaderEN,
			...TranslationTourGuideEN,
		},
	},
	vi: {
		translation: {
			...TranslationContentVI,
			...TranslationHeaderVI,
			...TranslationTourGuideVI,
		},
	},
};

i18n.use(Backend)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: "vi",
		debug: true,
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
