import { inputRegisterType } from '@/Types/UserRequest/Request';
import React, {useState, useEffect } from 'react';

interface ChildProps {
  inputData: inputRegisterType;
  setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>;
}
const Step03 = ( { inputData, setInputData } : ChildProps) => {

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked)
    const { name, checked } = e.target;
    setInputData({
      ...inputData,
      [name]: checked,
    });
  }

  useEffect(()=> {
    console.log(inputData)
  },[inputData])

  return (
    <> 
    <div className='slide-in'> 
      <header>
          <div className="signup-header">
              <a href="javascript:window.history.back();"><img src="./assets/images/icons/close.png" className="back-button"/></a>
              <p className="page-num">①－❷－③－④</p>
          </div>
          <section className="greeting">
              <h2 className="signup-info">아이디와 비밀번호를<br />입력해 주세요.</h2>
          </section>
          <section id="id-password-input">
              <input type="text" id="user_id" name="id" placeholder="아이디 (4-13자리 이내)" />
              <input type="text" id="user_password" name="password" placeholder="비밀번호 (10-20자리 이내)" />
              <input type="text" id="user_password_check" name="password_check" placeholder="비밀번호 확인" />

          </section>
      </header>
      <section id="identification-input">
          
      </section>
      <section className="submit-container">
          <a href="/signup_email.html"><button type="submit">다음</button></a>
      </section>    
    </div>
    </>
  );
}

export default Step03;