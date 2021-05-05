import loginSaga from "screens/login/saga";
import signUpSaga from "screens/signUp/saga";
import changeInfoAccountSaga from "screens/accountManage/saga";
import courseSaga from "screens/course/saga";

const sagaCombine = {
  ...loginSaga,
  ...signUpSaga,
  ...changeInfoAccountSaga,
  ...courseSaga,
};

export default sagaCombine;
