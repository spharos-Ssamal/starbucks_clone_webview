import { CustomAxios } from "@/constants/Apis/Axios/CustomAxios";
import {
  REQUEST_CONFIRM_EMAIL,
  REQUEST_LOGIN,
  REQUEST_LOGOUT,
  REQUEST_REGISTER,
  REQUEST_REISSUE_JWT_TOKEN,
  REQUEST_VERIFY_EMAIL,
} from "@/constants/Apis/URL";
import {
  LoginReq,
  RegisterReq,
  VeriftyEmailReq,
} from "@/Types/UserRequest/Request";
import { ReIssueTokenRes } from "@/Types/UserRequest/Response";
import Swal from "sweetalert2";

export async function RequestLogin(req: LoginReq) {
  return await CustomAxios.post(REQUEST_LOGIN, req).then((res) => res.data);
}

export async function RequestLogout() {
  return await CustomAxios.get(REQUEST_LOGOUT).then((res) => res.data);
}

export async function RequestReissueToken() {
  return await CustomAxios.post(REQUEST_REISSUE_JWT_TOKEN)
    .then((res) => {
      const response: ReIssueTokenRes = res.data;
      const newAccessToken = response.data.accessToken;
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.setItem("ACCESS_TOKEN", newAccessToken);
      return Promise.resolve();
    })
    .catch((ex) => {
      console.log(ex);
      Swal.fire({
        icon: "error",
        title: "에러!",
        text: "서버와의 연결이 끊어졌습니다.",
      });
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("userInfo");
      location.reload();
      return Promise.reject();
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
