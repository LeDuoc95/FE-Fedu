import { handleActions } from "redux-actions";
import {
  getCourseAction,
  getCourseSuccessAction,
  createCourseAction,
  updateCourseAction,
  deleteCourseAction,
} from "screens/course/action";

const initialState = {
  course: [],
};

export default handleActions(
  {
    [getCourseSuccessAction]: (state, { payload }) => {
      return {
        ...state,
        course: payload,
      };
    },
    [createCourseAction]: (state) => ({ ...initialState }),
  },
  initialState
);
