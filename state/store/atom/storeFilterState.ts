import { FilterParams } from "@/Types/filter/filterTypes";
import { atom } from "recoil";

export const storeFilterState = atom<FilterParams>({
  key: "storeState",
  default: {
    category: 1,
    subCategories: [],
    seasons: [],
    productSize: [],
    priceValue: {
      id: 0,
      priceStart: -1,
      priceEnd: -1,
    },
  },
});
