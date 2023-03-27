import React from 'react'

export default function restockAlert() {
  return (
    <>
    <section id="purchase-list-date">
        <h1>입고 알림 내역</h1>
    </section>
    <section className="purchase-list-product">
        입고 알림 내역이 없습니다.
    </section>

    <section id="card-without-border">
        <div>
          <div className="item-info">
            <img src="./assets/images/products/cake.jpg" alt="" className="product-img" />
            <div className="card-info">
              <div className="card-first-row">
                <div className="card-title">알림완료</div>
                <img src="./assets/images/icons/close.png" />
              </div>
              <p className="name">부드러운 고구마 생크림 케이크</p>
              <span className="opacity">2023.03.26 알림</span>
            </div>
          </div>
        </div>
    </section>

    </>
  )
}
