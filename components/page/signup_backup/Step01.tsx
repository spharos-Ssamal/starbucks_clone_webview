import { inputRegisterType, privateAgreeType } from '@/Types/UserRequest/Request';
import CheckBox from '@/components/ui/CheckBox';
import Separator from '@/components/ui/Separator';
import React, {useState, useEffect } from 'react';

interface ChildProps {
  inputData: inputRegisterType;
  setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>;
}
const Step01 = ( { inputData, setInputData } : ChildProps) => {

  const [ agreeArray, setAgreeArray ] = useState<privateAgreeType>({} as privateAgreeType);
  const [ adOption, setAdOption ] = useState<object>([
    {id: 1, name: 'E-mail', checked: false},
    {id: 2, name: 'SMS', checked: false},
  ]);

  useEffect(()=> {
    setInputData({...inputData, privateAgree: agreeArray})
  },[agreeArray])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name , checked } = e.target;
    if(name === 'isAllAgree') {
      setAgreeArray({
        isAgree: checked,
        isUseConfirm: checked,
        isAdvertisingConfirm: checked,
    })} 
    else {
      setAgreeArray({
        ...agreeArray,
        [name]: checked,
      });
    }
  }


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
            inputName = 'isAllAgree'
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
            inputName = 'isAgree'
            link = '/best_cake'
            handler = { handleInput }
            value = { agreeArray.isAgree }
          />
          <CheckBox 
            lableText = '개인정보 수집 및 이용동의(필수)'
            isArrow = {true}
            inputName = 'isUseConfirm'
            link = '/best_cake'
            handler = { handleInput }
            value = { agreeArray.isUseConfirm }
          />
          <CheckBox 
            lableText = '광고성 정보 수신동의(선택)'
            isArrow = {true}
            inputName = 'isAdvertisingConfirm'
            link = '/best_cake'
            handler = { handleInput }
            value = { agreeArray.isAdvertisingConfirm }
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