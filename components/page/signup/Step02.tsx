import { inputRegisterType } from '@/Types/UserRequest/Request';
import React, {useState, useEffect } from 'react';

interface ChildProps {
  inputData: inputRegisterType;
  setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>;
}
const Step02 = ( { inputData, setInputData } : ChildProps) => {

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
    <header>
      <div className="signup-header">
          <a href="javascript:window.history.back();"><img src="./assets/images/icons/close.png" className="back-button"/></a>
          <p className="page-num">❶－②－③－④</p>
      </div>
    </header>
    <div className="signup-title">
      <h1>본인확인을 위해<br />인증을 진행해 주세요.</h1>
    </div>
    <form className="agree-input" style={{ padding: "0px 20px", boxSizing: "border-box", marginBottom: "30px"}}>
        {/* <div className='form-group-step'>
          <input type="checkbox" id="certified-agree" />
          <label>본인 인증 서비스 약관 전체동의</label>
        </div>
        <div className='form-group-step'>
         <p>휴대폰 본인 인증 서비스 이용약관 동의 (필수)</p><img className="arrow" src="./assets/images/icons/contents/right-arrow.png" />
        </div>
        <div className='form-group-step'>
        <p>휴대폰 통신사 이용약관 동의 (필수)</p><img className="arrow" src="./assets/images/icons/contents/right-arrow.png" />
        </div>
        <div className='form-group-step'>
        <p>개인정보 제공 및 이용 동의 (필수)</p><img className="arrow" src="./assets/images/icons/contents/right-arrow.png" />
        </div>
        <div className='form-group-step'>
        <p>고유식별정보 처리 (필수)</p><img className="arrow" src="./assets/images/icons/contents/right-arrow.png" />
        </div> */}
    </form>
    <hr />
    <form id="identification-input">
        <input type="text" id="identification" name="name" placeholder="이름" /><br />
        <input type="number" id="identification" name="birth" placeholder="생년월일 6자리 - " /><br />
        <div className="phonenumber-input">
            <select>
                <option>SKT</option>
                <option>KT</option>
                <option>LG U+</option>
                <option>SKT 알뜰폰</option>
                <option>KT 알뜰폰</option>
                <option>LG U+ 알뜰폰</option>
            </select>
            <input type="number" id="identification" name="phonenumber" placeholder="휴대폰 번호" />
            <button type="submit" className="request">인증요청</button>
        </div>
        <p className="notice">· 타인의 개인정보를 도용하여 가입한 경우, 서비스 이용 제한 및 법적 제재를 받으실 수 있습니다.</p>
        
        
    </form>
    
   
    <section className="submit-container">
        <a href="/signup_id.html"><button type="submit">다음</button></a>
    </section>    

    </>
  );
}

export default Step02;