import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";

import { useRecoilState, useRecoilValue } from "recoil";
import { userLoginState } from "@/state/user/atom/userLoginState";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { RequestGetAllAddress } from "@/Service/AddressService/AddressService";
import AddressCard from "@/components/page/address/AddressCard";
import AddressEditModal from "@/components/modals/AddressEditModal";
import { AddressDataType } from "@/Types/address/AddressType";

export default function Address() {
  const isLogin = useRecoilValue(userLoginState);
  const router = useRouter();
  const [addressList, setAddressList] = useState<AddressDataType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const modalClose = () => {
    setIsModalOpen(false);
  };

  const fetchUserAddress = useCallback(async () => {
    RequestGetAllAddress(isLogin.userId)
      .then((res) => {
        const addressList = res.data.addressList;
        setAddressList([...addressList]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLogin.userId]);

  useEffect(() => {
    if (isLogin.isLogin && isLogin.userId !== null) {
      fetchUserAddress();
    }
  }, []);

  return (
    <div>
      <AddressEditModal
        isModify={false}
        isModalOpen={isModalOpen}
        closeModal={modalClose}
        fetchUserAddress={fetchUserAddress}
      />
      <Head>
        <title>배송지 관리</title>
      </Head>
      <section id="delivery-header">
        <p>배송지 관리</p>
      </section>
      {addressList &&
        addressList.map((element, idx) => (
          <AddressCard
            Address={element}
            key={idx}
            fetchUserAddress={fetchUserAddress}
          />
        ))}
      <section className="submit-container">
        <button onClick={() => setIsModalOpen(true)}>+ 새 배송지 추가</button>
      </section>
    </div>
  );
}
