import { CustomAxios } from "@/constants/Apis/Axios/CustomAxios";
import {
  REQUEST_PAY_HISTORY,
  REQUEST_PRODUCT_PREPURCHASE,
} from "@/constants/Apis/URL";

export async function getPrePurchaseProducts(productId: number[]) {
  return await CustomAxios.get(REQUEST_PRODUCT_PREPURCHASE, {
    params: {
      productIds: productId,
    },
  }).then((res) => res.data);
}
