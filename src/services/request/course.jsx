import requestConfig from "services/requestConfig";
import { URL_COURSE, TOKEN_KEY_BE } from "utils/constant";
import localStorage from "utils/localStorage";

const Token = localStorage.getToken(TOKEN_KEY_BE);

export const createCourseRequest = async (data) => {
  const urlCreateCourse = `${URL_COURSE}/create`;
  const response = await requestConfig.fetchPost("json", Token, urlCreateCourse, data);
  return response;
};

export const updateCourseRequest = async (data) => {
  const response = await requestConfig.fetchPut("json", Token, `${URL_COURSE}/update/${data.id}`, data);
  return response;
};

export const getCourseRequest = async (data) => {
  let searchUrl = "";
  let urlGetCourse = `${URL_COURSE}/list?page=${data.page}`;
  if (data.search.length > 0) {
    data.search.map((item) => {
      if (item.value) {
        searchUrl += `&${item.key}=${item.value}`;
      } else {
        searchUrl += `&${item.key}=`;
      }
      return item;
    });
  }
  if (searchUrl) {
    urlGetCourse = `${URL_COURSE}/list?page=${data.page}${searchUrl}`;
  }
  const response = await requestConfig.fetchGet("json", Token, urlGetCourse, "");
  return response;
};

export const getCourseForAdminAndLecturerRequest = async () => {
  const urlGetForAdminAndLecturerCourse = `${URL_COURSE}/list-owner`;
  const response = await requestConfig.fetchGet("json", "", urlGetForAdminAndLecturerCourse, "");
  return response;
};

export const getDetailCourseRequest = async ({ id }) => {
  const urlgetDetailCourseRequest = `${URL_COURSE}/list/${id}`;
  const response = await requestConfig.fetchGet("json", Token, urlgetDetailCourseRequest, "");
  return response;
};

export const deleteCourseRequest = async ({ id }) => {
  const urlDeleteCourseRequest = `${URL_COURSE}/delete/${id}`;
  const response = await requestConfig.fetchDelete("json", Token, urlDeleteCourseRequest, "");
  return response;
};

export const activateCourseRequest = async ({ code }) => {
  const urlActivateCourseRequest = `${URL_COURSE}/activate`;
  const response = await requestConfig.fetchPost("json", Token, urlActivateCourseRequest, { code });
  return response;
};
