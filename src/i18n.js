// src/i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en.json";
import hiTranslations from "./locales/hi.json";
import mrTranslations from "./locales/mr.json";

const resources = {
  e: {
    translation: enTranslations
  },
  h: {
    translation: hiTranslations
  },
  m: {
    translation: mrTranslations
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "m", // Default language
  fallbackLng: "m", // Fallback language
  interpolation: {
    escapeValue: false // React already escapes strings
  }
});
console.log("initReactI18next", i18n);
export default i18n;
