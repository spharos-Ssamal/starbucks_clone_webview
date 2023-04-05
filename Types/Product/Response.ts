import { ProductInfo } from "./Request";

export interface productResponseDetailImages {
  id: number;
  imageUrl: string;
  width: number;
  height: number;
}

export interface CategoryAggregationRes {
  categoryId: number;
  categoryName: string;
  count?: number;
}

export interface SearchProductRes {
  content: ProductInfo[];
  pageNo: number;
  totalPages: number;
  totalElements: number;
  last: boolean;
}
