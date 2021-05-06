import requestConfig from "services/requestConfig";
import { URL_COURSE, URL_USER, TOKEN_KEY_BE } from "utils/constant";
import localStorage from "utils/localStorage";

export const getCourseTemporaryRequest = async () => {
  const urlGetCourseTemporaryRequest = `${URL_COURSE}/list-temporary`;
  const response = await requestConfig.fetchGet(
    "json",
    localStorage.getToken(TOKEN_KEY_BE),
    urlGetCourseTemporaryRequest,
    ""
  );
  return response;
};

export const getUserTemporaryRequest = async () => {
  const urlGetUserTemporaryRequest = `${URL_USER}/list-temporary`;
  const response = await requestConfig.fetchGet(
    "json",
    localStorage.getToken(TOKEN_KEY_BE),
    urlGetUserTemporaryRequest,
    ""
  );
  return response;
};

export const changeUserTemporaryRequest = async (id) => {
  const urlChangeUserTemporaryRequest = `${URL_USER}/update-temporary/${id}`;
  const response = await requestConfig.fetchPut(
    "json",
    localStorage.getToken(TOKEN_KEY_BE),
    urlChangeUserTemporaryRequest,
    ""
  );
  return response;
};

export const changeCourseTemporaryRequest = async (id) => {
  const urlChangeCourseTemporaryRequest = `${URL_COURSE}/update-temporary/${id}`;
  const response = await requestConfig.fetchPut(
    "json",
    localStorage.getToken(TOKEN_KEY_BE),
    urlChangeCourseTemporaryRequest,
    ""
  );
  return response;
};
