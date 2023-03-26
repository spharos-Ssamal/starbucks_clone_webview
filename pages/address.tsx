import React, { useEffect } from "react";
import Head from "next/head";

import { useRecoilState } from "recoil";
import axios from "axios";
import Config from "@/configs/config.export";
import { REQUEST_ADDRESS_DEFAULT } from "@/constants/Apis/URL";
import AddressList from "@/components/page/address/AddressList";

export default function Address() {
  const baseUrl = Config().baseUrl;

  useEffect(() => {
    axios
      .get(`${baseUrl}${REQUEST_ADDRESS_DEFAULT}`)
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  interface addressDataType {
    id: number;
    alias: string;
    recipient: string;
    zipCode: number;
    baseAddress: string;
    detailAddress: string;
    contactInfo1: string;
    contactInfo2: string;
    shippingMemo: string;
    defaultAddress: boolean;
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
  );
}
