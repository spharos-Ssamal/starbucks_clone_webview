import React from 'react'
import { useLottie } from "lottie-react";
import nodata from '@/public/assets/lottie/nodata.json'
import cart from '@/public/assets/lottie/cart.json'


export default function Nodata(props: { text: string, icon?: string }) {

  const options = {
    animationData: props.icon === 'cart' ? cart : nodata,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div className='nodata-wrap'>
      <div className={props.icon === 'cart' ? 'cartIcon' : 'icon'}>{View}</div>
      <div className='text'>{props.text}</div>
    </div>
  )
}
