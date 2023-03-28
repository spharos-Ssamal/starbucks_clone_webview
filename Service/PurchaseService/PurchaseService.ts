import { CustomAxios } from "@/constants/Apis/Axios/CustomAxios";
import { REQUEST_PAY_HISTORY } from "@/constants/Apis/URL";

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
