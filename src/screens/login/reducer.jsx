import { handleActions } from "redux-actions";
import { loginSuccessAction, logoutAction } from "screens/login/action";

const initialState = {
  name: null,
  photo: "https://i.imgur.com/0jk1ek2.jpg",
  username: null,
  phone: null,
  position: null,
  email: null,
};

export default handleActions(
  {
    [loginSuccessAction]: (state, { payload }) => {
      return {
        ...state,
        name: payload.name,
        username: payload.username,
        photo: payload.photo,
        phone: payload.phone,
        position: payload.position,
        email: payload.email,
      };
    },
    [logoutAction]: (state) => ({ ...initialState }),
  },
  initialState
);
