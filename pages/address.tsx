import Head from 'next/head'
import React from 'react'

export default function address() {
  return (
    <div>
    <Head>
      <title>배송지 관리</title>
    </Head>
      <section id="delivery-header">
        <p>배송지 관리</p>
      </section>
      <section id="delivery-manage-list">
        <div className="delivery-manage">
          <div className="delivery-info">
            <div className="delivery-name">
              <div className="name">춘식이 (집)</div>
              <div className="is-primary">기본</div>
            </div>
          </div>
          <a href="">수정</a>
        </div>
        <p>(48058) 부산광역시 해운대구 센텀남대로 35(우동) 2층</p>
        <p>010-1234-5678</p>
        <p>부재시 문 앞에 놓아주세요.</p>
      </section>
      <section id="delivery-manage-list">
        <div className="delivery-manage">
          <div className="delivery-info">
            <div className="delivery-name">
              <div className="name">죠르디</div>
            </div>
          </div>
          <a href="">수정</a>
          <div>|</div>
          <a href="">삭제</a>
        </div>
        <p>(48950) 부산광역시 중구 용두산길 35-7(광복동2가) 용두산공원</p>
        <p>010-1234-5678</p>
        <p>배송 전 연락 바랍니다.</p>
      </section>
      <section id="delivery-manage-list">
        <div className="delivery-manage">
          <div className="delivery-info">
            <div className="delivery-name">
              <div className="name">어피치(회사)</div>
            </div>
          </div>
          <a href="">수정</a>
          <div>|</div>
          <a href="">삭제</a>
        </div>
        <p>(48058) 부산광역시 해운대구 센텀남대로 35(우동) 2층</p>
        <p>010-1234-5678</p>
        <p>부재시 문 앞에 놓아주세요.</p>
      </section>
      <section className="submit-container">
        <button type="submit">+ 새 배송지 추가</button>
      </section>  
    </div>
  )
}
