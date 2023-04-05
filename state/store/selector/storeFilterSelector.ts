import { selector } from "recoil";
import { storeFilterState } from "../atom/storeFilterState";

export const storeFilterSelector = selector({
  key: "storeFilterSelector",
  get: ({ get }) => {
    return get(storeFilterState);
  },
  set: ({ set }, newValue) => {
    set(storeFilterState, newValue);
  },
});
