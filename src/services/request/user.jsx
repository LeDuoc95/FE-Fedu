import requestConfig from "services/requestConfig";
import { URL_USER, TOKEN_KEY_BE } from "utils/constant";
import localStorage from "utils/localStorage";

const Token = localStorage.getToken(TOKEN_KEY_BE);

export const getTeacherRequest = async (data) => {
  let searchUrl = "";
  let urlGetTeacher = `${URL_USER}/list`;
  if (data.search.length > 0) {
    data.search.map((item) => {
      if (item.value) {
        searchUrl += `&${item.key}=${item.value}`;
      } else {
        searchUrl += `&${item.key}=`;
      }
      // searchUrl += `&${item.key}=${item.value}`;
      return item;
    });
  }
  if (searchUrl) {
    searchUrl = searchUrl.substr(1, searchUrl.length - 1);
    urlGetTeacher = `${URL_USER}/list?${searchUrl}`;
  }
  const response = await requestConfig.fetchGet(
    "json",
    Token,
    urlGetTeacher,
    ""
  );
  return response;
};
