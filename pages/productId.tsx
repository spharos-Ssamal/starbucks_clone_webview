import HeaderTop from '@/components/layouts/HeaderTop';
import StButton from '@/components/ui/StButton';
import { ST } from 'next/dist/shared/lib/utils';
import * as React from 'react';
import { useEffect, useState } from 'react';

export const REQUEST_PRODUCT_READ = "/api/v1/product/read";
export default function Product() {

  // 1 Fetch the product data from the API
  // axios.get('https://api.example.com/products/1')

  // useState and useEffect hooks

  
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
    <HeaderTop />
    
    <div id="product-top">
    <div className="product-img">
      <img
        src="https://www.starbucks.co.kr:3443/upload/giftshop/goods/20230213/0ab0d443-af0e-4854-9c66-bd57b0174f02.jpg"
        style={{ width: y > 100 ? "10%" : "100%" }}
        alt="" />
    </div>
    <div className="product-info">
      <div className="product-name">
        <div>
          <p>23 체리블라썸 페탈 미르 보온병 976ml<span className="is-new">New</span></p>
        </div>
        <div className="share-icon">
          <img src="./assets/images/icons/user.svg" alt="" />
        </div>
      </div>
      <div className="description">
        핑크와 퍼플 컬러로 포인트를 준 976ml 용량의 대형 보온병입니다.
      </div>
      <div className="price">
        78,000원
      </div>
    </div>
    <div className="notice">
    </div>
  </div>
  <section id="product-detail">
    <p>상품 정보</p>
    <img src="./assets/images/products/product-detail.png" alt="" />
    {/* <!--JS "상품정보 더보기" 버튼 추가 필요--> */}
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
          <img src="assets/images/icons/contents/right-arrow.png" alt="" />
        </div>
      </button>
    </div>
    <div className="nav-button">
      <button>
        <div className="nav-container">
          <div>
            <p className="title">상품제공정보고시</p>
          </div>
          <img src="assets/images/icons/contents/right-arrow.png" alt="" />
        </div>
      </button>
    </div>
    <div className="nav-button">
      <button>
        <div className="nav-container">
          <div>
            <p className="title">교환/반품 안내</p>
          </div>
          <img src="assets/images/icons/contents/right-arrow.png" alt="" />
        </div>
      </button>
    </div>
    <div className="nav-button">
      <button>
        <div className="nav-container">
          <div>
            <p className="title">취소/환불 안내</p>
          </div>
          <img src="assets/images/icons/contents/right-arrow.png" alt="" />
        </div>
      </button>
    </div>
  </section>

  <section id="purchase-button"> 
    <div className="toggle-icon"></div>
    <StButton buttonText={'구매하기'} textSize={'1.1rem'}/>
  </section>

    </>
  );
}