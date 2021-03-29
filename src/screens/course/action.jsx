import { createActions } from "redux-actions";

const actions = createActions({
  GET_COURSE_ACTION: null,
  CREATE_COURSE_ACTION: null,
  UPDATE_COURSE_ACTION: null,
  DELETE_COURSE_ACTION: null,
});

export const { getCourseAction, createCourseAction, updateCourseAction, deleteCourseAction } = actions;
