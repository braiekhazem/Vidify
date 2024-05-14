import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en/index.ts";
import fr from "./locales/fr/index.ts";
import ar from "./locales/ar/index.ts";

const resources = {
  en,
  ar,
  fr,
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "ar",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
