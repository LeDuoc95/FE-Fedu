import { handleActions } from "redux-actions";
import { loginSuccessAction } from "screens/login/action";

const initialState = {
  name: null,
  photo: "https://i.imgur.com/0jk1ek2.jpg",
  username: null,
  tel_mobile: null,
  position: null,
};

export default handleActions(
  {
    [loginSuccessAction]: (state, { payload }) => {
      return {
        ...state,
        name: payload.name,
        username: payload.username,
        photo: payload.photo,
        tel_mobile: payload.tel_mobile,
        position: payload.position,
      };
    },
  },
  initialState
);
