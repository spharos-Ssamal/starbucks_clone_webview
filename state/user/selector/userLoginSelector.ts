import { selector } from "recoil";
import { userLoginState } from "../atom/userLoginState";

export const userLoginSelector = selector({
  key: "userLoginSelector",
  get: ({ get }) => get(userLoginState),
  set: ({ set }, newValue) => set(userLoginState, newValue),
});
