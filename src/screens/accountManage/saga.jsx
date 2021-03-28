import { call, put, takeLatest } from "redux-saga/effects";
import { changeAccountAction } from "screens/accountManage/action";
import { loginSuccessAction } from "screens/login/action";
import { loadingAction, errorAction } from "components/action";
import { ChangeInfoAccountManageRequest } from "services/request/accountManage";

function* changeInfoAccountSagas() {
  yield takeLatest(changeAccountAction, function* (action) {
    try {
      const payload = (!!action && !!action.payload && action.payload) || {};
      yield put(loadingAction(true));
      const response = yield call(ChangeInfoAccountManageRequest, payload);
      if (response.body.id) {
        yield put(loginSuccessAction({ ...response.body }));
      }
    } catch (error) {
      yield put(
        errorAction({ message: "Cập nhật thất bại!", description: "" })
      );
    } finally {
      yield put(loadingAction(false));
    }
  });
}

const saga = { changeInfoAccountSagas };

export default saga;
