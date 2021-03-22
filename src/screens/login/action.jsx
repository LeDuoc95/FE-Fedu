import { createActions } from "redux-actions";

const actions = createActions({
  LOGIN_ACTION: null,
  LOGIN_SUCCESS_ACTION: null,
  REFRESH_TOKEN_ACTION: null,
  GET_INFO_USER_FROM_TOKEN_ACTION: null,
  LOGOUT_ACTION: null,
  CHANGE_PASSWORD_ACTION: null,
});

export const {
  loginAction,
  logoutAction,
  loginSuccessAction,
  refreshTokenAction,
  changePasswordAction,
  getInfoUserFromTokenAction,
} = actions;
