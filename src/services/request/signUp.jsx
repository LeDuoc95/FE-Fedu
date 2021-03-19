import requestConfig from "services/requestConfig";
import { URL_USER } from "utils/constant";

let url_login = `${URL_USER}/create`;

export const signUpRequest = async (data) => {
  const response = await requestConfig.fetchPost("json", "", url_login, data);
  return response;
};
