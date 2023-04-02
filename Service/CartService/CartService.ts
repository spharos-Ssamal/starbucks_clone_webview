import { CustomAxios } from "@/constants/Apis/Axios/CustomAxios";
import {
  REQUEST_CART_GET,
  REQUEST_CART_GET_ALL,
  REQUEST_CART_INSERT,
  REQUEST_CART_CONFIRM,
  REQUEST_CART_DELETE,
  REQUEST_CART_UPDATE,
  REQUEST_CART_AMOUNT,
  REQUEST_CART_GET_ITEMS,
} from "@/constants/Apis/URL";

export async function RequestCartGet(userId: string) {
  return await CustomAxios.get(REQUEST_CART_GET_ALL, {
    params: {
      userId: userId,
    },
  }).then((res) => res.data);
}

export async function RequestGetCartItem(cartId: number) {
  return await CustomAxios.get(REQUEST_CART_GET, {
    params: {
      cartId: cartId,
    },
  }).then((res) => res.data);
}

export async function RequestGetCartItems(cartId: number[]) {
  return await CustomAxios.get(REQUEST_CART_GET_ITEMS, {
    params: {
      cartId: cartId,
    },
  }).then((res) => res.data);
}

export async function RequestCartInsert(req: CreateCartItem) {
  return await CustomAxios.post(REQUEST_CART_INSERT, req).then(
    (res) => res.data
  );
}

export async function RequestGetCartAmount(userId: string) {
  return await CustomAxios.get(REQUEST_CART_AMOUNT, {
    params: {
      userId: userId,
    },
  }).then((res) => res.data);
}

export async function RequestCartConfirm(req: ConfirmPurchase) {
  return await CustomAxios.post(REQUEST_CART_CONFIRM, req).then(
    (res) => res.data
  );
}

export async function RequestCartDelete(cartId: number) {
  return await CustomAxios.put(REQUEST_CART_DELETE, {
    cartId: cartId,
  }).then((res) => res.data);
}

export async function RequestCartUpdate(req: UpdateCartItem) {
  return await CustomAxios.put(REQUEST_CART_UPDATE, req).then(
    (res) => res.data
  );
}
