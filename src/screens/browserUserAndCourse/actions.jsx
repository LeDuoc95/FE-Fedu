import { createActions } from "redux-actions";

const actions = createActions({
  GET_COURSE_TEMPORARY_ACTION: null,
  GET_COURSE_TEMPORARY_SUCCESS_ACTION: null,
  GET_USER_TEMPORARY_ACTION: null,
  GET_USER_TEMPORARY_SUCCESS_ACTION: null,
  CHANGE_USER_TEMPORARY_ACTION: null,
  CHANGE_COURSE_TEMPORARY_ACTION: null,
});

export const {
  getCourseTemporaryAction,
  getUserTemporaryAction,
  getCourseTemporarySuccessAction,
  getUserTemporarySuccessAction,
  changeUserTemporaryAction,
  changeCourseTemporaryAction,
} = actions;
