import axios, { AxiosError } from "axios";
import { BaseRes } from "../Types/ResponseType";
import {
  CODE_EXPIRED_TOKEN,
  CODE_INVALID_TOKEN,
  CODE_REFRESH_TOKEN_EXPIRED,
} from "@/constants/enums/ErrorCode";
import { RequestReissueToken } from "@/Service/AuthService/AuthService";
import Config from "@/configs/config.export";
import qs from "qs";

const { baseUrl } = Config();
export const CustomAxios = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  paramsSerializer: {
    serialize: (params) => {
      return qs.stringify(params, { arrayFormat: "repeat" });
    },
  },
});

CustomAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  if (config.headers !== undefined) {
    if (token !== null) {
      config.headers.Authorization = "Bearer " + token;
    }
  }

  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "application/form-data";
  } else {
    config.headers["Content-Type"] = "application/json";
  }
  return config;
});

CustomAxios.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const responseData: BaseRes | any = error.response?.data;
    if (responseData.status === "UNAUTHORIZED") {
      if (responseData.data === CODE_EXPIRED_TOKEN) {
        const originRequest = error.config;
        await RequestReissueToken()
          .then(() => {
            if (originRequest !== undefined) {
              const result = CustomAxios.request(originRequest);
              return Promise.resolve(result);
            }
          })
          .catch(() => {
            //TODO
            //자동 로그아웃 처리
            localStorage.removeItem("ACCESS_TOKEN");
          });
      }
    } else if (
      responseData.status === "FORBIDDEN" ||
      responseData.status === "BAD_REQUEST"
    ) {
      if (
        responseData.data === CODE_REFRESH_TOKEN_EXPIRED ||
        responseData.data === CODE_INVALID_TOKEN
      ) {
        //TODO
        //자동 로그아웃 처리
        localStorage.removeItem("ACCESS_TOKEN");
      }
    }

    return responseData;
  }
);
