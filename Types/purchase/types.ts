export interface PurchaseProductInfo {
  productId: number;
  productName: string;
  thumbnail: string;
  price: number;
  count: number;
}

export interface PurchaseHistory {
  historyId: string;
  date: string;
  productInfoList: PurchaseProductInfo[];
}

export interface GetUsersPurchaseHistoryRes {
  histories: PurchaseHistory[];
}
