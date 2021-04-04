import { call, put, takeLatest } from "redux-saga/effects";
import {
  getCourseAction,
  getCourseSuccessAction,
  createCourseAction,
  updateCourseAction,
  deleteCourseAction,
} from "screens/course/action";
import { loadingAction, errorAction } from "components/action";
import { createCourseRequest, getCourseRequest } from "services/request/course";

function* createCourseSagas() {
  yield takeLatest(createCourseAction, function* (action) {
    try {
      const payload = (!!action && !!action.payload && action.payload) || {};
      yield put(loadingAction(true));
      console.log(`payload`, payload);
      const response = yield call(createCourseRequest, payload);
      console.log(`response`, response);
      if (response.body.id) {
        // yield put(getCourseAction({ ...response.body }));
        const listCourse = yield call(getCourseRequest, "");
        if (listCourse.body) {
          yield put(getCourseSuccessAction({ ...listCourse.body }));
        }
      }
    } catch (error) {
      yield put(
        errorAction({ message: "Tạo khóa học thất bại!", description: "" })
      );
    } finally {
      yield put(loadingAction(false));
    }
  });
}

function* getAllCourseSagas() {
  yield takeLatest(getCourseAction, function* (action) {
    try {
      yield put(loadingAction(true));
      const response = yield call(getCourseRequest, "");
      if (Array.isArray(response.body)) {
        yield put(getCourseSuccessAction(response.body));
      }
    } catch (error) {
      yield put(
        errorAction({ message: "Lấy khóa học thất bại!", description: "" })
      );
    } finally {
      yield put(loadingAction(false));
    }
  });
}

const saga = { createCourseSagas, getAllCourseSagas };

export default saga;
