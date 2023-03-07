import { inputRegisterType } from '@/Types/UserRequest/Request';
import React, {useState, useEffect } from 'react';

interface ChildProps {
  inputData: inputRegisterType;
  setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>;
}
const Step01 = ( { inputData, setInputData } : ChildProps) => {

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
      <div className="greeting first-section">
          <img id="starbucks-logo" src="./assets/images/starbucks-logo.png"/>
          <h2 className="signup-info">고객님<br/>환영합니다!</h2>
      </div>
      <form className="agree-input" id="agree-main">
          <div className='form-group'>
            <input type="checkbox" id="all-agree" name="isAgree" onChange = {handleInput} />
            <label>약관 전체동의</label>
          </div>
          <hr />
          <div className='form-group'>
            <input type="checkbox" id="tos-agree" name="" />
            <label>이용약관 동의(필수)</label>
            <a href="/best_cake.html"><img className="arrow" src="./assets/images/icons/arrow-point-to-right.png"/></a>
          </div>
          <div className='form-group'>
            <input type="checkbox" id="personal-agree" name="" />
            <label>개인정보 수집 및 이용동의(필수)</label>
            <a href="/best_cake.html"><img className="arrow" src="./assets/images/icons/arrow-point-to-right.png" /></a>
          </div>
          <div className='form-group'>
            <input type="checkbox" id="advertising-agree" name=" "/>
            <label>광고성 정보 수신동의(선택)</label>
            <a><img className="arrow" src="./assets/images/icons/arrow-point-to-right.png"/></a><br/>
          </div>
          <div className="advertising-info">
            <p className='small-left-50'>광고성 정보 수신 방법(선택)</p>
            <div className='form-group-small'>
              <input type="checkbox" id="advertising-email" />
              <label>E-mail</label>
              <input type="checkbox" id="advertising-sms" />
              <label>SMS</label>
            </div>
          </div>
      </form>
    </div>
    </>
  );
}

export default Step01;