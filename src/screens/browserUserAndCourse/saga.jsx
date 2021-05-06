import { call, put, takeLatest } from "redux-saga/effects";
import {
  getUserTemporaryAction,
  getCourseTemporaryAction,
  getCourseTemporarySuccessAction,
  getUserTemporarySuccessAction,
  changeUserTemporaryAction,
  changeCourseTemporaryAction,
} from "screens/browserUserAndCourse/actions";
import { loadingAction, errorAction } from "components/action";
import {
  getUserTemporaryRequest,
  getCourseTemporaryRequest,
  changeUserTemporaryRequest,
  changeCourseTemporaryRequest,
} from "services/request/browerUserAndCourse";

function* getAllCourseTemporarySagas() {
  yield takeLatest(getCourseTemporaryAction, function* (action) {
    try {
      const payload = (!!action && !!action.payload && action.payload) || {};
      yield put(loadingAction(true));
      const response = yield call(getCourseTemporaryRequest, payload);
      if (Array.isArray(response.body)) {
        yield put(getCourseTemporarySuccessAction(response.body));
      }
    } catch (error) {
      yield put(
        errorAction({
          message: "Lấy danh sách khóa học tạm thất bại!",
          description: "",
          type: "error",
        })
      );
    } finally {
      yield put(loadingAction(false));
    }
  });
}

function* getTeacherTemporarySagas() {
  yield takeLatest(getUserTemporaryAction, function* (action) {
    try {
      const payload = (!!action && !!action.payload && action.payload) || {};
      yield put(loadingAction(true));
      const response = yield call(getUserTemporaryRequest, payload);
      if (Array.isArray(response.body)) {
        yield put(getUserTemporarySuccessAction(response.body));
      }
    } catch (error) {
      yield put(
        errorAction({
          message: "Lấy danh sách giảng viên tạm thất bại!",
          description: "",
          type: "error",
        })
      );
    } finally {
      yield put(loadingAction(false));
    }
  });
}

function* changeUserTemporarySagas() {
  yield takeLatest(changeUserTemporaryAction, function* (action) {
    try {
      const payload = (!!action && !!action.payload && action.payload) || {};
      yield put(loadingAction(true));
      const response = yield call(changeUserTemporaryRequest, payload);
      if (response.body.id) {
        yield put(getTeacherTemporarySagas());
        yield put(
          errorAction({
            message: "Thay đổi giảng viên tạm thành công!",
            description: "",
            type: "success",
          })
        );
      }
    } catch (error) {
      yield put(
        errorAction({
          message: "Kích hoạt giảng viên tạm thất bại!",
          description: "",
          type: "error",
        })
      );
    } finally {
      yield put(loadingAction(false));
    }
  });
}

function* changeCourseTemporarySagas() {
  yield takeLatest(changeCourseTemporaryAction, function* (action) {
    try {
      const payload = (!!action && !!action.payload && action.payload) || {};
      yield put(loadingAction(true));
      const response = yield call(changeCourseTemporaryRequest, payload);
      if (response.body.id) {
        yield put(getCourseTemporaryAction());
        yield put(
          errorAction({
            message: "Kích hoạt khóa tạm thành công!",
            description: "",
            type: "success",
          })
        );
      }
    } catch (error) {
      yield put(
        errorAction({
          message: "Thay đổi khóa học tạm thất bại!",
          description: "",
          type: "error",
        })
      );
    } finally {
      yield put(loadingAction(false));
    }
  });
}

const saga = {
  getAllCourseTemporarySagas,
  getTeacherTemporarySagas,
  changeUserTemporarySagas,
  changeCourseTemporarySagas,
};

export default saga;
