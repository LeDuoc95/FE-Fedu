import { call, put, takeLatest, delay } from "redux-saga/effects";
import { push } from "react-router-redux";
import {
  getCourseAction,
  getCourseSuccessAction,
  createCourseAction,
  updateCourseAction,
  deleteCourseAction,
  getDetailCourseAction,
  getDetailCourseSuccessAction,
  getTeacherSuccessAction,
  getTeacherAction,
} from "screens/course/action";
import { loadingAction, errorAction } from "components/action";
import {
  createCourseRequest,
  getCourseRequest,
  getDetailCourseRequest,
  updateCourseRequest,
  deleteCourseRequest,
} from "services/request/course";

import { getTeacherRequest } from "services/request/user";

function* createCourseSagas() {
  yield takeLatest(createCourseAction, function* (action) {
    try {
      const payload = (!!action && !!action.payload && action.payload) || {};
      yield put(loadingAction(true));
      const response = yield call(createCourseRequest, payload);
      if (response.body.id) {
        yield put(
          errorAction({
            message: "Tạo khóa học thành công!",
            description: "",
            type: "success",
          })
        );
        yield put(push(`${response.body.id}`));
      } else {
        // yield put(push(`page-not-found"`));
      }
    } catch (error) {
      yield put(
        errorAction({
          message: "Tạo khóa học thất bại!",
          description: "",
          type: "error",
        })
      );
    } finally {
      yield put(loadingAction(false));
    }
  });
}

function* updateCourseSagas() {
  yield takeLatest(updateCourseAction, function* (action) {
    try {
      const payload = (!!action && !!action.payload && action.payload) || {};
      yield put(loadingAction(true));
      const response = yield call(updateCourseRequest, payload);
      if (response.body.id) {
        yield put(
          errorAction({
            message: "Cập nhật khóa học thành công!",
            description: "",
            type: "success",
          })
        );
      }
    } catch (error) {
      yield put(
        errorAction({
          message: "Cập nhật khóa học thất bại!",
          description: "",
          type: "error",
        })
      );
    } finally {
      yield put(loadingAction(false));
    }
  });
}

function* getAllCourseSagas() {
  yield takeLatest(getCourseAction, function* (action) {
    try {
      const payload = (!!action && !!action.payload && action.payload) || {};
      if (!payload.page) {
        payload.page = 1;
      }

      if (!payload.search) {
        payload.search = [];
      }
      console.log("payload :>> ", payload);
      yield put(loadingAction(true));
      const response = yield call(getCourseRequest, payload);
      if (Array.isArray(response.body)) {
        yield put(getCourseSuccessAction(response));
      }
    } catch (error) {
      yield put(
        errorAction({
          message: "Lấy danh sách khóa học thất bại!",
          description: "",
          type: "error",
        })
      );
    } finally {
      yield put(loadingAction(false));
    }
  });
}

function* getDetailCourseSagas() {
  yield takeLatest(getDetailCourseAction, function* (action) {
    try {
      yield put(loadingAction(true));
      const payload = (!!action && !!action.payload && action.payload) || {};
      const response = yield call(getDetailCourseRequest, payload);
      if (Array.isArray(response.body)) {
        yield put(getDetailCourseSuccessAction(response.body[0]));
      } else {
        yield put(push(`/page-not-found`));
      }
    } catch (error) {
      yield put(
        errorAction({
          message: "Lấy danh sách khóa học thất bại!",
          description: "",
          type: "error",
        })
      );
    } finally {
      yield put(loadingAction(false));
    }
  });
}

function* getTeacherSagas() {
  yield takeLatest(getTeacherAction, function* (action) {
    try {
      const payload = (!!action && !!action.payload && action.payload) || {};
      if (!payload.search) {
        payload.search = [];
      }
      yield put(loadingAction(true));
      const response = yield call(getTeacherRequest, payload);
      if (Array.isArray(response.body)) {
        yield put(getTeacherSuccessAction(response.body));
      }
    } catch (error) {
      yield put(
        errorAction({
          message: "Lấy danh sách giảng viên thất bại!",
          description: "",
          type: "error",
        })
      );
    } finally {
      yield put(loadingAction(false));
    }
  });
}

function* deleteCourseSagas() {
  yield takeLatest(deleteCourseAction, function* (action) {
    try {
      const payload = (!!action && !!action.payload && action.payload) || {};
      yield put(loadingAction(true));
      const response = yield call(deleteCourseRequest, payload);
      if (!response.body.detail) {
        yield put(
          errorAction({
            message: "Xóa khóa học thành công!",
            description: "",
            type: "error",
          })
        );
        yield delay(500);
        yield put(push("/course"));
      }
    } catch (error) {
      yield put(
        errorAction({
          message: "Xóa khóa học thất bại!",
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
  createCourseSagas,
  getAllCourseSagas,
  getDetailCourseSagas,
  updateCourseSagas,
  getTeacherSagas,
  deleteCourseSagas,
};

export default saga;
