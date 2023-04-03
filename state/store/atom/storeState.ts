import { FilterParams } from "@/Types/filter/filterTypes";
import { atom } from "recoil";

export const storeState = atom<FilterParams>({
  key: "storeState",
  default: {
    category: 1,
    subCategories: [],
    seasons: [],
    productSize: [],
    priceValue: {
      start: 0,
      end: 0,
    },
  },
});
