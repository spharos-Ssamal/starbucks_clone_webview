import { selector } from "recoil";
import { cartListState } from "../atom/cartListState";

export const cartListSelector = selector({
  key: "cartListSelector",
  get: ({ get }) => {
    const cartList = get(cartListState);
    return cartList.cartList;
  },

  // set: ({ set, get }, newValue) => {
  //   const cartList = get(cartListState);
  //   let data = cartList.cartList.find((item) => item.id === newValue.id);
  //   set(cartListState, {newValue})
  // }
})