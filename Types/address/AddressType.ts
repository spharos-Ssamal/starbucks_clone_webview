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

export interface AddAddressReq {
  userId: string;
  addressInfo: AddressInfo;
}

export interface EditAddressReq {
  userId: string;
  addressInfo: AddressDataType;
}
