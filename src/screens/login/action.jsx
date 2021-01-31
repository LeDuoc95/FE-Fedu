import { createActions } from "redux-actions";

const actions = createActions({
  ADD_PRODUCT_TO_WISHLIST_ACTION: null,
  GET_ALL_PRODUCT_IN_WISHLIST_ACTION: null,
  SET_PRODUCT_FOR_WISHLIST_ACTION: null,
  DELETE_PRODUCT_IN_WISHLIST_ACTION: null,
});

export const {
  addProductToWishlistAction,
  getAllProductInWishlistAction,
  setProductForWishlistAction,
  deleteProductInWishlistAction,
} = actions;
