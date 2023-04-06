import { CustomAxios } from "@/constants/Apis/Axios/CustomAxios";
import {
  REQUEST_CONFIRM_EMAIL,
  REQUEST_GET_USER_INFO,
  REQUEST_VERIFY_EMAIL,
} from "@/constants/Apis/URL";

export async function RequestConfirmEmail(email: string) {
  return await CustomAxios.get(REQUEST_CONFIRM_EMAIL, {
    params: {
      email: email,
    },
  }).then((res) => res.data);
}

export async function RequestVerifyEmail(email: string, verifyCode: string) {
  return await CustomAxios.post(REQUEST_VERIFY_EMAIL, {
    email: email,
    verifyCode: verifyCode,
  }).then((res) => res.data);
}

export async function RequestGetUserInfo(userId: string) {
  return await CustomAxios.get(REQUEST_GET_USER_INFO, {
    params: {
      userId: userId,
    },
  }).then((res) => res.data);
}
