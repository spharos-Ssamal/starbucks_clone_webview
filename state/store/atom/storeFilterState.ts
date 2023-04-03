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
      priceStart: -1,
      priceEnd: -1,
    },
    page: 0,
    size: 6,
    sort: "product.id,DESC",
  },
});
