export interface CreateCartItem {
  userId: string;
  productId: number;
  count: number;
}

export interface UpdateCartItem {
  cartId: number;
  count: number;
}

export interface DeleteCartItem {
  cartId: number;
}

export interface ConfirmPurchase {
  cartItemids: number[];
}
