import { handleActions } from "redux-actions";
import { loadingAction, errorAction } from "components/action";

const initialState = {
  loading: false,
  error: {
    message: "",
    description: "",
  },
};

export default handleActions(
  {
    [loadingAction]: (state, payload) => ({
      ...state,
      loading: payload.payload,
    }),
    [errorAction]: (state, { payload }) => {
      return {
        ...state,
        error: {
          ...state.error,
          message: payload.message,
          description: payload.description || "",
        },
      };
    },
  },
  initialState
);
