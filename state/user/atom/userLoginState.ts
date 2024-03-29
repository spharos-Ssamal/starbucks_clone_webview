import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { UserAuthInfo } from "../type/UserInfo";

const localStorage =
  typeof window !== "undefined" ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "userInfo",
  storage: localStorage,
});

export const userLoginState = atom<UserAuthInfo>({
  key: "userLoginState",
  default: {
    userId: "",
    isLogin: false,
  },
  effects_UNSTABLE: [persistAtom],
});
