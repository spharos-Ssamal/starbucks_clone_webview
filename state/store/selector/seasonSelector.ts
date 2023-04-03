import { selector } from "recoil";
import { storeState } from "../atom/storeState";

export const seasonSelector = selector({
  key: "seasonSelector",
  get: ({ get }) => {
    return get(storeState).seasons;
  },
});
