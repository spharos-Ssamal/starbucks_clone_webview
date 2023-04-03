export interface MenuDataType {
  id: number;
  name: string;
  key: string;
}

export interface PriceDataType {
  id: number;
  name: string;
  startValue: number;
  endValue: number;
}

export interface FilterParams {
  category: number;
  subCategories: number[];
  seasons: number[];
  productSize: number[];
  priceValue: {
    priceStart: number;
    priceEnd: number;
  };
  page: number;
  size: number;
  sort: string;
}

export interface filterDataType {
  id: number;
  key: string;
  value: string;
  isCheck: boolean;
}

export interface headerMenuType {
  id: number;
  name: string;
  link: string;
}
