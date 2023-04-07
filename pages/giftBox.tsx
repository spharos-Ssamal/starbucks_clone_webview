import React from 'react'

export default function purchaseList() {
  return (
    <div>

    <section id="purchase-list-date">
        <h1>받은선물함</h1>
        <div className="purchase-list-period-setting">
            <div className="purchase-list-period-setting-info flex-between">
                <p>전체</p>
                <p id="period">2022.03.03 ~ 2023.03.02</p>
                <button><img className="arrow" src="./assets/images/icons/arrow-down-sign-to-navigate.png"/></button>
            </div>
            <div className="flex-between period-button">
                <button>1개월</button>
                <button className="clicked">1년</button>
                <button>기간 설정</button>
            </div>
            <div className="flex-between period-date">
                <input type="date" /> ~ <input type="date" />
            </div>
            <div className="flex-between purchase-list-option">
                <div>
                    <label htmlFor="purchase-list-status">주문 상태</label><br />
                    <select id="purchase-list-status">
                    <option>전체</option>
                    <option>상품준비중</option>
                    <option>배송준비중</option>
                    <option>배송중</option>
                    <option>배송완료</option>
                    <option>주문취소</option>
                </select>
                </div>
            </div>
            <section className="purchase-list-submit">
                <button type="submit">조회</button>
            </section>
        </div>
    </section>
    <section className="purchase-list-product">
        받은 선물 내역이 없습니다.
    </section>

    <section id="purchase-card">
      <div className="flex">
        <div className="bold">2023-02-23 <span className="opacity">선물주문</span></div>
        <div className="right">주문 상세
          <img className="arrow" src="./assets/images/icons/arrow-point-to-right.png"/>
        </div>
      </div>
      <div className="card-product">
        <div>
          <div className="item-info">
            <img src="./assets/images/products/cake.jpg" alt="" className="product-img" />
            <div className="card-info">
              <p className="card-title">선물수락</p>
              <p className="name">부드러운 고구마 생크림 케이크</p>
              <span className="bold">33,000원</span><span className="opacity">1개</span>
            </div>
          </div>
        </div>
      </div>
    </section>
 
    </div>
  )
}
