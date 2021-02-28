import { call, put, takeLatest } from "redux-saga/effects";
import { push } from "react-router-redux";
import {
  loginAction,
  loginSuccessAction,
  refreshTokenAction,
} from "screens/login/action";
import { loadingAction, errorAction } from "components/action";
import { loginRequest, refreshTokenRequest } from "services/request/login";
import { REFESH_TOKEN_KEY, TOKEN_KEY } from "utils/constant";
import session from "utils/session";

function* LoginSagas() {
  yield takeLatest(loginAction, function* (action) {
    try {
      const payload = (!!action && !!action.payload && action.payload) || {};
      yield put(loadingAction(true));
      const response = yield call(loginRequest, payload);
      if (!response.error) {
        session.setToken(TOKEN_KEY, response.body.access);
        session.setToken(REFESH_TOKEN_KEY, response.body.refresh);
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
        session.setToken(TOKEN_KEY, response.body.access);
        // session.setToken(REFESH_TOKEN_KEY, response.body.refresh);
        yield put(loginSuccessAction({ ...response.body }));
      }
    } catch (error) {
      yield put(loadingAction(false));
    } finally {
      yield put(loadingAction(false));
    }
  });
}

const saga = { LoginSagas, refreshTokenSagas };

export default saga;