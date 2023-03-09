import { inputRegisterType } from '@/Types/UserRequest/Request';
import React, {useState} from 'react'
import Step01 from '../components/page/signup/Step01';
import Step02 from '../components/page/signup/Step02';
import Step03 from '../components/page/signup/Step03';
import Step04 from '../components/page/signup/Step04';
import Step05 from '../components/page/signup/Step05';
import StButton from '@/components/ui/StButton';



export default function signup() {

  const [stepId, setStepId] = useState<number>(1);
  const [inputData, setInputData] = useState<inputRegisterType>({
    userEmail: "",
    userName: "",
    userNickname: "",
    birthday: new Date(),
    password: "",
    confirmPassword: "",
    phone: "",
    isUserConfirm: false,
    isAgree: false
  })

  const steps:any = [
    { 1: <Step01 inputData={inputData} setInputData={setInputData}/> },
    { 2: <Step02 inputData={inputData} setInputData={setInputData}/> },
    { 3: <Step03 inputData={inputData} setInputData={setInputData}/> },
    { 4: <Step04 inputData={inputData} setInputData={setInputData}/> },
    { 5: <Step05 inputData={inputData} setInputData={setInputData}/> }
  ]

  const handleStepNext = () => {
    if(!inputData.isAgree) {
      alert("약관에 동의해주세요.");
      return;
    } else if (inputData.isAgree && stepId === 1) {
      setStepId(2);
    }
    
  }

  return (
    <>
     
      {steps[stepId-1][stepId]}
      <section className="submit-container">
        <StButton
          buttonText = 'NEXT'
          textSize = '1.1rem'
          handler = { handleStepNext }
        />
      </section>
    </>
  )
}