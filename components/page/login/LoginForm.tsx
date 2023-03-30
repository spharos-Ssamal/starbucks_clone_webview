import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import router from "next/router";
import Link from "next/link";

import Swal from "sweetalert2";

import Config from "@/configs/config.export";
import { LoginReq } from "@/Types/UserRequest/Request";
import { LoginRes } from "@/Types/UserRequest/Response";
import { userLoginState } from "@/state/user/atom/userLoginState";
import StButton from "@/components/ui/StButton";
import { UserInfo } from "@/state/user/type/UserInfo";
import { RequestLogin } from "@/Service/AuthService/AuthService";

export default function LoginForm(props: { inputData: LoginReq; setInputData: Function; isError: any; setIsError: any;}) {
  
  const BASE_URL = Config().baseUrl;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    props.setInputData({ ...props.inputData, [name]: value });
  };

  
  return (
    <>
      <div>
        <div id="login-input">
          <input
            type="email"
            name="userEmail"
            placeholder="이메일"
            onChange={handleOnChange}
          />
          {props.isError.userEmail ? (
            <p className="error-message">이메일을 입력해 주세요.</p>
          ) : null}
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={handleOnChange}
          />
          {props.isError.password ? (
            <p className="error-message">비밀번호를 입력해 주세요.</p>
          ) : null}
        </div>
        <div id="login-service">
          <Link href={"/"}>아이디 찾기</Link>
          <Link href={"/"}>비밀번호 찾기</Link>
          <Link href={"/"}>회원가입</Link>
        </div>
      </div>
    </>
  );
}
