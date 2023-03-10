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
  titleShort?: String,
  titleLong?: String,
  link? : number,
  imageUrl?: String,
  extraImageUrl?: String,
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