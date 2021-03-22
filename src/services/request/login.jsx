import requestConfig from "services/requestConfig";
import { URL_USER, TOKEN_KEY_BE } from "utils/constant";
import localStorage from "utils/localStorage";

const Token = localStorage.getToken(TOKEN_KEY_BE);

let url_login = `${URL_USER}/api/token/`;

export const loginRequest = async (data) => {
  const response = await requestConfig.fetchPost(
    "x-www-form-urlencoded",
    "",
    url_login,
    data
  );
  return response;
};

let urlLoginNoPassword = `${URL_USER}/login-no-pass`;

export const loginNoPasswordRequest = async (data) => {
  const response = await requestConfig.fetchPost(
    "x-www-form-urlencoded",
    "",
    urlLoginNoPassword,
    data
  );
  return response;
};

let url_refresh_token = `${URL_USER}/api/token/refresh/`;

export const refreshTokenRequest = async (data) => {
  const response = await requestConfig.fetchPost(
    "json",
    "",
    url_refresh_token,
    data,
    "refresh token failed"
  );
  return response;
};

let urlChangePassword = `${URL_USER}/change-password`;

export const changePasswordRequest = async (data) => {
  const response = await requestConfig.fetchPut(
    "json",
    Token,
    urlChangePassword,
    data,
    "change password failed"
  );
  return response;
};
