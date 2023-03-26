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

export interface productInfo {
  id: number;
  name: string;
  price: number;
  description: string;
  thumbnail: string;
}

export interface eventProductRes {
  eventName: string;
  products: productInfo;
}

export interface getEventRes {
  detailImage: string;
  eventProductRes: eventProductRes[];
}
