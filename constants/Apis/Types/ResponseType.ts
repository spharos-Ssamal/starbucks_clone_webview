export interface BaseRes<T = any> {
  status: string;
  data: T;
  message: string;
}

export interface eventData {
  id: number;
  name: string;
}

export interface bannerInfo {
  bannerImage: string;
  eventId?: number;
  recommendId?: number;
  regTime: string;
  width: number;
  height: number;
}

export interface recommandData {
  categoryName: string;
  products: {
    id: number;
    description: string;
    name: string;
    price: number;
    size: string;
    thumbnail: string;
    season: string;
    width: number;
    height: number;
  };
}
