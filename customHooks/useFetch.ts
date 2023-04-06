import Config from "@/configs/config.export";
import { CustomAxios } from "@/constants/Apis/Axios/CustomAxios";

export const useFetch = async (url: string) => {
  const { baseUrl } = Config();

  const res = await CustomAxios.get(baseUrl + url);
  return res;
};
