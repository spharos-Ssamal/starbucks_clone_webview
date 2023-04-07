import { RequestGetAllAddress } from "@/Service/AddressService/AddressService";
import {
  AddressDataType,
  ShippingAddressInfo,
} from "@/Types/address/AddressType";
import { userLoginState } from "@/state/user/atom/userLoginState";
import Link from "next/link";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useRecoilValue } from "recoil";
import AddressEditModal from "./AddressEditModal";
import ShippingAddressCard from "../page/payment/ShippingAddresCards";
import Swal from "sweetalert2";

export default function ChangeAddressModal(props: {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setShippingAddress: Dispatch<SetStateAction<ShippingAddressInfo>>;
}) {
  const isLogin = useRecoilValue(userLoginState);
  const [addressList, setAddressList] = useState<AddressDataType[]>([]);
  const [isAddressEditModalOpen, setIsAddressEditModalOpen] =
    useState<boolean>(false);

  const [addressId, setAddressId] = useState(0);

  const onClickChangeAddressButton = () => {
    if (addressId !== 0) {
      const newAddress = addressList.find((e) => e.id && e.id === addressId);
      if (newAddress !== undefined) {
        props.setShippingAddress(newAddress);
        Swal.fire({
          icon: "success",
          title: "success!",
          text: "배송지가 변경 되었습니다.",
        }).then(() => {
          props.setIsModalOpen(false);
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "시스템 에러가 발생하였습니다.",
        }).then(() => {
          props.setIsModalOpen(false);
        });
      }
    }
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
    <>
      {props.isModalOpen && (
        <>
          <AddressEditModal
            isModify={false}
            isModalOpen={isAddressEditModalOpen}
            closeModal={() => setIsAddressEditModalOpen(false)}
            fetchUserAddress={fetchUserAddress}
          />

          <div className="modalWrap">
            <div
              className="back-button"
              onClick={() => props.setIsModalOpen(false)}
            >
              <img src="/assets/images/icons/close.png" alt="" />
            </div>
            <section id="delivery-header">
              <p>배송지 선택</p>
              <a onClick={() => setIsAddressEditModalOpen(true)}>
                <img src="/assets/images/icons/search.svg" alt="" />
                <span>새 배송지 추가</span>
              </a>
            </section>

            {addressList &&
              addressList.map((element, idx) => (
                <ShippingAddressCard
                  setAddressId={setAddressId}
                  key={element.id + " " + idx}
                  Address={element}
                  fetchUserAddress={fetchUserAddress}
                />
              ))}

            <section className="submit-container">
              <button onClick={() => onClickChangeAddressButton()}>
                변경하기
              </button>
            </section>
          </div>
        </>
      )}
    </>
  );
}
