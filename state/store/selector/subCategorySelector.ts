import { selector } from "recoil";
import { storeFilterState } from "../atom/storeFilterState";

export const subCategorySelector = selector({
  key: "subCategorySelector",
  get: ({ get }) => {
    return get(storeFilterState).subCategories;
  },
});
