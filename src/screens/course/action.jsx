import { createActions } from "redux-actions";

const actions = createActions({
  GET_COURSE_ACTION: null,
  GET_COURSE_FOR_ADMIN_AND_LECTURER_ACTION: null,
  GET_COURSE_SUCCESS_ACTION: null,
  CREATE_COURSE_ACTION: null,
  UPDATE_COURSE_ACTION: null,
  DELETE_COURSE_ACTION: null,
  GET_DETAIL_COURSE_ACTION: null,
  GET_DETAIL_COURSE_SUCCESS_ACTION: null,
});

export const {
  getCourseAction,
  getForAdminAndLecturerCourseAction,
  createCourseAction,
  updateCourseAction,
  getCourseSuccessAction,
  deleteCourseAction,
  getDetailCourseAction,
  getDetailCourseSuccessAction,
} = actions;
