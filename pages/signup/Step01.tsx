import { inputRegisterType } from '@/Types/UserRequest/Request';
import CheckBox from '@/components/ui/CheckBox';
import Separator from '@/components/ui/Separator';
import React, {useState, useEffect } from 'react';

interface ChildProps {
  inputData: inputRegisterType;
  setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>;
}
const Step01 = ( { inputData, setInputData } : ChildProps) => {

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name , checked } = e.target;
    setInputData({
      ...inputData,
      [name]: checked,
    });
  }

  const [ agreeArray, setAgreeArray ] = useState<boolean[]>([false, false, false]);
  const [ adOption, setAdOption ] = useState<object>([
    {id: 1, name: 'E-mail', checked: false},
    {id: 2, name: 'SMS', checked: false},
  ]);

  useEffect(()=> {
    console.log(inputData)
  },[inputData])

  return (
    <> 
    <div className='slide-in'> 
      <div className="greeting">
          <img id="starbucks-logo" src="./assets/images/starbucks-logo.png"/>
          <h2 className="signup-info">고객님<br/>환영합니다!</h2>
      </div>
      <form className="agree-input" id="agree-main">
          <CheckBox 
            lableText = '약관 전체동의'
            isArrow = {false}
            inputName = 'isAgree'
            link = '/best_cake'
            handler = { handleInput }
          />
          <Separator 
            color = '#e5e5e5'
            gutter = {1}
          />
          <CheckBox 
            lableText = '이용약관 동의(필수)'
            isArrow = {true}
            inputName = 'isAgree_port_1'
            link = '/best_cake'
          />
          <CheckBox 
            lableText = '개인정보 수집 및 이용동의(필수)'
            isArrow = {true}
            inputName = 'isAgree_port_2'
            link = '/best_cake'
          />
          <CheckBox 
            lableText = '광고성 정보 수신동의(선택)'
            isArrow = {true}
            inputName = 'isAgree_port_3'
            link = '/best_cake'
          />
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