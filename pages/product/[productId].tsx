import Config from '@/configs/config.export';
import { productDataType } from '@/Types/starbucksTypes';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image'
import { getImageSize } from 'react-image-size';
import RecommandMdList from '@/components/widgets/RecommandMdList';
import { eventData } from '@/constants/Apis/Types/ResponseType';
import EventMdList from '@/components/widgets/EventMdList';
import { productResponseDetailImages } from '@/Types/ProductRequest/Response';
import { imageType } from '@/Types/image/imageType';

export default function Product() {
  
  const [ productData, setProductData ] = useState<productDataType>();
  const [ productImages, setProductImages ]  = useState<productResponseDetailImages[]>([]);
  const [ recommandData, setRecommandData] = useState<eventData>({} as eventData);
  const [ viewByOthersData, setViewByOthersData ] = useState<eventData>({} as eventData);
  const [importImgSize, setImportImgSize] = useState<imageType>(
    {
      width: 0,
      height: 0
    }
  )

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
      console.log(getImageSize(res.data.data.productInfo.thumbnail))
      getImageSize(res.data.data.productInfo.thumbnail).then((size) => {
        console.log(size)
        setImportImgSize({
          width: size.width,
          height: size.height
        })
      })
      let images:productResponseDetailImages[] = []; 
      res.data.data.imageList.map(async (item:productResponseDetailImages) => {
        const { width, height } = await getImageSize(item.imageUrl);
        images.push({
          id: item.id,
          imageUrl: item.imageUrl,
          width: width,
          height: height
        })
      })
      setProductImages(images)
    })
    .catch(err=> {
      console.log(err)
    })
  },[query.productId])

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
    {
      productData &&
      <>
      <section id="product-top">
        <div className="product-img">
          <Image 
            src={productData.thumbnail}
            alt={productData.description}
            width={importImgSize.width}
            height={importImgSize.height}
          />
        </div>
        <div className="product-info">
          <div className="product-name">
            <div>
              <p>{productData.name}<span className="is-new">New</span></p>
            </div>
            <div className="share-icon" onClick={()=>setShare(!share)}>
              <Image 
                src="/public/assets/images/icons/user.svg" 
                alt="share-icon"
                width={20}
                height={20}
              />
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
          productImages && productImages.map( (item:productResponseDetailImages) => {
            
            (getImageSize(item.imageUrl).then((size) => { 
              console.log(size)

            }))

            return (
              <Image 
                key={item.id} 
                src={item.imageUrl} 
                width={item.width}
                height={item.height}
                alt=""
            />
            )

          })
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
              <Image 
                src="/assets/images/icons/contents/right-arrow.png" 
                alt="right-arrow"
                width={20}
                height={20}
              />
            </div>
          </button>
        </div>
        <div className="nav-button">
          <button>
            <div className="nav-container">
              <div>
                <p className="title">상품제공정보고시</p>
              </div>
              <Image 
                src="/assets/images/icons/contents/right-arrow.png" 
                alt="right-arrow"
                width={20}
                height={20}
              />
            </div>
          </button>
        </div>
        <div className="nav-button">
          <button>
            <div className="nav-container">
              <div>
                <p className="title">교환/반품 안내</p>
              </div>
              <Image 
                src="/assets/images/icons/contents/right-arrow.png" 
                alt="right-arrow"
                width={20}
                height={20}
              />
            </div>
          </button>
        </div>
        <div className="nav-button">
          <button>
            <div className="nav-container">
              <div>
                <p className="title">취소/환불 안내</p>
              </div>
              <Image 
                src="/assets/images/icons/contents/right-arrow.png" 
                alt="right-arrow"
                width={20}
                height={20}
              />
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