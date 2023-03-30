export const categoryList = [
  {
    id: 0,
    name: "전체",
    key: "category",
  },
  {
    id: 1,
    name: "케이크",
    key: "category",
  },
  {
    id: 2,
    name: "텀블러/보온병",
    key: "category",
  },
  {
    id: 3,
    name: "머그/컵",
    key: "category",
  },
  {
    id: 4,
    name: "라이프스타일",
    key: "category",
  },
  {
    id: 5,
    name: "티/커피용품",
    key: "category",
  },
  {
    id: 6,
    name: "세트",
    categoryId: 6,
    key: "category",
  },
];

export const menuListDepth2 = [
  {
    id: 1,
    name: "케이크",
    data: [
      {
        id: 1,
        name: "롤케이크",
        key: "subCategory",
      },
      {
        id: 2,
        name: "홀케이크",
        key: "subCategory",
      },
    ],
  },
  {
    id: 2,
    name: "텀블러/보온병",
    data: [
      {
        id: 1,
        name: "플라스틱 텀블러",
        key: "subCategory",
      },
      {
        id: 2,
        name: "스텐리스 텀블러",
        key: "subCategory",
      },
      {
        id: 3,
        name: "보온병",
        key: "subCategory",
      },
      {
        id: 4,
        name: "콜드컵",
        key: "subCategory",
      },
    ],
  },
];