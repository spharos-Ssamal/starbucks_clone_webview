import { selector } from "recoil";
import { storeFilterState } from "../atom/storeFilterState";

export const priceSelector = selector({
  key: "priceSelector",
  get: ({ get }) => {
    return get(storeFilterState).priceValue;
  },
});
