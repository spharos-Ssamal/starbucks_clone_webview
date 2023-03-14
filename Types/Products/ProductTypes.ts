export interface ProductInfo {
  id: number;
  thumbnail: string;
  name: string;
  price: string;
  regTime: Date;
  size: string;
  season: string;
}

export interface RecommendInfoRes {
  categoryName: string;
  products: ProductInfo;
}

export interface RecommendInfo {
  [key: string]: RecommendInfoRes[];
}
