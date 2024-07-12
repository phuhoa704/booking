import i18n from "i18next";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import {
  home_vi,
  footer_vi,
  ticket_vi,
  user_info_vi,
  rent_vi,
  confirmation_vi,
  navbar_vi,
  search_vi,
  payment_vi,
  result_vi,
} from "./locales/vi";
import {
  home_en,
  footer_en,
  ticket_en,
  user_info_en,
  rent_en,
  confirmation_en,
  navbar_en,
  search_en,
  payment_en,
  result_en,
} from "./locales/en";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const defaultLanguage = "en";

export const resources = {
  vi: {
    home: home_vi,
    footer: footer_vi,
    ticket: ticket_vi,
    user_info: user_info_vi,
    rent: rent_vi,
    confirmation: confirmation_vi,
    navbar: navbar_vi,
    search: search_vi,
    payment: payment_vi,
    result_vi,
  },
  en: {
    home: home_en,
    footer: footer_en,
    ticket: ticket_en,
    user_info: user_info_en,
    rent: rent_en,
    confirmation: confirmation_en,
    navbar: navbar_en,
    search: search_en,
    payment: payment_en,
    result_en,
  },
};

export const Language = {
  en: "en",
  vi: "vi",
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: defaultLanguage,
    supportedLngs: [Language.en, Language.vi],
  });

export const getLanguage = () => {
  return i18n.language || defaultLanguage;
};

export const changeLanguage = async (language) => {
  await i18next.changeLanguage(language);
};

export const getLocalizedFields = (obj, language) => {
  const localizedObj = {};
  Object.keys(obj).forEach((key) => {
    if (language === "vi" && key.endsWith("_vi")) {
      const baseKey = key.replace("_vi", "");
      localizedObj[baseKey] = obj[key];
    } else if (language !== "vi" && !key.endsWith("_vi")) {
      localizedObj[key] = obj[key];
    }
  });
  return localizedObj;
};

export default i18n;
