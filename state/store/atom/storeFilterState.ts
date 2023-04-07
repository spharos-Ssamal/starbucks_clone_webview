import { searchParams } from "@/Types/filter/filterTypes";
import { atom } from "recoil";

export const storeFilterState = atom<searchParams>({
  key: "storeState",
  default: {
    searchOption: "",
    searchName: "",
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
