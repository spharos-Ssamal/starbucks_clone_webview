import { RequestDeleteAddress } from "@/Service/AddressService/AddressService";
import { AddressDataType } from "@/Types/address/AddressType";
import AddressEditModal from "@/components/modals/AddressEditModal";
import React, { useState } from "react";
import Swal from "sweetalert2";

type Props = {
  Address: AddressDataType;
  fetchUserAddress: () => Promise<void>;
};

export default function AddressCard({ Address, fetchUserAddress }: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const modalClose = () => {
    setIsModalOpen(false);
  };

  const onClickDelete = () => {
    if (Address.id !== undefined) {
      RequestDeleteAddress(Address.id)
        .then(() => {
          Swal.fire({
            icon: "success",
            text: "삭제 되었습니다.",
          });
          fetchUserAddress();
        })
        .catch((ex) => {
          console.log(ex);
          Swal.fire({
            icon: "error",
            text: "삭제 과정에 에러가 발생했습니다.",
          });
        });
    }
  };

  return (
    <div>
      <AddressEditModal
        isModify={true}
        isModalOpen={isModalOpen}
        closeModal={modalClose}
        Address={Address}
        fetchUserAddress={fetchUserAddress}
      />
      <section id="shipping-address-info">
        <div className="address-manage">
          <div className="address-info">
            <div className="address-name">
              <div className="name">{Address.alias}</div>
              {Address.defaultAddress && <div className="is-primary">기본</div>}
            </div>
          </div>
          {Address.defaultAddress ? (
            <a onClick={() => setIsModalOpen(true)}>수정</a>
          ) : (
            <>
              <a onClick={() => setIsModalOpen(true)}>수정</a>
              <a>|</a>
              <a onClick={() => onClickDelete()}>삭제</a>
            </>
          )}
        </div>
        <p>
          ({Address.zipCode}) {Address.baseAddress} {Address.detailAddress}
        </p>
        <p>{Address.contactInfo1}</p>
        <p>{Address.shippingMemo}</p>
      </section>
    </div>
  );
}
