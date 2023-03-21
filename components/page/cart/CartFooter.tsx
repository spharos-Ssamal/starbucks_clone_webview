import React from 'react'

export default function CartFooter() {
  return (
    <section className="submit-container">
      <div className="submit-box">
        <div className="cart-final">
          <p>총 <span>1</span>건 / 20건</p>
          <p className="price">36,000원</p>
        </div>
        <div className="buttons">
          <button>선물하기</button>
          <button>구매하기</button>
        </div>
      </div>
    </section>
  )
}
