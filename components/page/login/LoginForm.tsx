import { ChangeEvent, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import router from "next/router";
import Link from "next/link";

import Swal from "sweetalert2";

import Config from "@/configs/config.export";
import { LoginReq } from "@/Types/UserRequest/Request";
import { LoginRes } from "@/Types/UserRequest/Response";
import { userIsLogin } from "@/state/user/atom/userIsLoginState";
import { userLoginState } from "@/state/user/atom/userLoginState";
import StButton from "@/components/ui/StButton";
import { UserInfo } from "@/state/user/type/UserInfo";
import { RequestLogin } from "@/Service/AuthService/AuthService";
import { useCookies } from "react-cookie";

export default function LoginForm() {
  const [loginData, setLoginData] = useRecoilState<UserInfo>(userLoginState);

  const [inputData, setInputData] = useState<LoginReq>({
    userEmail: "",
    password: "",
  });

  const [isError, setIsError] = useState({
    userEmail: false,
    password: false,
  });

  const BASE_URL = Config().baseUrl;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (inputData.userEmail === "" || inputData.password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "이메일과 비밀번호를 입력해주세요!",
      });
      return;
    } else {
      RequestLogin({
        userEmail: inputData.userEmail,
        password: inputData.password,
      })
        .then((res) => {
          const loginRes: LoginRes = res.data;
          const accessToken = loginRes.accessToken;
          const userId = loginRes.userId;
          setLoginData({
            userId: userId,
            isLogin: true,
          });
          localStorage.setItem("ACCESS_TOKEN", accessToken);
        })
        .then(() => {
          Swal.fire({
            icon: "success",
            text: "Welcome!",
          });
          router.back();
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            icon: "error",
            text: "Login Error!",
          });
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div id="login-input">
          <input
            type="email"
            name="userEmail"
            placeholder="이메일"
            onChange={handleOnChange}
          />
          {isError.userEmail ? (
            <p className="error-message">이메일을 입력해 주세요.</p>
          ) : null}
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={handleOnChange}
          />
          {isError.password ? (
            <p className="error-message">비밀번호를 입력해 주세요.</p>
          ) : null}
        </div>
        <div id="login-service">
          <Link href={"/"}>아이디 찾기</Link>
          <Link href={"/"}>비밀번호 찾기</Link>
          <Link href={"/"}>회원가입</Link>
        </div>
        <div className="submit-container">
          <StButton type="submit" buttonText="로그인하기" textSize="0.9rem" />
        </div>
      </form>
    </>
  );
}
