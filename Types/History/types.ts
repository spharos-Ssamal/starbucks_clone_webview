import { ProductInfo } from "../Product/Request";

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
  baseAddress: string;
  detailAddress: string;
  message: string;
  regTime: string;
  updateTime: string;
  purchasePrice: number;
  shippingFee: number;
  discountPrice: number;
  totalPrice: number;
  canceled: boolean;
}
