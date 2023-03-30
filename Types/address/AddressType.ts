export interface AddressDataType {
  id?: number;
  alias: string;
  recipient: string;
  zipCode?: number;
  baseAddress: string;
  detailAddress: string;
  contactInfo1: string;
  contactInfo2?: string;
  shippingMemo: string;
  defaultAddress: boolean;
}

export interface AddressInfo {
  alias: string;
  recipient: string;
  zipCode?: number;
  baseAddress: string;
  detailAddress: string;
  contactInfo1: string;
  contactInfo2?: string;
  shippingMemo: string;
  defaultAddress: boolean;
}
export const initShippingAddressInfo = {
  id: -1,
  recipient: "",
  alias: "",
  zipCode: -1,
  baseAddress: "",
  detailAddress: "",
  contactInfo1: "",
  defaultAddress: false,
};
export interface ShippingAddressInfo {
  id?: number;
  recipient: string;
  alias: string;
  zipCode?: number;
  baseAddress: string;
  detailAddress: string;
  contactInfo1: string;
  defaultAddress: boolean;
}

export interface AddAddressReq {
  userId: string;
  addressInfo: AddressInfo;
}

export interface EditAddressReq {
  userId: string;
  addressInfo: AddressDataType;
}
