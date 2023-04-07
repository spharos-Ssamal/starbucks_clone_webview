import { inputRegisterType } from '@/Types/UserRequest/Request';
import React, {useState, useEffect } from 'react';

interface ChildProps {
  inputData: inputRegisterType;
  setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>;
}
const Step04 = ( { inputData, setInputData } : ChildProps) => {

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
              <p className="page-num">①－②－❸－④</p>
          </div>
          <section className="greeting">
              <h2 className="signup-info">이메일을<br />입력해 주세요.</h2>
          </section>
          <section id="email-input">
              <input type="text" id="user_email" name="email" placeholder="" />
              <p>@</p>
              <select>
                  <option>직접 입력</option>
                  <option>naver.com</option>
                  <option>gmail.com</option>
              </select>
          </section>
          <section className="email-guideline">
              <p className="notice">· 스타벅스 코리아의 새로운 서비스와 최신 이벤트 정보를 이메일로 보내드려요.</p>
              <p className="notice">· 주요 공지사항 및 이벤트 당첨안내 등 일부 소식은 수신동의 여부에 관계없이 발송됩니다.</p>
          </section>
          
      </header>
      <section id="identification-input">
          
      </section>
      <section className="submit-container">
          <a href="/signup_nickname.html"><button type="submit">다음</button></a>
      </section>    

    </div>
    </>
  );
}

export default Step04;