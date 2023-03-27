import { CustomAxios } from "@/constants/Apis/Axios/CustomAxios";
import {
  REQUEST_CONFIRM_EMAIL,
  REQUEST_LOGIN,
  REQUEST_LOGOUT,
  REQUEST_REGISTER,
  REQUEST_REISSUE_TOKEN,
  REQUEST_VERIFY_EMAIL,
} from "@/constants/Apis/URL";
import {
  LoginReq,
  RegisterReq,
  VeriftyEmailReq,
} from "@/Types/UserRequest/Request";
import { ReIssueTokenRes } from "@/Types/UserRequest/Response";

export async function RequestLogin(req: LoginReq) {
  return await CustomAxios.post(REQUEST_LOGIN, req).then((res) => res.data);
}

export async function RequestLogout() {
  return await CustomAxios.get(REQUEST_LOGOUT).then((res) => res.data);
}

export async function RequestReissueToken() {
  return await CustomAxios.post(REQUEST_REISSUE_TOKEN)
    .then((res) => {
      const response: ReIssueTokenRes = res.data;
      const newAccessToken = response.data.accessToken;
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.setItem("ACCESS_TOKEN", newAccessToken);
    })
    .catch((ex) => {
      //TODO
      //자동 로그아웃 처리
    });
}

export async function RequestRegister(req: RegisterReq) {
  return await CustomAxios.post(REQUEST_REGISTER, req).then((res) => res.data);
}

export async function RequestEmailConfirm(email: string) {
  return await CustomAxios.get(REQUEST_CONFIRM_EMAIL, {
    params: {
      email: email,
    },
  }).then((res) => res.data);
}

export async function RequestEmailVerify(req: VeriftyEmailReq) {
  return await CustomAxios.post(REQUEST_VERIFY_EMAIL, req).then(
    (res) => res.data
  );
}
