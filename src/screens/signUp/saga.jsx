import { call, put, takeLatest } from "redux-saga/effects";
import { push } from "react-router-redux";
import { loginSuccessAction } from "screens/login/action";
import { signUpAction } from "screens/signUp/action";
import { loadingAction, errorAction } from "components/action";
import { signUpRequest } from "services/request/signUp";
import { REFESH_TOKEN_KEY, TOKEN_KEY } from "utils/constant";
import localStorage from "utils/localStorage";
import { loginRequest } from "services/request/login";

function* SignUpSaga() {
  yield takeLatest(signUpAction, function* (action) {
    try {
      const payload = (!!action && !!action.payload && action.payload) || {};
      delete payload.agreement;
      delete payload.password_confirm;
      yield put(loadingAction(true));
      const response = yield call(signUpRequest, payload);
      console.log(`response`, response);
      if (response && response.body && response.body.id) {
        console.log("dang ki thanh cong");
        localStorage.setToken(TOKEN_KEY, response.body.access);
        localStorage.setToken(REFESH_TOKEN_KEY, response.body.refresh);
        yield put(loginSuccessAction({ ...response.body }));
        yield put(push("/"));
      } else {
        console.log("==================");
        if (payload && payload.type && payload.type === "GGAndFacebook") {
          console.log("login voi gg");
          const response_login = yield call(loginRequest, payload);
          if (!response_login.error) {
            console.log("login thanh cong voi gg");
            localStorage.setToken(TOKEN_KEY, response_login.body.access);
            localStorage.setToken(REFESH_TOKEN_KEY, response_login.body.refresh);
            yield put(loginSuccessAction({ ...response_login.body }));
            yield put(push("/"));
          }
        }
      }
      yield put(loadingAction(false));
      yield put(errorAction({ message: "register failed!!!", description: "" }));
    } catch (error) {
      // yield put(loadingAction(false));
      // yield put(errorAction({ message: "register failed!!!", description: "" }));
    } finally {
      yield put(loadingAction(false));
    }
  });
}

const saga = { SignUpSaga };

export default saga;
