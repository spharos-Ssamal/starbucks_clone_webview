import { selector } from "recoil";
import { storeState } from "../atom/storeState";

export const priceSelector = selector({
  key: "priceSelector",
  get: ({ get }) => {
    return get(storeState).priceValue;
  },
});
