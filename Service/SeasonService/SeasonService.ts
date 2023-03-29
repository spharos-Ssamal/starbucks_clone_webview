import { CustomAxios } from "@/constants/Apis/Axios/CustomAxios";
import { REQUEST_SEASON_INFO } from "@/constants/Apis/URL";

export async function getSeasonInfo() {
  return await CustomAxios.get(REQUEST_SEASON_INFO).then((res) => res.data);
}
