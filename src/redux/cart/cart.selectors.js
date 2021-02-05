import { createSelector } from "reselect";

const selectCart = (state) => state.cart; //input selector 128 2:00

export const selectCartItems = createSelector(  // output selector
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantitiy, cartItem) =>
        accumalatedQuantitiy + cartItem.quantity,
      0
    )
);
