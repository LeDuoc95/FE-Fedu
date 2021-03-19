import requestConfig from "services/requestConfig";
import { URL_USER } from "utils/constant";

let url_login = `${URL_USER}/api/token/`;

export const loginRequest = async (data) => {
  const response = await requestConfig.fetchPost("x-www-form-urlencoded", "", url_login, data);
  return response;
};

let urlLoginNoPassword = `${URL_USER}/login-no-pass`;

export const loginNoPasswordRequest = async (data) => {
  const response = await requestConfig.fetchPost("x-www-form-urlencoded", "", urlLoginNoPassword, data);
  return response;
};

let url_refresh_token = `${URL_USER}/api/token/refresh/`;

export const refreshTokenRequest = async (data) => {
  const response = await requestConfig.fetchPost("json", "", url_refresh_token, data, "refresh token failed");
  return response;
};
