import { AddressDataType } from "@/Types/address/AddressType";
import AddressEditModal from "@/components/modals/AddressEditModal";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

export default function ShippingAddressCard(props: {
  setAddressId: Dispatch<SetStateAction<number>>;
  Address: AddressDataType;
  fetchUserAddress: () => Promise<void>;
}) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const modalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <AddressEditModal
        isModify={true}
        isModalOpen={isModalOpen}
        closeModal={modalClose}
        Address={props.Address}
        fetchUserAddress={props.fetchUserAddress}
      />
      <section id="delivery-list">
        <input
          type="radio"
          name="deliver-place"
          onClick={() =>
            props.Address.id && props.setAddressId(props.Address.id)
          }
        />
        <div className="delivery-info">
          <div className="delivery-name">
            <div className="name">
              {props.Address.recipient} ({props.Address.alias})
            </div>
            {props.Address.defaultAddress && (
              <div className="is-primary">기본</div>
            )}
          </div>
          <p>
            ({props.Address.zipCode}) {props.Address.baseAddress}{" "}
            {props.Address.detailAddress}
          </p>
          <p>{props.Address.contactInfo1}</p>
          <p>{props.Address.shippingMemo}</p>
        </div>
        <a onClick={() => setIsModalOpen(true)}>수정</a>
      </section>
    </div>
  );
}
