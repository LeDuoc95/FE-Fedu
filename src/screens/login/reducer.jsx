import { handleActions } from "redux-actions";
import { addProductToWishlistAction } from "screens/login/action";

const initialState = {
  registerError: null,
};

export default handleActions(
  {
    [addProductToWishlistAction]: (state, { payload }) => ({
      ...state,
      registerError: payload.registerError,
    }),
  },
  initialState
);
