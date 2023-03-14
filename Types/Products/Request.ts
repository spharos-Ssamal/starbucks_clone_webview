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
