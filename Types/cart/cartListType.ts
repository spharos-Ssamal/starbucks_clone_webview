export interface cartType {
  cartListFreeze: cartListType[];
  cartList: cartListType[];
}

export interface cartListType {
  id: number;
  frozen: boolean;
  count: number;
  check: boolean;
  product: cartProductType;
}

export interface cartProductType {
  id: number;
  name: string;
  price: number;
  description: string;
  thumbnail: string;
}
