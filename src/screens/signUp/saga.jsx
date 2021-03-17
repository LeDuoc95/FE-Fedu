import { call, put, takeLatest } from "redux-saga/effects";
import { push } from "react-router-redux";
import {
  loginAction,
  loginSuccessAction,
  refreshTokenAction,
} from "screens/login/action";
import { signUpAction } from "screens/signUp/action";
import { loadingAction, errorAction } from "components/action";
import { signUpRequest } from "services/request/signUp";
import { REFESH_TOKEN_KEY, TOKEN_KEY } from "utils/constant";
import localStorage from "utils/localStorage";

function* SignUpSaga() {
  yield takeLatest(signUpAction, function* (action) {
    try {
      const payload = (!!action && !!action.payload && action.payload) || {};
      delete payload.agreement;
      delete payload.password_confirm;
      console.log(payload, "payload");
      yield put(loadingAction(true));
      const response = yield call(signUpRequest, payload);
      console.log(`response`, response);
      //   if (!response.error) {
      //     localStorage.setToken(TOKEN_KEY, response.body.access);
      //     localStorage.setToken(REFESH_TOKEN_KEY, response.body.refresh);
      //     yield put(loginSuccessAction({ ...response.body }));
      //   }
      //   yield put(push("/"));
    } catch (error) {
      //   yield put(loadingAction(false));
      //   yield put(errorAction({ message: "register failed!!!", description: "" }));
    } finally {
      yield put(loadingAction(false));
    }
  });
}

const saga = { SignUpSaga };

export default saga;
