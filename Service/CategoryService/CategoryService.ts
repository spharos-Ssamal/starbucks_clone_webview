import { CustomAxios } from "@/constants/Apis/Axios/CustomAxios";
import { REQUEST_CATEGORY_SUBCATEGORIES } from "@/constants/Apis/URL";

export async function RequestSubCategoryList(categoryId: number) {
  return await CustomAxios.get(REQUEST_CATEGORY_SUBCATEGORIES, {
    params: {
      categoryId: categoryId,
    },
  }).then((res) => res.data);
}
