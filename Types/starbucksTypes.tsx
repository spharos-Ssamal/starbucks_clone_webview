export interface headerMenu {
  id: number;
  name: string;
  link: string;
}

export interface loginData {
  email: string;
  password: string;
}

export interface eventData {
  id: number,
  titleShort?: string,
  titleLong?: string,
  link? : number,
  imgUrl?: string,
  extraImageUrl?: string,
  onOff: boolean
}

export interface SingleProdInfoType {
  
}

export interface storeRcmdMenuType {
  id: number,
  name: string,
  imgUrl: string,
  link: string,
}