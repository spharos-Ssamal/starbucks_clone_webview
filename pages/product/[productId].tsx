import StButton from '@/components/ui/StButton';
import * as React from 'react';
import { useState } from 'react';

export default function Product() {

  // 1 Fetch the product data from the API
  // axios.get('https://api.example.com/products/1')

  // useState and useEffect hooks

  const [ prodOne, setProdOne ] = useState();

  return (
    <>
      <section>
        <div className="top_thumb_wide">
          <img
            src="https://shop-phinf.pstatic.net/20210919_196/1632031439764T01QH_JPEG/33167273578501640_2124951771.jpg"
            alt="Single_Prod"
          />
          <div className="single_prod_top">
            <div className="single_prod_head">스타벅스 종이 필터 #2</div>
            <div className="best">Best</div>
            <div className="prod_icon_share">
              <img src="./assets/images/icons/share.svg" width={25} />
            </div>
            <div>
              <p>
                원두 그대로의 맛과 향을 추출할 수 있도록 고안된 스타벅스 종이필터
                #2(2~3인용, 50매)
              </p>
              <h2>4,500원</h2>
            </div>
          </div>
        </div>
        <div className="middle">
          <div className="middle_padding_top">
            <h3>상품정보</h3>
          </div>
          <div className="prod_imgs">
            <img
              src="https://shop-phinf.pstatic.net/20210919_196/1632031439764T01QH_JPEG/33167273578501640_2124951771.jpg?type=f296_296"
              width="100%"
              height="100%"
              alt="Single_Prod"
            />
            <img
              src="https://shop-phinf.pstatic.net/20210919_196/1632031439764T01QH_JPEG/33167273578501640_2124951771.jpg?type=f296_296"
              width="100%"
              height="100%"
              alt="Single_Prod"
            />
          </div>
          <div className="middle_padding_bt">
            <button className="click_for_more">
              <div className="more_text">상품정보 더보기</div>
              <div className="bottom-chevron">
                <img src="./assets/images/icons/left-chevron.svg" />
              </div>
            </button>
          </div>
        </div>
        <div className="bottom">
          <div className="others">다른 고객이 함께 본 상품 - 미완</div>
        </div>
      </section>
      <div className="expandForm">
        <div className="drag_me">
          <form>
            <div className="small_graybox">
              <p>스타벅스 종이 필터 #2</p>
              <div className="one-line">
                <div className="left_set">
                  <div className="circle_qty">-</div>
                  <div className="numeric">3</div>
                  <div className="circle_qty">+</div>
                </div>
                <div className="right_set">
                  <div className="numeric_price">4,500원</div>
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
        <StButton 
          buttonText={'구매하기'} 
          textSize={'1.1rem'} 
          //handler = {}  
        />
      </div>
    </>
  );
}