import { getLanguage, getLocalizedFields } from "../i18n/config";

export const useLocalizedFields = (data, language) => {
  const currentLanguage = language ?? getLanguage();
  return getLocalizedFields(data, currentLanguage);
};
