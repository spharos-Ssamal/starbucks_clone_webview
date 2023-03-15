import askGiftOrPayModal from '@/components/modals/askGiftOrPayModal';
import ShareModal from '@/components/modals/ShareModal';
import Config from '@/configs/config.export';
import { BaseRes } from '@/constants/Apis/Types/ResponseType';
import {useFetch} from '@/customHooks/useFetch';
import { productDataType } from '@/Types/starbucksTypes';
import axios from 'axios';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useState, useEffect } from 'react';

export default function Product() {
  
  const [ prod, setProd ] = useState<productDataType>();
  const { query } = useRouter();
  const { baseUrl } = Config();

  const [ open, setOpen ] = useState(false);
  const [ share, setShare ] = useState(false);

  const [ qtyCnt, setQtyCnt ] = useState(1);
  
  useEffect(() => {
    axios.get(`${baseUrl}api/v1/product/read?productId=${query.productId}`)
    .then(res => {
      setProd(res.data.data.productInfo);
    })
    .catch(err=> {
      console.log(err)
    })
  },[query.productId])
  console.log('prod',prod);
  

  function up() {
    setQtyCnt(qtyCnt + 1);
  }
  function down() {
    const minus = qtyCnt - 1;
    qtyCnt > 0 ? minus : 0
  }

  const useScroll = () => {
    const [ state, setState ] = useState({
      x: 0,
      y: 0
    });
    const onScroll = () => {
      setState({y: window.scrollY, x:window.scrollX});
      console.log(window.scrollY)
    }
    useEffect(() => {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, [])  
    return state;
  }


  const {y} = useScroll();

  return (
    <>
    {open && <askGiftOrPayModal />}
    {share && <ShareModal />}
  <section id="product-top">
    <div className="product-img">
      <img
        src={prod?.thumbnail}
        style={{ width: y > 100 ? "50%" : "100%" }}
        alt="" />
    </div>
    <div className="product-info">
      <div className="product-name">
        <div>
          <p>{prod?.name}<span className="is-new">New</span></p>
        </div>
        <div className="share-icon" onClick={()=>setShare(!share)}>
          <img src="./assets/images/icons/user.svg" alt=""/>
        </div>
      </div>
      <div className="description">
        {prod?.description}
      </div>
      <div className="price">
        {prod?.price.toLocaleString()}원
      </div>
    </div>
    <div className="notice">
    </div>
  </section>
  <section id="product-detail">
    <p>상품 정보</p>
    <img src="./assets/images/products/product-detail.png" alt="" />
  </section>
  <section className="product-recommand">
    <p>체리블라썸 상품</p>
  </section>
  <section className="product-recommand">
    <p>다른 고객이 함께 본 상품</p>
  </section>
  <section className="detail-info">
    <div className="nav-button">
      <button>
        <div className="nav-container">
          <div>
            <p className="title">이용조건 및 배송안내</p>
          </div>
          <img src="assets/images/icons/contents/right-arrow.png" alt=""/>
        </div>
      </button>
    </div>
    <div className="nav-button">
      <button>
        <div className="nav-container">
          <div>
            <p className="title">상품제공정보고시</p>
          </div>
          <img src="assets/images/icons/contents/right-arrow.png" alt=""/>
        </div>
      </button>
    </div>
    <div className="nav-button">
      <button>
        <div className="nav-container">
          <div>
            <p className="title">교환/반품 안내</p>
          </div>
          <img src="assets/images/icons/contents/right-arrow.png" alt=""/>
        </div>
      </button>
    </div>
    <div className="nav-button">
      <button>
        <div className="nav-container">
          <div>
            <p className="title">취소/환불 안내</p>
          </div>
          <img src="assets/images/icons/contents/right-arrow.png" alt=""/>
        </div>
      </button>
    </div>
  </section>

  <section id="purchase-button">
    <div className="toggle-icon"></div>
    <button onClick={()=>setOpen(!open)}>구매하기</button>
  </section>
      <div className="expandForm">
        <div className="drag_me">
          <form>
            <div className="small_graybox">
              <p>{prod?.name}</p>
              <div className="one-line">
                <div className="left_set">
                  <div className="circle_qty" onClick={down}>-</div>
                  <div className="numeric">{qtyCnt}</div>
                  <div className="circle_qty" onClick={up}>+</div>
                </div>
                <div className="right_set">
                  <div className="numeric_price">{prod?.price}원</div>
                </div>
              </div>
            </div>
            <div className="total_price">
              <p>합계</p>
              <p className="price_larger">4,500</p>
              <p className="price_larger">원</p>
            </div>
          </form>
        </div>
      </div>
      <div className="fixed-bottom">
        <div className="drag_me" />
        <div className="btn-action">구매하기</div>
      </div>
    </>
  );
}