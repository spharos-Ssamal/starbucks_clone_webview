import { CustomAxios } from "@/constants/Apis/Axios/CustomAxios";
import {
  REQUEST_CATEGORY_AGGREGATION_NAME,
  REQUEST_CATEGORY_AGGREGATION_HASH_TAG,
  REQUEST_PRODUCT,
  REQUEST_PRODUCT_SEARCH,
  REQUEST_PRODUCT_HASHTAG,
} from "@/constants/Apis/URL";

export async function RequestCategoryAggregationName(productName: string) {
  return await CustomAxios.get(REQUEST_CATEGORY_AGGREGATION_NAME, {
    params: {
      productName: productName,
    },
  }).then((res) => res.data);
}

export async function RequestCategoryAggregationHashTag(hashtag: string) {
  return await CustomAxios.get(REQUEST_CATEGORY_AGGREGATION_HASH_TAG, {
    params: {
      hashtag: hashtag,
    },
  }).then((res) => res.data);
}

export async function RequestProduct(req: string) {
  return await CustomAxios.get(REQUEST_PRODUCT + req).then((res) => res.data);
}

export async function RequestProductUsingName(req: string) {
  return await CustomAxios.get(REQUEST_PRODUCT_SEARCH + req).then(
    (res) => res.data
  );
}

export async function RequestProductUsingHashtag(req: string) {
  return await CustomAxios.get(REQUEST_PRODUCT_HASHTAG + req).then(
    (res) => res.data
  );
}
