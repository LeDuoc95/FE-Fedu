import { handleActions } from "redux-actions";
import {
  getCourseSuccessAction,
  createCourseAction,
  getDetailCourseSuccessAction,
  getTeacherSuccessAction,
} from "screens/course/action";

const initialState = {
  course: [],
  paging: {},
  currentCourse: {},
  listTeacher: [],
};

export default handleActions(
  {
    [getCourseSuccessAction]: (state, { payload }) => {
      return {
        ...state,
        course: payload.body,
        paging: payload.paging,
      };
    },
    [getTeacherSuccessAction]: (state, { payload }) => {
      return {
        ...state,
        listTeacher: payload,
      };
    },
    [createCourseAction]: (state) => ({ ...initialState }),
    [getDetailCourseSuccessAction]: (state, { payload }) => {
      return { ...state, currentCourse: payload };
    },
  },
  initialState
);
