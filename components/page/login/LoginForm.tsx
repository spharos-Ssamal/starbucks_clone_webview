import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useRecoilState } from "recoil";
import router from "next/router";
import Link from "next/link";

import Config from "@/configs/config.export";
import { LoginReq } from "@/Types/UserRequest/Request";

interface ErrorMsg {
  userEmail: string;
  password: string;
}

export default function LoginForm(props: { inputData: LoginReq; setInputData: Function; }) {
  
  const BASE_URL = Config().baseUrl;
  const [isError, setIsError] = useState<ErrorMsg>({
    userEmail: '',
    password: '',
  });

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if(name === 'userEmail') {
      if(value === '') {
        setIsError({ ...isError, userEmail: '이메일을 입력해주세요.' });
      } else {
        setIsError({ ...isError, userEmail: '' });
      }
    } else if(name === 'password') {
      if(value === '') {
        setIsError({ ...isError, password: '비밀번호를 입력해주세요.' });
      } else {
        setIsError({ ...isError, password: '' });
      }
    }
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
            <p className="error-message">{isError.userEmail}</p>
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={handleOnChange}
          />
            <p className="error-message">{isError.password}</p>
        </div>
        <div id="login-service">
          <a>아이디 찾기</a>
          <a>비밀번호 찾기</a>
          <a onClick={() => props.setIsSignupModalOpen(true)}> 회원가입</a>
        </div>
      </div>
    </>
  );
}
