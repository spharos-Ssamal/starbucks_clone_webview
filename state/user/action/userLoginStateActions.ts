import { useRecoilState } from "recoil";
import { UserAuthInfo } from "../type/UserInfo";
import { userLoginState } from "../atom/userLoginState";

export default function UserLoginStateActions() {
  const [loginData, setLoginData] =
    useRecoilState<UserAuthInfo>(userLoginState);

  function actionLogoutForce() {
    if (localStorage.getItem("ACCESS_TOKEN")) {
      localStorage.removeItem("ACCESS_TOKEN");
      setLoginData({
        isLogin: false,
        userId: "",
      });
    }
  }

  function initLoginState() {
    setLoginData({
      isLogin: false,
      userId: "",
    });
  }
}
