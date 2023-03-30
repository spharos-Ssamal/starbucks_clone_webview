export interface PrePurchaseProductInfo {
  id: number;
  name: string;
  thumbnail: string;
  count: number;
  price: number;
}

export const initPaymentInfo = {
  paymentMethod: "",
  shippingFee: 0,
  amountOfProductPrice: 0,
  amountOfDiscountPrice: 0,
  amountOfGiftcardPrice: 0,
  amountOfTotalPrice: 0,
};

export interface PaymentInfo {
  paymentMethod: string;
  shippingFee: number;
  amountOfProductPrice: number;
  amountOfDiscountPrice: number;
  amountOfGiftcardPrice: number;
  amountOfTotalPrice: number;
}

export interface ProductBePurchased {
  id: number;
  count: number;
}

export interface PaymentConfirmReq {
  userId: string;
  purchasedList: ProductBePurchased[];
  paymentMethod: string;
  addressId?: number;
  shippingFee: number;
  amountOfProductPrice: number;
  amountOfDiscount: number;
  amountOfTotalPrice: number;
}
