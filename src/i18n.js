import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend"
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18n.use(HttpApi).use(I18nextBrowserLanguageDetector).use(initReactI18next).init({
    supportedLngs: ["uz", "ru"],
    fallbackLng: "uz",
    backend: {
        loadPath: "/locales/{{lng}}/translations.json",
    },
    react: {
        useSuspence: true,
    },
});

export default i18n;