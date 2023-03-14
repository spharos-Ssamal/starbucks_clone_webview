export interface headerMenu {
  id: number;
  name: string;
  link: string;
}

export interface loginData {
  email: string;
  password: string;
}

export interface productDataType {
  id: string,
  name: string,
  price: number,
  description: string,
  thumbnail: string,
  size: string,
  season: string,
  imgUrl_1: string,
  imgUrl_2?: string,
  imgUrl_3?: string
}