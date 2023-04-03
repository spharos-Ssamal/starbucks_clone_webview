import { selector } from "recoil";
import { storeFilterState } from "../atom/storeFilterState";

export const seasonSelector = selector({
  key: "seasonSelector",
  get: ({ get }) => {
    return get(storeFilterState).seasons;
  },
});
