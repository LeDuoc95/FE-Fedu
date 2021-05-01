import { call, put, takeLatest } from "redux-saga/effects";
import { push } from "react-router-redux";
import { loginSuccessAction } from "screens/login/action";
import { signUpAction } from "screens/signUp/action";
import { loadingAction, errorAction } from "components/action";
import { signUpRequest } from "services/request/signUp";
import { REFESH_TOKEN_KEY_BE, TOKEN_KEY_BE } from "utils/constant";
import localStorage from "utils/localStorage";
import { loginRequest, loginNoPasswordRequest } from "services/request/login";

function* SignUpSaga() {
  yield takeLatest(signUpAction, function* (action) {
    try {
      let data = {};
      const payload = (!!action && !!action.payload && action.payload) || {};
      yield put(loadingAction(true));

      if (!payload.type) {
        data = { ...payload };
        delete payload.agreement;
        delete payload.password_confirm;
      }

      if (payload && payload.type === 1) {
        data = {
          username: payload.response.profileObj.name,
          email: payload.response.profileObj.email,
          account_type: payload.type,
        };
      }

      if (payload && payload.type === 2) {
        data = {
          username: payload.response.name,
          email: payload.response.email,
          account_type: payload.type,
        };
      }

      const resSignUp = yield call(signUpRequest, data);

      if (resSignUp && resSignUp.body && resSignUp.body.id) {
        let data_request = {};
        let urlRequest = loginRequest;

        if (!payload.type) {
          data_request = {
            username: resSignUp.body.username,
            password: payload.password,
          };
        }

        if (payload.type) {
          urlRequest = loginNoPasswordRequest;
          data_request = {
            username: resSignUp.body.username,
            password: "password",
          };
        }

        const response_login = yield call(urlRequest, data_request);

        if (response_login && response_login.body && response_login.body.access) {
          localStorage.setToken(TOKEN_KEY_BE, response_login.body.access);
          localStorage.setToken(REFESH_TOKEN_KEY_BE, response_login.body.refresh);
          yield put(loginSuccessAction({ ...response_login.body }));
          yield put(push("/"));
        } else {
          yield put(errorAction({ message: "login failed!!!", description: "", type: "error" }));
        }
      } else {
        if (payload.type) {
          let dataRequest = {};
          if (payload.type === 1) {
            dataRequest = {
              username: payload.response.profileObj.name,
              password: "password",
            };
          }

          if (payload.type === 2) {
            dataRequest = {
              username: payload.response.name,
              password: "password",
            };
          }

          const responseLoginNoPassword = yield call(loginNoPasswordRequest, dataRequest);

          if (responseLoginNoPassword && responseLoginNoPassword.body && responseLoginNoPassword.body.access) {
            localStorage.setToken(TOKEN_KEY_BE, responseLoginNoPassword.body.access);
            localStorage.setToken(REFESH_TOKEN_KEY_BE, responseLoginNoPassword.body.refresh);
            yield put(loginSuccessAction({ ...responseLoginNoPassword.body }));
            yield put(push("/"));
          } else {
            yield put(errorAction({ message: "login failed!!!", description: "", type: "error" }));
          }
        }
      }
    } catch (error) {
      yield put(errorAction({ message: "register failed!!!", description: "", type: "error" }));
      throw error;
    } finally {
      yield put(loadingAction(false));
    }
  });
}

const saga = { SignUpSaga };

export default saga;
