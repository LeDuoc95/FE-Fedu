import screenSaga from "screens/combineSaga";
import { all, fork } from "redux-saga/effects";

export default function* rootSaga() {
  const sagas = [...Object.values(screenSaga)];
  yield all(sagas.map(fork));
}
