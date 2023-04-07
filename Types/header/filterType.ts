export interface filterMenuType {
  id: Number;
  name: String;
  categoryId: Number;
  subCategory: [filterSubCategoryType]  
}

export interface filterSubCategoryType {
  id: Number;
  name: String;
  menu: [filterCategorySubType]
} 

export interface filterCategorySubType {
  id: Number;
  name: String;
  subCategoryId: Number;
}

export interface smallCategoryType {
  name: String;
  bigCategory: String;
}

export interface sizeType {
  name: String;
}

export interface filterType {
  name: String,
  value: String,
  checked: Boolean
}

export interface productType {
  productId: Number,
  bigCategory: String,
  smallCategory: String,
  event: String,
  tag: String,
  productName: String,
  imgUrl: String,
  price: Number,
  size: String,
  amount: Number,
  isNew: Boolean,
  isBest: Boolean,
}