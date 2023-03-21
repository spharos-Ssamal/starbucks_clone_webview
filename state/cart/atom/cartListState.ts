import { cartType } from "@/Types/cart/cartListType";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const cartListState = atom<cartType>({
  key: "cartListState",
  default: {
    cartListFreeze: [],
    cartList: [],
  },
});