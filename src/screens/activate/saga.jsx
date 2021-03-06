import { call, put, takeLatest } from "redux-saga/effects";
import { push } from "react-router-redux";
import { activeCourseAction } from "screens/activate/actions";
import { loadingAction, errorAction } from "components/action";
import { activateCourseRequest } from "services/request/course";

function* activateCourseSaga() {
  yield takeLatest(activeCourseAction, function* (action) {
    try {
      const payload = (!!action && !!action.payload && action.payload) || {};
      yield put(loadingAction(true));
      const response = yield call(activateCourseRequest, payload);
      if (response.body.id) {
        yield put(
          errorAction({
            message: "Kích hoạt khóa học thành công!",
            description: "",
            type: "success",
          })
        );
        yield put(push(`/course/${response.body.id}`));
      } else {
        yield put(
          errorAction({
            message: "Mã không tồn tại hoặc đã được sử dụng!",
            description: "",
            type: "error",
          })
        );
      }
    } catch (error) {
      yield put(
        errorAction({
          message: "Gửi yêu cầu thất bại!",
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
  activateCourseSaga,
};

export default saga;
