interface CreateCartItem {
  userId: string;
  productId: number;
  count: number;
}

interface UpdateCartItem {
  cartId: number;
  count: number;
}

interface DeleteCartItem {
  cartId: number;
}

interface ConfirmPurchase {
  cartItemids: number[];
}
