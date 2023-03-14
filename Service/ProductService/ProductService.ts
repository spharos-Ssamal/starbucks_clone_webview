import { CustomAxios } from "@/constants/Apis/Axios/CustomAxios";
import { REQUEST_PRODUCT_RECOMMEND } from "@/constants/Apis/URL";
import { RecommendRes } from "@/Types/Products/Response";

export async function RequestProductRecommend() {
  const result: RecommendRes = await CustomAxios.get(
    REQUEST_PRODUCT_RECOMMEND
  ).then((res) => res.data);
  return result;
}
