import { handleActions } from "redux-actions";
import { loginSuccessAction, logoutAction } from "screens/login/action";

const initialState = {
  name: null,
  photo: {},
  username: null,
  phone: null,
  position: null,
  email: null,
};

export default handleActions(
  {
    [loginSuccessAction]: (state, { payload }) => {
      console.log("payload :>> ", payload);
      return {
        ...state,
        name: payload.name,
        username: payload.username,
        photo: { ...payload.photo },
        phone: payload.phone,
        position: payload.position,
        email: payload.email,
      };
    },
    [logoutAction]: (state) => ({ ...initialState }),
  },
  initialState
);
