import { selector } from "recoil";
import { cartListState } from "../atom/cartListState";

export const cartListFreezeSelector = selector({
  key: "cartListFreezeSelector",
  get: ({ get }) => {
    const cartList = get(cartListState);
    return cartList.cartListFreeze;
  }
})