import ShareModal from '@/components/modals/ShareModal';
import Config from '@/configs/config.export';
import { productDataType } from '@/Types/starbucksTypes';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import rightArrow from '@/public/assets/images/contents/arrow_right.png';
import RecommandMdList from '@/components/widgets/RecommandMdList';
import { BaseRes, eventData } from '@/constants/Apis/Types/ResponseType';
import EventMdList from '@/components/widgets/EventMdList';
import ClickBuyModal from '@/components/modals/ClickBuyModal';
import { productResponseDetailImages } from '@/Types/ProductRequest/Response';

export default function Product() {
  
  const [ productData, setProductData ] = useState<productDataType>();
  const [ productImages, setProductImages ]  = useState<productResponseDetailImages[]>([]);
  const [ recommandData, setRecommandData] = useState<eventData>({} as eventData);
  const [ viewByOthersData, setViewByOthersData ] = useState<eventData>({} as eventData);

  const { query } = useRouter();
  const { baseUrl } = Config();

  const [ open, setOpen ] = useState(false);
  const [ share, setShare ] = useState(false);

  console.log('query',query)
  
  useEffect(() => {
    axios.get(`${baseUrl}/api/v1/product/read?productId=${query.productId}`)
    .then(res => {
      console.log("productdata",res.data)
      setProductData(res.data.data.productInfo);
      setProductImages(res.data.data.imageList)
    })
    .catch(err=> {
      console.log(err)
    })
  },[])

  useEffect(() => {
    axios.get(`${baseUrl}/api/v1/recommend/active`)
    .then(res => {
      console.log(res)
      let rndNumber = Math.floor(Math.random() * res.data.data.length);
      setRecommandData(res.data.data[rndNumber]);
    })
    .catch(err=> {
      console.log(err)
    })
    axios.get(`${baseUrl}/api/v1/event/active`)
    .then(res => {
      console.log(res)
      let rndNumber = Math.floor(Math.random() * res.data.data.length);
      setViewByOthersData(res.data.data[rndNumber]);
    })
    .catch(err=> {
      console.log(err)
    })
  },[baseUrl])


  // function up() {
  //   setQtyCnt(qtyCnt + 1);
  // }
  // function down() {
  //   const minus = qtyCnt - 1;
  //   qtyCnt > 0 ? minus : 0
  // }

  // const useScroll = () => {
  //   const [ state, setState ] = useState({
  //     x: 0,
  //     y: 0
  //   });
  //   const onScroll = () => {
  //     setState({y: window.scrollY, x:window.scrollX});
  //     console.log(window.scrollY)
  //   }
  //   useEffect(() => {
  //     window.addEventListener("scroll", onScroll);
  //     return () => window.removeEventListener("scroll", onScroll);
  //   }, [])  
  //   return state;
  // }


  // const {y} = useScroll();

  return (
    <>
    {share && <ShareModal />}
    {
      productData &&
      <>
      {/* <ClickBuyModal /> */}
      <section id="product-top">
        <div className="product-img">
          <img 
            src={productData.thumbnail}
            alt={productData.description}
          />
        </div>
        <div className="product-info">
          <div className="product-name">
            <div>
              <p>{productData.name}<span className="is-new">New</span></p>
            </div>
            <div className="share-icon" onClick={()=>setShare(!share)}>
              <img src="@/public/assets/images/icons/user.svg" alt=""/>
            </div>
          </div>
          <div className="description">
            {productData.description}
          </div>
          <div className="price">
            {productData.price.toLocaleString()}원
          </div>
        </div>
        <div className="notice">
        </div>
      </section>
      <section id="product-detail">
        <p>상품 정보</p>
        {
          productImages && productImages.map( (item:productResponseDetailImages) => (
            <img key={item.id} src={item.imageUrl} alt=""/>
          ))
        }
      </section>
      <RecommandMdList 
        data={recommandData}
      />
      <EventMdList 
        title = "다른 고객이 함께 본 상품"
        data={viewByOthersData}
      />
     
      <section className="detail-info">
        <div className="nav-button">
          <button>
            <div className="nav-container">
              <div>
                <p className="title">이용조건 및 배송안내</p>
              </div>
              <img src="/assets/images/icons/contents/right-arrow.png" alt=""/>
            </div>
          </button>
        </div>
        <div className="nav-button">
          <button>
            <div className="nav-container">
              <div>
                <p className="title">상품제공정보고시</p>
              </div>
              <img src="/assets/images/icons/contents/right-arrow.png" alt=""/>
            </div>
          </button>
        </div>
        <div className="nav-button">
          <button>
            <div className="nav-container">
              <div>
                <p className="title">교환/반품 안내</p>
              </div>
              <img src="/assets/images/icons/contents/right-arrow.png" alt=""/>
            </div>
          </button>
        </div>
        <div className="nav-button">
          <button>
            <div className="nav-container">
              <div>
                <p className="title">취소/환불 안내</p>
              </div>
              <img src="/assets/images/icons/contents/right-arrow.png" alt=""/>
            </div>
          </button>
        </div>
      </section>
      <section id="purchase-button">
        <div className="toggle-icon"></div>
        <button onClick={()=>setOpen(!open)}>구매하기</button>
      </section>
    </>
    }
    </>
  );
}