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

/* 
로그아웃 시 쿠키에 전달 된 리프레쉬 토큰을 파기하는 로직이 돌고, 
Access Token이 만약 유효하다면 Redis에 Black List로 등록하는 로직이 돕니다. 
쿠키에 토큰이 없거나 엑세스 토큰이 유효기간이 지나버렸다면 그냥 서버에서 무시해버립니다. (자동 로그아웃)
*/
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
