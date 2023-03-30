import { CustomAxios } from "@/constants/Apis/Axios/CustomAxios";
import {
  REQUEST_PAY_HISTORY,
  REQUEST_PRODUCT_PREPURCHASE,
} from "@/constants/Apis/URL";
import qs from "qs";

export async function getUsersPurchaseHistory(
  userId: string,
  startDate: string,
  endDate: string
) {
  return await CustomAxios.get(REQUEST_PAY_HISTORY, {
    params: {
      userId: userId,
      startDate: startDate,
      endDate: endDate,
    },
  }).then((res) => res.data);
}

export async function getPrePurchaseProducts(productId: number[]) {
  return await CustomAxios.get(REQUEST_PRODUCT_PREPURCHASE, {
    params: {
      productIds: productId,
    },
  }).then((res) => res.data);
}
