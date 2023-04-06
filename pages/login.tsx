import router, { useRouter } from "next/router";
import Head from "next/head";
import LoginForm from "@/components/page/login/LoginForm";
import LoginTop from "@/components/page/login/LoginTop";
import NavigationButton from "@/components/ui/NavigationButton";
import StButton from "@/components/ui/StButton";

import { UserAuthInfo } from "@/state/user/type/UserInfo";
import { useRecoilState } from "recoil";
import { SetStateAction, useState } from "react";
import { LoginReq } from "@/Types/UserRequest/Request";
import Swal from "sweetalert2";
import { RequestLogin } from "@/Service/AuthService/AuthService";
import { LoginRes } from "@/Types/UserRequest/Response";
import { userLoginState } from "@/state/user/atom/userLoginState";
import SignupModal from "@/components/modals/SignupModal";

export default function LoginModal() {
  const [loginData, setLoginData] =
    useRecoilState<UserAuthInfo>(userLoginState);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState<boolean>(false);

  const [inputData, setInputData] = useState<LoginReq>({
    userEmail: "",
    password: "",
  });

  const [isError, setIsError] = useState({
    userEmail: false,
    password: false,
  });

  const handleSubmit = () => {
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
          return res.data;
        })
        .then((res) => {
          Swal.fire({
            icon: "success",
            text: `${res.userName} 님 환영합니다!`,
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
      <SignupModal
        isSignupModalOpen={isSignupModalOpen}
        setIsSignupModalOpen={setIsSignupModalOpen}
      />
      <div className="modalWrap">
        <Head>
          <title>로그인</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavigationButton heading="left" />
        <div className="slide-in-login">
          <LoginTop />
          <LoginForm
            inputData={inputData}
            setInputData={setInputData}
            isError={isError}
            setIsError={setIsError}
            setIsSignupModalOpen={setIsSignupModalOpen}
          />
        </div>
        <div className="submit-container">
          <StButton
            type="button"
            buttonText="로그인하기"
            textSize="0.9rem"
            handler={handleSubmit}
          />
        </div>
      </div>
    </>
  );
}
