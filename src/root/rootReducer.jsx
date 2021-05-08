import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import commonReducer from "components/reducer";
import loginReducer from "screens/login/reducer";
import courseReducer from "screens/course/reducer";
import browserCourseAndUserReducer from "screens/browserUserAndCourse/reducer";

const allReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    login: loginReducer,
    common: commonReducer,
    course: courseReducer,
    adminBrowser: browserCourseAndUserReducer,
  });

export default allReducer;
