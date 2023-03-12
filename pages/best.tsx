import HeaderBottom from "@/components/layouts/HeaderBottom";
import HeaderSub from "@/components/layouts/HeaderSub";
import HeaderTop from "@/components/layouts/HeaderTop";
import { useState } from "react";

export default function best() {
  //'베스트' 이고, '케이크 || 4+1 || 바리스타춘식'인 상품 검색?
  const [prodList, setProdList] = useState();

  return (
    <>
    <HeaderTop />
    <HeaderBottom />
    <HeaderSub />

    <div id="event-product">
      <div className="product-container">
        {
          prodList && prodList.map(item => {

          })
        }
          <div className="product-item">
            <img src="assets/images/event/cake/01.jpg" className="thumbnail"/>
            <div className="product-item-info">
              <p className="product-item-name">dkdkdk</p>
              <p className="product-item-price">19,900원</p>
            </div>
          </div>
        
      </div>
    </div>
    </>
  );
}