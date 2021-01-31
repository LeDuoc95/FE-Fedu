import { call, put, takeLatest } from "redux-saga/effects";
import { push } from "react-router-redux";
import { addProductToWishlistAction } from "screens/login/action";
import { fetchUser } from "services/request/login";
// import {
//   logErrorAction,
//   offLoadingAction,
//   onLoadingAction,
// } from "app/containers/redux/common/actions";
// import { addProductToWishListMethod } from "app/containers/services/request/wishList";

function* LoginSagas() {
  yield takeLatest(addProductToWishlistAction, function* (action) {
    try {
      // const payload = (!!action && !!action.payload && action.payload) || {};
      const response = yield call(fetchUser);
      console.log("response :>> ", response);
      // if (!response.error) {
      //   return yield put(
      //     addProductToWishlistAction({ registerError: response.error })
      //   );
      // }
      yield put(push("/welcome"));
    } catch (error) {
      console.log("object");
      // yield put(logErrorAction(error.message));
    } finally {
      console.log("object");
      // yield put(offLoadingAction());
    }
  });
}

const saga = { LoginSagas };

export default saga;
