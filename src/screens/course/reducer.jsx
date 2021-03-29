import { handleActions } from "redux-actions";
import { getCourseAction, createCourseAction, updateCourseAction, deleteCourseAction } from "screens/course/action";

const initialState = {
  course: [],
};

export default handleActions(
  {
    [getCourseAction]: (state, { payload }) => {
      console.log("payload :>> ", payload);
      return {
        ...state,
        course: payload,
      };
    },
    [createCourseAction]: (state) => ({ ...initialState }),
  },
  initialState
);
