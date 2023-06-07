import { axiosForLibraryAPI } from "./axios";
import { clearTokens, getRefreshToken } from "./localStorage";
import { saveAccessToken, saveRefreshToken } from "./localStorage";
import jwt_decode from "jwt-decode";

const AUTHENTICATION_URLS = {
  LOGIN: "/v1/user/login",
  LOGOUT: "/v1/user/logout",
  LOGOUT_ALL: "/v1/user/logout_all",
  REFRESH_TOKEN: "/v1/user/refresh_token",
  REGISTER: "/v1/user/",
};
export const validateToken = (token) => {
  if (token === null || token === undefined || token === "") {
    return false;
  }
  const decoded = jwt_decode(token);
  return Date.now() < decoded.exp * 1000;
};

export const getAccessTokenFromRefreshToken = () => {
  const refreshToken = getRefreshToken();
  if (!validateToken(refreshToken))
    return Promise.reject({ data: { error: "invalid_refresh_token" } });
  return axiosForLibraryAPI
    .request({
      method: "post",
      url: AUTHENTICATION_URLS.REFRESH_TOKEN,
      data: { refresh_token: refreshToken },
    })
    .then((response) => {
      const access_token = response.data.data.access_token;
      if (access_token) {
        saveAccessToken(access_token);
        axiosForLibraryAPI.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${access_token}`;
      } else clearTokens();
      return Promise.resolve(response);
    });
};
export const login = (payload) => {
  return axiosForLibraryAPI
    .request({
      method: "post",
      url: AUTHENTICATION_URLS.LOGIN,
      data: payload,
      query: "123",
    })
    .then((response) => {
      axiosForLibraryAPI.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.data.access_token}`;
      saveRefreshToken(response.data.data.refresh_token);
      saveAccessToken(response.data.data.access_token);
      return getCurrentUser();
    });
};
export const getCurrentUser = () => {
  return axiosForLibraryAPI
    .request({
      method: "get",
      url: "/v1/user/current",
    })
    .then((response) => {
      return Promise.resolve(response);
    });
};
