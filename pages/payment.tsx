import Link from 'next/link'
import React from 'react'

export default function payment() {
  return (
    <>
    
  <section id="pay-title">
    <p className="title">결제하기</p>
  </section>
  <section id="pay-delivery">
    <div className="delivery-info-title">
      <p>배송 정보</p>
      <Link href="">
        <div className="delivery-change">
          변경
        </div>
      </Link>
    </div>
    <div className="delivery-info">
      <div className="delivery-name">
        <div className="name">춘식이 (집)</div>
        <div className="is-primary">기본</div>
      </div>
      <p>(48058) 부산광역시 해운대구 센텀남대로 35(우동) 2층</p>
      <p>010-1234-5678</p>
    </div>
  </section>
  <section className="pay-products">
    <div className="details">
      <summary>
        <div className="grey-wrap">
          <p>상품내역</p>
          <div className="grey-arrow-down-wrap">
            <img src="./assets/images/icons/arrow-down-sign-to-navigate.png" alt="" />
          </div>
        </div>
      </summary>
      <div className="product-summary">
          <img src="./assets/images/products/category/category-cup.jpg" alt="" />
        <div>
          <p className="p_subtitle">23 체리블라썸 플라워 머그앤소서 237ml test test test test</p>
          <p className="p_opacity">주문수량: 1개</p>
          <p className="p_bold">34,000원</p>
        </div>
      </div>
    </div>
    <div className="product-summary">
      <img src="./assets/images/products/category/category-cup.jpg" alt="" />
      <div>
        <p className="p_subtitle_margin">23 리블라썸 플라워 머그앤소서 237ml</p>
      </div>
    </div>
  </section>
  <section id="coupon">
    <div className ="details">
      <summary>
        <div className="grey-wrap">
          <p>쿠폰 및 할인</p>
          <div className="grey-arrow-down-wrap">
            <img src="./assets/images/icons/arrow-down-sign-to-navigate.png" alt="" />
          </div>
        </div>
      </summary>
      <div className="detail">
        <Link href="">
          
        </Link>
      </div>
    </div>
  </section>
  <section id="mobile-gift">
    <div>
      <p>모바일 상품권</p>
      <Link href="">
        <div>
          <p>사용하기</p>
          <img src="./assets/images/icons/arrow-point-to-right.png" alt="" />
        </div>
      </Link>
    </div>
  </section>
  <section id="pay-method">
    <div>
      <p>결제 수단</p>
    </div>
    <div className="pay-choice">
      <div className="radio-pd14"><input type="radio" name="pay"/> 스타벅스 카드</div>
      <div className="pay-sb-card">
        스벅카드 보유자에게 default로 보이는 (카드, 금액) overflow-y

      </div>
      <div className="radio-pd14-pd30"><input type="radio" name="pay"/> 신용카드</div>
    </div>
  </section>
  <section id="pay-info">
    <div>
      <p>결제 정보</p>
    </div>
    <div className="pay">
      <div className="pay-price">
        <p className="title">주문 금액</p>
        <p className="title price">33,000원</p>
      </div>
      <div className="pay-price">
        <p>상품 금액</p>
        <p className="price">33,000원</p>
      </div>
      <div className="pay-price">
        <p>배송비</p>
        <p className="price">0원</p>
      </div>
    </div>
    <div className="pay">
      <div className="pay-price">
        <p className="title">할인 금액</p>
        <p className="title price">0원</p>
      </div>
      <div className="pay-price">
        <p>상품 할인</p>
        <p className="price">0원</p>
      </div>
    </div>
    <div className="pay">
      <div className="pay-price">
        <p className="title">결제 금액</p>
        <p className="title price">33,000원</p>
      </div>
      <div className="pay-price">
        <p>모바일 상품권</p>
        <p className="price">0원</p>
      </div>
    </div>
  </section>
  <section id="pay-info">
    <div className="pay">
      <div className="pay-price">
        <p className="title">최종 결제 금액</p>
        <p className="title price">33,000원</p>
      </div>
    </div>
    <div className="notice">
      <div className="notice-box">
        위 주문 내용을 확인하였으며, 결제에 동의합니다.<br />
        (전자상거래법 8조 2항)
      </div>
    </div>
  </section>

  <section className="submit-container">
    <button type="submit">33,000원 결제하기</button>
  </section>  
    </>
  )
}
