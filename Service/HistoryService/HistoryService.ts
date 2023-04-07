import { CustomAxios } from "@/constants/Apis/Axios/CustomAxios";
import {
  REQUEST_PAY_HISTORY,
  REQUEST_PAY_HISTORY_DETAIL,
} from "@/constants/Apis/URL";

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

export async function getUsersPurchaseInfo(historyId: string) {
  return await CustomAxios.get(REQUEST_PAY_HISTORY_DETAIL, {
    params: {
      historyId: historyId,
    },
  }).then((res) => res.data);
}
