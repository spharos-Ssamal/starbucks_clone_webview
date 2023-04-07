export interface SearchProductsReq {
  category: number;
  subCategories?: number[];
  seasons?: string[];
  productSize?: string[];
  pageable: {
    page: number;
    sort: string[];
  };
}

export interface ProductInfo {
  id: number;
  name: string;
  price: number;
  description: string;
  thumbnail: string;
}
