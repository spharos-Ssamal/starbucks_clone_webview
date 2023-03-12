export interface headerMenu {
  id: number;
  name: string;
  link: string;
}

export interface loginData {
  email: string;
  password: string;
}

export interface cakeType {
  id: number,
  name: string,
  price: number,
  description: string,
  maxPurchase: number,
  thumbnail: string,
  imgUrl_1: string,
  imgUrl_2: string,
  imgUrl_3: string,
  new: boolean,
  best: boolean,
}

//이벤트 하나에 대한 인터페이스 다시 만들것!
export interface eventData {
  id: number,
  titleShort?: string,
  titleLong?: string,
  link? : number,
  imgUrl?: string,
  extraImageUrl?: string,
  onOff: boolean
}
//데이터를 받는 인터페이스를 (백으로부터) 만들어야한다. 

export interface SingleProdInfoType {
  
}

export interface storeRcmdMenuType {
  id: number,
  name: string,
  imgUrl: string,
  link: string,
}

//API V1

export interface apiV1productInfoType {
  productId: number,
  thumbnail: string,
  price: number,
  count: number 
 }
 
 export interface apiV1ProductSearchType {
   category: number,
   subCategories: number,
   seasons: string,
   productSize: string,
   pageable: boolean
 }
 
 export interface apiV1CartType {
   cartId: number,
   userId : string,
   
 }