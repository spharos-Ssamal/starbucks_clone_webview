import { selector } from "recoil";
import { storeState } from "../atom/storeState";

export const categorySelector = selector({
  key: "categorySelector",
  get: ({ get }) => {
    return get(storeState).category;
  },
});
