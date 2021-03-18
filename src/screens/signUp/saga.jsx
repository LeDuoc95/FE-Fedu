import { call, put, takeLatest } from "redux-saga/effects";
import { push } from "react-router-redux";
import { loginSuccessAction } from "screens/login/action";
import { signUpAction } from "screens/signUp/action";
import { loadingAction, errorAction } from "components/action";
import { signUpRequest } from "services/request/signUp";
import {
  REFESH_TOKEN_KEY_BE,
  TOKEN_KEY_BE,
  ID_TOKEN,
  GOOGEL_ID,
  REFESH_TOKEN_GG,
  ACCESS_TOKEN_GG,
} from "utils/constant";
import localStorage from "utils/localStorage";
import { loginRequest } from "services/request/login";

function* SignUpSaga() {
  yield takeLatest(signUpAction, function* (action) {
    try {
      let data = {};
      const payload = (!!action && !!action.payload && action.payload) || {};
      // console.log("payload :>> ", payload.type, !payload.type);
      yield put(loadingAction(true));

      if (!payload.type) {
        data = { ...payload };
        delete payload.agreement;
        delete payload.password_confirm;
      }

      if (payload && payload.type === "login_GG") {
        data = {
          username: payload.response.profileObj.name,
          email: payload.response.profileObj.email,
        };
      }

      if (payload && payload.type === "login_FB") {
        data = {};
      }

      const resSignUp = yield call(signUpRequest, data);
      console.log(`resSignUp`, resSignUp);

      if (resSignUp && resSignUp.body && resSignUp.body.id) {
        // console.log(resSignUp, "dang ki thanh cong");

        // if (!payload.type) {
        //   localStorage.setToken(TOKEN_KEY_BE, resSignUp.body.access);
        //   localStorage.setToken(REFESH_TOKEN_KEY_BE, resSignUp.body.refresh);
        // }

        // if (payload && payload.type === "login_GG") {
        //   localStorage.setToken(ACCESS_TOKEN_GG, resSignUp.body.access);
        //   localStorage.setToken(GOOGEL_ID, resSignUp.body.refresh);
        // }

        // if (payload && payload.type === "login_FB") {
        //   localStorage.setToken(ACCESS_TOKEN_GG, resSignUp.body.access);
        //   localStorage.setToken(GOOGEL_ID, resSignUp.body.refresh);
        // }

        yield put(loginSuccessAction({ ...resSignUp.body }));
        yield put(push("/"));
      } else {
        console.log("==================");
        if (payload.type) {
          console.log("login voi gg");
          const response_login = yield call(loginRequest, payload);
          if (!response_login.error) {
            console.log("login thanh cong voi gg");
            localStorage.setToken(TOKEN_KEY_BE, response_login.body.access);
            localStorage.setToken(
              REFESH_TOKEN_KEY_BE,
              response_login.body.refresh
            );
            yield put(loginSuccessAction({ ...response_login.body }));
            yield put(push("/"));
          }
        }
      }
      yield put(loadingAction(false));
      yield put(
        errorAction({ message: "register failed!!!", description: "" })
      );
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
