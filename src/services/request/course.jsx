import requestConfig from "services/requestConfig";
import { URL_COURSE, TOKEN_KEY_BE } from "utils/constant";
import localStorage from "utils/localStorage";

const Token = localStorage.getToken(TOKEN_KEY_BE);

let urlCreateCourse = `${URL_COURSE}/create`;

export const createCourseRequest = async (data) => {
  const response = await requestConfig.fetchPost("json", Token, urlCreateCourse, data);
  return response;
};
