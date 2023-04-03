import { selector } from "recoil";
import { storeState } from "../atom/storeState";

export const subCategorySelector = selector({
  key: "subCategorySelector",
  get: ({ get }) => {
    return get(storeState).subCategories;
  },
});
