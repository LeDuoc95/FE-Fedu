import { call, put, takeLatest } from "redux-saga/effects";
import { changeAccountAction } from "screens/accountManage/action";
import { loginSuccessAction } from "screens/login/action";
import { loadingAction, errorAction } from "components/action";
import { ChangeInfoAccountManageRequest } from "services/request/accountManage";
import { REFESH_TOKEN_KEY_BE, TOKEN_KEY_BE } from "utils/constant";
import localStorage from "utils/localStorage";

function* changeInfoAccountSagas() {
  yield takeLatest(changeAccountAction, function* (action) {
    try {
      const payload = (!!action && !!action.payload && action.payload) || {};
      console.log("payload :>> ", payload);
      yield put(loadingAction(true));
      const response = yield call(ChangeInfoAccountManageRequest, payload);
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

const saga = { changeInfoAccountSagas };

export default saga;
