import loginSaga from "screens/login/saga";
import SignUpSaga from "screens/signUp/saga";
import changeInfoAccountSagas from "screens/accountManage/saga";

const sagaCombine = {
  ...loginSaga,
  ...SignUpSaga,
  ...changeInfoAccountSagas,
};

export default sagaCombine;
