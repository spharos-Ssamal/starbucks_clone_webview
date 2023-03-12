// import searchIcon from '/assets/images/icons/search.svg';
// import cartIcon from '/assets/images/icons/shopping-cart.svg';
// import userIcon from '/assets/images/icons/user.svg';

export const headerNavMenus = [
  {
    id: 1,
    name: '메인',
    link: '/',
  },
  {
    id: 2,
    name: '기획전',
    link: '/event',
  },
  {
    id: 3,
    name: '베스트',
    link: '/best',
  },
  {
    id: 4,
    name: '마이페이지',
    link: '/signup',
  }
]

export const headerIcons = [
  {
    id: 1,
    name: 'search',
    link: '/search',
    icon: '/assets/images/icons/search.svg',
  },
  {
    id: 2,
    name: 'cart',
    link: '/cart',
    icon: '/assets/images/icons/shopping-cart.svg',
  },
  {
    id: 3,
    name: 'mypage',
    link: '/signup',
    icon: '/assets/images/icons/user.svg',
  }
]

export const mainEventList = [
  {
    id : 1,
    titleShort : '케이크',
    titleLong : '스타벅스 케이크를 선물하세요(케잌임티)',
    imgUrl : '/assets/images/event/event_cake.jpg',
    onOff : true
  },
  {
    id : 2,
    titleShort : '4+1 기획전',
    titleLong : '4개 구매 시 1개 증정',
    imgUrl : '../publish_data/assets/images/event/star/01.jpg',
    onOff : true
  },
  {
    id : 3,
    titleShort : '바리스타 춘식',
    titleLong : '',
    imgUrl : '/assets/images/event/event_choonsik.png',
    onOff : true
  },
  {
    id : 4,
    titleShort : '핸디 데스크',
    titleLong : '',
    imgUrl : '/assets/images/event/event_desk.png',
    onOff : true
  }
]

export const storeRcmdMenu = [
  {
    id : 1,
    name: '케이크',
    imgUrl: 'assets/images/products/category/category-cake.jpg',
    link : '../'
  },
  {
    id : 2,
    name: '텀블러/보온병',
    imgUrl: 'assets/images/products/category/category-tumblr.jpg',
    link : '../'
  },
  {
    id : 3,
    name: '머그/컵',
    imgUrl: 'assets/images/products/category/category-cup.jpg',
    link : '../'
  },
  {
    id : 4,
    name: '라이프스타일',
    imgUrl: 'assets/images/products/category/category-lifestyle.jpg',
    link : '../'
  },
  {
    id : 5,
    name: '티/커피용품',
    imgUrl: 'assets/images/products/category/category-tea.jpg',
    link : '../'
  },
  {
    id : 6,
    name: '세트',
    imgUrl: 'assets/images/products/category/category-set.jpg',
    link : '../'
  },
]

export const cakeStaticData = [
  {
    id: 4,
    name: '부드러운 고구마 생크림 케이크',
    price: 33000,
    description: '부드럽고 달콤한 국내산 고구마와 부드러운 생크림이 푹신한 스펀지 시트와 함꼐 어우러진 케이크입니다.',
    thumbnail: 'https://shop-phinf.pstatic.net/20221230_87/1672371248920KrduT_JPEG/73507032581228289_908311394.jpg?type=m510',
    imgUrl_1: 'https://shop-phinf.pstatic.net/20221206_73/1670303434779yXg1q_JPEG/%EB%B6%80%EB%93%9C%EB%9F%AC%EC%9A%B4-%EA%B3%A0%EA%B5%AC%EB%A7%88-%EC%83%9D%ED%81%AC%EB%A6%BC-%EC%BC%80%EC%9D%B4%ED%81%AC_%EB%94%94%EC%9E%90%EC%9D%B8_02.jpg?type=w860',
    imgUrl_2: 'https://shop-phinf.pstatic.net/20230208_248/1675833210882C7Gqc_JPEG/%EB%B6%80%EB%93%9C%EB%9F%AC%EC%9A%B4-%EA%B3%A0%EA%B5%AC%EB%A7%88-%EC%83%9D%ED%81%AC%EB%A6%BC-%EC%BC%80%EC%9D%B4%ED%81%AC_%EB%94%94%EC%9E%90%EC%9D%B804.jpg?type=w860',
    imgUrl_3: 'https://shop-phinf.pstatic.net/20221206_160/1670303443044tIU4f_JPEG/%EB%B6%80%EB%93%9C%EB%9F%AC%EC%9A%B4-%EA%B3%A0%EA%B5%AC%EB%A7%88-%EC%83%9D%ED%81%AC%EB%A6%BC-%EC%BC%80%EC%9D%B4%ED%81%AC_%EB%94%94%EC%9E%90%EC%9D%B8_05.jpg?type=w860'
  },
  {
    id: 2,
    name: '블루베리 치즈 케이크',
    price: 36000,
    description: '진한 치즈케이크 위에 새콤달콤한 블루베리를 가득 올린 스타벅스의 시그니처 케이크입니다.',
    thumbnail: 'https://shop-phinf.pstatic.net/20221230_294/1672371457399tDq2z_JPEG/73507241105091598_1599621290.jpg?type=m510',
    imgUrl_1: 'https://shop-phinf.pstatic.net/20221206_100/1670301462347wODfp_JPEG/%EB%B8%94%EB%A3%A8%EB%B2%A0%EB%A6%AC%EC%B9%98%EC%A6%88%EC%BC%80%EC%9D%B4%ED%81%AC_%EB%94%94%EC%9E%90%EC%9D%B8_02.jpg?type=w860',
    imgUrl_2: 'https://shop-phinf.pstatic.net/20221206_234/1670301471041emGSd_JPEG/%EB%B8%94%EB%A3%A8%EB%B2%A0%EB%A6%AC%EC%B9%98%EC%A6%88%EC%BC%80%EC%9D%B4%ED%81%AC_%EB%94%94%EC%9E%90%EC%9D%B8_05.jpg?type=w860',
    imgUrl_3: 'https://shop-phinf.pstatic.net/20221221_228/1671608351104vBPCX_JPEG/FAQ_%EA%B3%B5%ED%86%B5_%ED%95%98%EB%8B%A8_1.jpg?type=w860'
  },
  {
    id: 3,
    name: '더블 초콜릿 케이크',
    price: 33000,
    description: '진한 가나슈 크림을 세 가지 맛의 케이크 시트 사이에 가득 넣은 달콤한 초콜릿 케이크입니다.',
    thumbnail: 'https://shop-phinf.pstatic.net/20221230_152/1672371405306IVKOz_JPEG/73507189011853712_324497504.jpg?type=m510',
    iimgUrl_1: 'https://shop-phinf.pstatic.net/20221206_3/1670303226130EtYPd_JPEG/%EB%8D%94%EB%B8%94%EC%B4%88%EC%BD%9C%EB%A6%BF%EC%BC%80%EC%9D%B4%ED%81%AC_%EB%94%94%EC%9E%90%EC%9D%B8_02.jpg?type=w860',
    imgUrl_2: 'https://shop-phinf.pstatic.net/20221206_140/1670303231642e5yST_JPEG/%EB%8D%94%EB%B8%94%EC%B4%88%EC%BD%9C%EB%A6%BF%EC%BC%80%EC%9D%B4%ED%81%AC_%EB%94%94%EC%9E%90%EC%9D%B8_04.jpg?type=w860',
    imgUrl_3: 'https://shop-phinf.pstatic.net/20221206_209/1670303234433uPu3N_JPEG/%EB%8D%94%EB%B8%94%EC%B4%88%EC%BD%9C%EB%A6%BF%EC%BC%80%EC%9D%B4%ED%81%AC_%EB%94%94%EC%9E%90%EC%9D%B8_05.jpg?type=w860'
  },
  {
    id: 1,
    name: '부드러운 티라미수 롤케이크',
    price: 19900,
    description: '진한 초코 롤케이크 시트에 고소한 마스카포네 크림을 듬뿍 넣은 부드럽고 달콤한 티라미수 롤케이크입니다.',
    thumbnail: 'https://shop-phinf.pstatic.net/20230215_64/1676424666767CNRjg_JPEG/77560500579518181_629284917.jpg?type=m510',
    imgUrl_1: 'https://shop-phinf.pstatic.net/20230206_265/16756474301899eqLH_JPEG/%ED%8B%B0%EB%9D%BC%EB%AF%B8%EC%88%98%EB%A1%A4%EC%BC%80%EC%9D%B4%ED%81%AC_02.jpg?type=w860',
    imgUrl_2: 'https://shop-phinf.pstatic.net/20230206_284/1675647445603oyWLV_JPEG/%ED%8B%B0%EB%9D%BC%EB%AF%B8%EC%88%98%EB%A1%A4%EC%BC%80%EC%9D%B4%ED%81%AC_04.jpg?type=w860',
    imgUrl_3: 'https://shop-phinf.pstatic.net/20230206_195/1675647448478yIgMb_JPEG/%ED%8B%B0%EB%9D%BC%EB%AF%B8%EC%88%98%EB%A1%A4%EC%BC%80%EC%9D%B4%ED%81%AC_05.jpg?type=w860'
  },
  {
    id: 5,
    name: '별의 별 케이크',
    price: 25000,
    description: '네 가지 맛의 조각 케이크를 다채롭게 즐길 수 있는 케이크 세트입니다.',
    thumbnail: 'https://shop-phinf.pstatic.net/20230215_274/1676424690223Q4bek_JPEG/77560524030735209_1274866820.jpg?type=m510',
    imgUrl_1: 'https://shop-phinf.pstatic.net/20230206_193/1675647375252StWaV_JPEG/%EB%B3%84%EC%9D%98%EB%B3%84%EC%BC%80%EC%9D%B4%ED%81%AC_02.jpg?type=w860',
    imgUrl_2: 'https://shop-phinf.pstatic.net/20230206_10/1675647395594ygalQ_JPEG/%EB%B3%84%EC%9D%98%EB%B3%84%EC%BC%80%EC%9D%B4%ED%81%AC_04.jpg?type=w860',
    imgUrl_3: 'https://shop-phinf.pstatic.net/20230208_115/1675845015060c3s0c_JPEG/%EB%B6%80%EB%93%9C%EB%9F%AC%EC%9A%B4-%EA%B3%A0%EA%B5%AC%EB%A7%88-%EC%83%9D%ED%81%AC%EB%A6%BC-%EC%BC%80%EC%9D%B4%ED%81%AC_%EB%94%94%EC%9E%90%EC%9D%B8_07-1.jpg?type=w860'
  },
]