import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import commonReducer from "components/reducer";
import loginReducer from "screens/login/reducer";

const allReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    login: loginReducer,
    common: commonReducer,
  });

export default allReducer;
