import { handleActions } from "redux-actions";
import {
  getCourseSuccessAction,
  createCourseAction,
  updateCourseAction,
  deleteCourseAction,
  getDetailCourseSuccessAction,
} from "screens/course/action";

const initialState = {
  course: [],
  paging: {},
  currentCourse: {},
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
    [createCourseAction]: (state) => ({ ...initialState }),
    [getDetailCourseSuccessAction]: (state, { payload }) => {
      return { ...state, currentCourse: payload };
    },
  },
  initialState
);
