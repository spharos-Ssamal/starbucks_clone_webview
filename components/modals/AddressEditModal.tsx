import Link from "next/link";
import { useEffect, useState } from "react";
import CheckBox from "../ui/CheckBox";
import DaumPostcode from "react-daum-postcode";
import { PostcodeModal } from "./PostcodeModal";
import { AddressDataType } from "@/Types/address/AddressType";
import {
  RequestAddAddress,
  RequestModifyAddress,
} from "@/Service/AddressService/AddressService";
import { userLoginState } from "@/state/user/atom/userLoginState";
import { useRecoilValue } from "recoil";
import Swal from "sweetalert2";

interface Props {
  isModify: boolean;
  isModalOpen: boolean;
  Address?: AddressDataType;
  closeModal: () => void;
  fetchUserAddress: () => Promise<void>;
}

const initAddressData = {
  alias: "",
  recipient: "",
  baseAddress: "",
  detailAddress: "",
  contactInfo1: "",
  contactInfo2: "",
  shippingMemo: "",
  defaultAddress: false,
};

export default function AddressEditModal(props: Props) {
  const isLogin = useRecoilValue(userLoginState);
  const { isModify, isModalOpen, Address } = props;
  const [modalState, setModalState] = useState<boolean>(false);
  const [addressInfo, setAddressInfo] =
    useState<AddressDataType>(initAddressData);

  useEffect(() => {
    if (isModify && Address !== undefined) {
      setAddressInfo(Address);
    } else {
      setAddressInfo(initAddressData);
    }
  }, [props]);

  const onChangeAddressForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressInfo({
      ...addressInfo,
      [name]: value,
    });
  };

  const onClickClosePostcodeModal = () => {
    setModalState(false);
  };

  const onCompletePost = (data: any) => {
    setModalState(false);
    setAddressInfo({
      ...addressInfo,
      zipCode: data.zonecode,
      baseAddress: data.address,
    });
  };

  const submitNewAddress = () => {
    RequestAddAddress({
      userId: isLogin.userId,
      addressInfo: {
        alias: addressInfo.alias,
        recipient: addressInfo.recipient,
        zipCode: addressInfo.zipCode,
        baseAddress: addressInfo.baseAddress,
        detailAddress: addressInfo.detailAddress,
        contactInfo1: addressInfo.contactInfo1,
        contactInfo2: addressInfo.contactInfo2,
        shippingMemo: addressInfo.shippingMemo,
        defaultAddress: addressInfo.defaultAddress,
      },
    })
      .then(() => {
        Swal.fire({
          icon: "success",
          text: "주소가 등록되었습니다.",
        });
        props.fetchUserAddress();
        props.closeModal();
      })
      .catch((ex) => {
        Swal.fire({
          icon: "error",
          text: "주소 등록 과정에서 문제가 생겼습니다.",
        });
        console.log(ex);
      });
  };

  const modifyAddress = () => {
    RequestModifyAddress({
      userId: isLogin.userId,
      addressInfo: {
        id: addressInfo.id,
        alias: addressInfo.alias,
        recipient: addressInfo.recipient,
        zipCode: addressInfo.zipCode,
        baseAddress: addressInfo.baseAddress,
        detailAddress: addressInfo.detailAddress,
        contactInfo1: addressInfo.contactInfo1,
        contactInfo2: addressInfo.contactInfo2,
        shippingMemo: addressInfo.shippingMemo,
        defaultAddress: addressInfo.defaultAddress,
      },
    })
      .then(() => {
        Swal.fire({
          icon: "success",
          text: "주소 정보가 변경되었습니다.",
        });
        props.fetchUserAddress();
        props.closeModal();
      })
      .catch((ex) => {
        Swal.fire({
          icon: "error",
          text: "주소 변경 과정에서 문제가 생겼습니다.",
        });
        console.log(ex);
      });
  };

  return (
    <>
      {isModalOpen && (
        <div className="modalWrap">
          <section id="info-header">
            <div>
              <img
                onClick={() => {
                  props.closeModal();
                  setAddressInfo(initAddressData);
                }}
                src="/assets/images/icons/close.png"
                alt=""
              />
            </div>
            <div>배송지 정보</div>
          </section>
          <section id="delivery-input">
            <div>
              <input
                type="text"
                name="alias"
                value={addressInfo.alias}
                onChange={onChangeAddressForm}
                placeholder="주소 별칭"
              />
              <input
                type="text"
                name="recipient"
                value={addressInfo.recipient}
                onChange={onChangeAddressForm}
                placeholder="받는 분 *"
              />
              <div className="post-number">
                <input
                  type="text"
                  name="zipCode"
                  value={addressInfo.zipCode}
                  onChange={onChangeAddressForm}
                  placeholder="우편번호 *"
                />
                <div
                  className="search-address"
                  onClick={() => setModalState(true)}
                >
                  주소검색
                </div>
                <PostcodeModal
                  isModalOpen={modalState}
                  closeModal={onClickClosePostcodeModal}
                  onCompletePost={(data) => onCompletePost(data)}
                />
              </div>
              <input
                type="text"
                name="baseAddress"
                value={addressInfo.baseAddress}
                onChange={onChangeAddressForm}
                placeholder="기본주소 *"
              />
              <input
                type="text"
                name="detailAddress"
                value={addressInfo.detailAddress}
                onChange={onChangeAddressForm}
                placeholder="상세주소 *"
              />
              <input
                type="text"
                name="contactInfo1"
                value={addressInfo.contactInfo1}
                onChange={onChangeAddressForm}
                placeholder="연락처1 *"
              />
              <input
                type="text"
                name="contactInfo2"
                value={addressInfo.contactInfo2}
                onChange={onChangeAddressForm}
                placeholder="연락처2"
              />
              <div className="delivery-memo">
                <p>배송 메모</p>
                <select
                  name="shippingMemo"
                  onChange={(e) => {
                    const { name, value } = e.target;
                    console.log(name);
                    console.log(value);
                    setAddressInfo({
                      ...addressInfo,
                      [name]: value,
                    });
                  }}
                >
                  <option value="배송 메모를 선택해 주세요.">
                    배송 메모를 선택해 주세요.
                  </option>
                  <option value="배송 전 연락 바랍니다.">
                    배송 전 연락 바랍니다.
                  </option>
                  <option value="부재 시 경비실에 맡겨주세요.">
                    부재 시 경비실에 맡겨주세요.
                  </option>
                  <option value="부재 시 문 앞에 놓아주세요.">
                    부재 시 문 앞에 놓아주세요.
                  </option>
                  <option value="부재 시 전화 또는 문자 남겨주세요.">
                    부재 시 전화 또는 문자 남겨주세요.
                  </option>
                  <option value="직접 입력">직접 입력</option>
                </select>
              </div>
              <div className="save-delivery">
                <CheckBox
                  lableText={"기본 배송지로 저장합니다."}
                  isArrow={false}
                  inputName={"isDefaultAddress"}
                  value={addressInfo.defaultAddress}
                  link=""
                  handler={() => {
                    setAddressInfo({
                      ...addressInfo,
                      defaultAddress: !addressInfo.defaultAddress,
                    });
                  }}
                />
              </div>
            </div>
          </section>
          <section className="submit-container">
            {isModify ? (
              <button type="submit" onClick={modifyAddress}>
                수정하기
              </button>
            ) : (
              <button type="submit" onClick={submitNewAddress}>
                등록하기
              </button>
            )}
          </section>
        </div>
      )}
    </>
  );
}
