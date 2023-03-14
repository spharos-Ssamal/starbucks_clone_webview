import { BaseRes } from "@/constants/Apis/Types/ResponseType";
import { ProductInfo, ProductInfoRes } from "./ProductTypes";

export interface RecommendRes extends BaseRes {
  data: {
    [key: string]: ProductInfoRes[];
  };
}
