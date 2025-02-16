import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { ar } from "./ar";
import { en } from "./en";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    lng: localStorage.getItem("i18nextLng") || "en",
    fallbackLng: localStorage.getItem("i18nextLng") || "en",
    interploation: {
      escapValue: false,
    },
    resources: {
      en,
      ar,
    },
  });
export default i18n;
