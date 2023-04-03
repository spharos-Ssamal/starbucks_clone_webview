import { selector } from "recoil";
import { storeState } from "../atom/storeState";

export const productSizeSelector = selector({
  key: "productSizeSelector",
  get: ({ get }) => {
    return get(storeState).productSize;
  },
});
