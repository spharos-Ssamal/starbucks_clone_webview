import { ProductInfo } from "../Product/Request";
import { AddressDataType } from "../address/AddressType";

export interface PurchasedProductInfo {
  productId: number;
  productName: string;
  thumbnail: string;
  price: number;
  count: number;
}

export interface HistoryInfo {
  purchaseHistoryId: string;
  productInfoList: PurchasedProductInfo[];
  addressInfo: AddressDataType;
  regTime: string;
  updateTime: string;
  purchasePrice: number;
  paymentMethod: string;
  shippingFee: number;
  discountPrice: number;
  totalPrice: number;
  canceled: boolean;
}
