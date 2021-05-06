import { handleActions } from "redux-actions";
import { loginSuccessAction, logoutAction } from "screens/login/action";

const initialState = {
  name: null,
  photo: {},
  username: null,
  phone: null,
  position: null,
  email: null,
  slogan: null,
  owner_course: null,
  temporary_user: null,
  description: null,
};

export default handleActions(
  {
    [loginSuccessAction]: (state, { payload }) => {
      return {
        ...state,
        name: payload.name,
        username: payload.username,
        photo: { ...payload.photo },
        phone: payload.phone,
        position: payload.position,
        email: payload.email,
        slogan: payload.slogan || "",
        owner_course: payload.owner_course || [],
        temporary_user: payload.temporary_user || false,
        description: payload.description || "",
      };
    },
    [logoutAction]: (state) => ({ ...initialState }),
  },
  initialState
);
