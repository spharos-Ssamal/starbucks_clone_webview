import { selector } from "recoil";
import { storeFilterState } from "../atom/storeFilterState";

export const categorySelector = selector({
  key: "categorySelector",
  get: ({ get }) => {
    return get(storeFilterState).category;
  },
});
