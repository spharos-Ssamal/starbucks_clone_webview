import { ChangeEvent, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil';
import router from 'next/router';
import Link from 'next/link'

import axios from 'axios';
import Swal from 'sweetalert2';

import Config from '@/configs/config.export';
import { LoginReq } from '@/Types/UserRequest/Request';
import { REQUEST_LOGIN } from '@/constants/Apis/URL';
import { LoginRes } from '@/Types/UserRequest/Response';
import { userIsLogin } from '@/state/user/atom/userIsLoginState';
import { userLoginState } from '@/state/user/atom/userLoginState';
import StButton from '@/components/ui/StButton'


export default function LoginForm() {
  const [loginData, setLoginData] = useRecoilState<LoginRes>(userLoginState);
  const setIsLogIn = useSetRecoilState<boolean>(userIsLogin);
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

  //로그인 확인용 => Recoil 셋업 되는대로 라우팅 처리 하겠습니다.
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(inputData);
    if (inputData.userEmail === "" || inputData.password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "이메일과 비밀번호를 입력해주세요!",
      });
      return;
    } else {
      // RequestLogin({
      //   userEmail: inputData.email,
      //   password: inputData.password,
      // }).then((res) => {
      //   console.log(res);
      // });

      axios.post(`${BASE_URL}/${REQUEST_LOGIN}`, {
        userEmail: inputData.userEmail,
        password: inputData.password,
      }).then(res=> {
        console.log(res);
        setLoginData(res.data.data);
        setIsLogIn(true);
        let myLogin = localStorage;
        myLogin.setItem('userId', res.data.data.userId);
        myLogin.setItem('accessToken', res.data.data.accessToken); 
        myLogin.setItem('refreshToken', res.data.data.refreshToken);        

      }).then(() => {
        Swal.fire({
          icon: "success",
          text: "Welcome!",
        });
        router.back();
      })
      .catch(err=> {
        console.log(err);
      })
      
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
        <StButton 
          type="submit"
          buttonText="로그인하기"
          textSize='0.9rem'
        />
        </div>
        
      </form>
    </>
  )
}
