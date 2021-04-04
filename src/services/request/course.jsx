import requestConfig from "services/requestConfig";
import { URL_COURSE, TOKEN_KEY_BE } from "utils/constant";
import localStorage from "utils/localStorage";

const Token = localStorage.getToken(TOKEN_KEY_BE);

let urlCreateCourse = `${URL_COURSE}/create`;

export const createCourseRequest = async (data) => {
  const response = await requestConfig.fetchPost(
    "json",
    Token,
    urlCreateCourse,
    data
  );
  return response;
};

let urlGetCourse = `${URL_COURSE}/list`;

export const getCourseRequest = async () => {
  const response = await requestConfig.fetchGet(
    "json",
    Token,
    urlGetCourse,
    ""
  );
  return response;
};

let urlGetForAdminAndLecturerCourse = `${URL_COURSE}/list-owner`;

export const getCourseForAdminAndLecturerRequest = async () => {
  const response = await requestConfig.fetchGet(
    "json",
    "",
    urlGetForAdminAndLecturerCourse,
    ""
  );
  return response;
};
