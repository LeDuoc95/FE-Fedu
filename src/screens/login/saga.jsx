import { call, put, takeLatest } from "redux-saga/effects";
import { push } from "react-router-redux";
import {
  loginAction,
  loginSuccessAction,
  refreshTokenAction,
} from "screens/login/action";
import { loadingAction, errorAction } from "components/action";
import { loginRequest, refreshTokenRequest } from "services/request/login";
import { REFESH_TOKEN_KEY_BE, TOKEN_KEY_BE } from "utils/constant";
import localStorage from "utils/localStorage";

function* LoginSagas() {
  yield takeLatest(loginAction, function* (action) {
    try {
      const payload = (!!action && !!action.payload && action.payload) || {};
      yield put(loadingAction(true));
      const response = yield call(loginRequest, payload);
      if (!response.error) {
        localStorage.setToken(TOKEN_KEY_BE, response.body.access);
        localStorage.setToken(REFESH_TOKEN_KEY_BE, response.body.refresh);
        yield put(loginSuccessAction({ ...response.body }));
      }
      yield put(push("/"));
    } catch (error) {
      yield put(loadingAction(false));
      yield put(errorAction({ message: "Unauthorized", description: "" }));
    } finally {
      yield put(loadingAction(false));
    }
  });
}

function* refreshTokenSagas() {
  yield takeLatest(refreshTokenAction, function* (action) {
    try {
      const payload = (!!action && !!action.payload && action.payload) || {};
      yield put(loadingAction(true));
      const response = yield call(refreshTokenRequest, payload);
      if (!response.error) {
        localStorage.setToken(TOKEN_KEY_BE, response.body.access);
        yield put(loginSuccessAction({ ...response.body }));
      }
    } catch (error) {
      localStorage.clear(TOKEN_KEY_BE);
      localStorage.clear(REFESH_TOKEN_KEY_BE);
      yield put(loadingAction(false));
    } finally {
      yield put(loadingAction(false));
    }
  });
}

const saga = { LoginSagas, refreshTokenSagas };

export default saga;
