import React, { useEffect } from 'react'
import Head from 'next/head'

import { useRecoilState } from 'recoil';
import axios from 'axios'
import Config from '@/configs/config.export';
import { REQ_ADDRESS_DEFAULT } from '@/constants/Apis/URL';
import AddressList from '@/components/page/address/addressList';

export default function address() {
  const baseUrl = Config().baseUrl;
  //작업중단 후 컴포넌트 분할작업 ㄱ

  useEffect(()=> {
    axios.get(`${baseUrl}${REQ_ADDRESS_DEFAULT}`) // 파라미터 uuid 설정?
    .then((res)=> {
      console.log(res.data.data)
    })
    .catch(err => {
      console.log(err)
    })
  })
  
  interface addressDataType {
    id: number,
    alias: string,
    recipient: string,
    zipCode: number,
    baseAddress: string,
    detailAddress: string,
    contactInfo1: string,
    contactInfo2: string,
    shippingMemo: string,
    defaultAddress: boolean
  }

  return (
    <div>
    <Head>
      <title>배송지 관리</title>
    </Head>
      <section id="delivery-header">
        <p>배송지 관리</p>
      </section>

        <AddressList />
      <section className="submit-container">
        <button type="submit">+ 새 배송지 추가</button>
      </section>  
    </div>
  )
}
