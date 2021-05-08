import { handleActions } from "redux-actions";
import {
  getCourseTemporarySuccessAction,
  getUserTemporarySuccessAction,
} from "screens/browserUserAndCourse/actions";

const adminBrowser = {
  course_temporary: [],
  user_temporary: [],
};

export default handleActions(
  {
    [getUserTemporarySuccessAction]: (state, { payload }) => {
      return {
        ...state,
        user_temporary: payload,
      };
    },
    [getCourseTemporarySuccessAction]: (state, { payload }) => {
      return {
        ...state,
        course_temporary: payload,
      };
    },
  },
  adminBrowser
);
