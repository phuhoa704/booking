import axios from "axios";
import queryString from "query-string";
import { API } from "../configs/apis";
import { TOKEN, TYPE_TOPKEN } from "../configs/constants";
import { getLanguage } from "../i18n/config";

const httpRequest = axios.create({
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "X-Requested-With",
    "X-localization": getLanguage() || window.localStorage.getItem("i18nNext"),
  },

  paramsSerializer: (params) => queryString.stringify(params),
});

httpRequest.interceptors.request.use(async (config) => {
  config.baseURL = API;
  const token = window.localStorage.getItem(TOKEN);
  const typeToken = window.localStorage.getItem(TYPE_TOPKEN);
  if (token) {
    config.headers.Authorization = `${typeToken} ${token}`;
  }
  return config;
});

httpRequest.interceptors.response.use(
  (response) => {
    if (response) {
      return response;
    }
    return response;
  },
  (error) => {
    console.log(error);
    throw error;
  }
);
export default httpRequest;
