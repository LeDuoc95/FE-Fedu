import requestConfig from "services/requestConfig";
import { URL_USER, TOKEN_KEY_BE } from "utils/constant";
import localStorage from "utils/localStorage";

const Token = localStorage.getToken(TOKEN_KEY_BE);

let urlChangeInfoAccountManage = `${URL_USER}/edit`;

export const ChangeInfoAccountManageRequest = async (data) => {
  const response = await requestConfig.fetchPost(
    "json",
    Token,
    urlChangeInfoAccountManage,
    data
  );
  return response;
};
