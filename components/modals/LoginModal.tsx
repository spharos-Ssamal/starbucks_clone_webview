import { loginData } from '@/Types/starbucksTypes';
import Config from '@/configs/config.export';
import { REQUEST_LOGIN } from '@/constants/Apis/URL';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react'

export default function LoginModal(props:{isModalOpen:boolean, setIsModalOpen:Function}) {
  const BASE_URL = Config().baseUrl;

  const [inputData, setInputData] = useState({} as loginData);
  const [isError, setIsError] = useState({
    email: false,
    password: false,
  });

  const handleOnChange = (event: any) => {
    const { name, value } = event.target;
    if (name === "email") {
      setInputData({ ...inputData, email: value });
    } else if (name === "password") {
      setInputData({ ...inputData, password: value });
    }
  };

  //로그인 확인용 => Recoil 셋업 되는대로 라우팅 처리 하겠습니다.
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (inputData.email === "" || inputData.password === "") {
      alert("이메일과 비밀번호를 입력해 주세요.");
      return;
    } else {
      // RequestLogin({
      //   userEmail: inputData.email,
      //   password: inputData.password,
      // }).then((res) => {
      //   console.log(res);
      // });

      axios.post(`${BASE_URL}${REQUEST_LOGIN}`, {
        userEmail: inputData.email,
        password: inputData.password,
      }).then(res=> {
        console.log(res);
      })

    }
  };
  
  if(!props.isModalOpen) return null;

  return (
    <div className='modalWrap'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div onClick={()=>props.setIsModalOpen(false)}>
          <img src="/assets/images/icons/left.png" className="back-button" />
        </div>
      </div>
      <div className="slide-in">
      <div className="login-header">
        <h1>로그인</h1>
      </div>
      <div className="greeting">
        <img id="starbucks-logo" src="./assets/images/starbucks-logo.png" />
        <h2>
          안녕하세요.
          <br />
          스타벅스입니다.
        </h2>
        <p>회원 서비스 이용을 위해 로그인 해주세요.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div id="login-input">
          <input
            type="email"
            name="email"
            placeholder="이메일"
            onChange={handleOnChange}
          />
          {isError.email ? (
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
       
      </form>
      </div>
      <div className="submit-container">
          <button type="submit">로그인하기</button>
        </div>
      
    </div>
  );
}
