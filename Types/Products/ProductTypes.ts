export interface Products {
  id: number;
  name: string;
  price: number;
  description : string;
  thumbnail: string;
  size: string;
  season : string;
  regTime: string;
}

export interface RecommendInfoRes {
  categoryName: string;
  products: Products;
}