import { PaymentConfirmReq } from "@/Types/payment/types";
import { CustomAxios } from "@/constants/Apis/Axios/CustomAxios";
import { REQUEST_PAY_CONFIRM } from "@/constants/Apis/URL";

export async function RequestPaymentConfirm(req: PaymentConfirmReq) {
  return await CustomAxios.post(REQUEST_PAY_CONFIRM, req).then(
    (res) => res.data
  );
}
