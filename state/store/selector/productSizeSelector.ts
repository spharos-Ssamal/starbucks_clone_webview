import { selector } from "recoil";
import { storeFilterState } from "../atom/storeFilterState";

export const productSizeSelector = selector({
  key: "productSizeSelector",
  get: ({ get }) => {
    return get(storeFilterState).productSize;
  },
});
