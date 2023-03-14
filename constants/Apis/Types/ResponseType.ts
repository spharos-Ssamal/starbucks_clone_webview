export interface BaseRes<T = any> {
  status: string;
  data: T;
  message: string;
}


export interface eventData {
  id: number,
  name: string
}

export interface recommandData {
  categoryName: string,
  products: {
    description: string,
    name: string,
    price: number,
    size: string,
    thumbnail: string,
    season: string,
  }
}