import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

// import cartReducer from "app/containers/redux/cart/reducers";
// import catalogReducer from "app/containers/redux/catalog/reducers";
// import customerGroupsReducer from "app/containers/redux/customerGroups/reducers";
// import installReducer from "app/containers/components/install-app/ducks/reducers";
// import commonReducer from "app/containers/redux/common/reducers";
import loginReducer from "screens/login/reducer";

const allSaga = (history) =>
  combineReducers({
    router: connectRouter(history),
    // common: commonReducer,
    login: loginReducer,
  });

export default allSaga;
