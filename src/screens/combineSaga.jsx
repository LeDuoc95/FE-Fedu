import loginSaga from "screens/login/saga";
import SignUpSaga from "screens/signUp/saga";

const sagaCombine = {
  ...loginSaga,
  ...SignUpSaga,
};

export default sagaCombine;
