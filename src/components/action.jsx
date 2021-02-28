import { createActions } from "redux-actions";

const actions = createActions({
  LOADING_ACTION: null,
  ERROR_ACTION: null,
  REFRESH_TOKEN_ACTION: null,
  LOGIN_WITH_ACCESS_TOKEN_ACTION: null,
});

export const {
  loadingAction,
  errorAction,
  refreshTokenAction,
  loginWithAccessTokenAction,
} = actions;
