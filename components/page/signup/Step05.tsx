import { inputRegisterType } from '@/Types/UserRequest/Request';
import React, {useState, useEffect } from 'react';

interface ChildProps {
  inputData: inputRegisterType;
  setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>;
}
const Step05 = ( { inputData, setInputData } : ChildProps) => {

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
              <p className="page-num">①－②－③－❹</p>
          </div>
          <section className="greeting">
              <h2 className="signup-info">닉네임을<br />입력해 주세요.</h2>
          </section>
          <section className="agree-input margin-top-zero">
              <input type="checkbox" id="optional-agree" name="optional-agree" />
              <label>선택적 개인정보 수집동의 및 이용약관</label>
              </section>
          <section id="id-password-input">
              <input type="text" id="user_email" name="email" placeholder="닉네임 (한글 6자리 이내)" />
          </section>
          
          <section className="email-guideline">
              <p className="notice">· 매장에서 주문한 메뉴를 찾으실 때, 등록한 닉네임으로 불러 드립니다.</p>
          </section>
          
      </header>
      <section id="identification-input">
          
      </section>
      <section className="submit-container">
          <button type="submit">다음</button>
      </section>    

    </div>
    </>
  );
}

export default Step05;