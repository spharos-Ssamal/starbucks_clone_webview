import React from 'react'
import styled from 'styled-components';
import { useLottie } from "lottie-react";
import Congratulation from '@/public/assets/lottie/congratulations.json'
import { useRecoilValue } from 'recoil';
import { userLoginState } from '@/state/user/atom/userLoginState';

export default function CongratulationAnimation() {
  const isLogin = useRecoilValue(userLoginState);
  const options = {
    animationData: Congratulation,
    loop: false,
    autoplay: true,
  };

  const { View } = useLottie(options);
  if (!isLogin.isLogin) return null;
  return (
    <Container>
      {View}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 9999;
  margin: 0 auto;
  background-color: #067040;
  display: flex;
  align-items: center;
  `;
