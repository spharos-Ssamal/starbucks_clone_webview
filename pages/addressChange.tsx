import Link from 'next/link'
import React from 'react'

export default function addressChange() {
  return (
    <>
  <section id="delivery-header">
    <p>배송지 선택</p>
    <Link href="">
      <img src="./assets/images/icons/search.svg" alt="" />
      <span>새 배송지 추가</span>
    </Link>
  </section>
  <section id="delivery-list">
    <input type="radio" name="deliver-place" />
    <div className="delivery-info">
      <div className="delivery-name">
        <div className="name">춘식이 (집)</div>
        <div className="is-primary">기본</div>
      </div>
      <p>(48058) 부산광역시 해운대구 센텀남대로 35(우동) 2층</p>
      <p>010-1234-5678</p>
      <p>부재시 문 앞에 놓아주세요.</p>
    </div>
    <Link href="">수정</Link>
  </section>
  <section id="delivery-list">
    <input type="radio" name="deliver-place" />
    <div className="delivery-info">
      <div className="delivery-name">
        <div className="name">죠르디</div>
      </div>
      <p>(48950) 부산광역시 중구 용두산길 35-7(광복동2가) 용두산공원</p>
      <p>010-1234-5678</p>
      <p>배송 전 연락 바랍니다.</p>
    </div>
    <Link href="">수정</Link>
  </section>
  <section id="delivery-list">
    <input type="radio" name="deliver-place" />
    <div className="delivery-info">
      <div className="delivery-name">
        <div className="name">어피치(회사)</div>
      </div>
      <p>(48060) 부산광역시 해운대구 APEC로 55(우동) 1층 로비</p>
      <p>010-1234-5678</p>
      <p>부재시 문 앞에 놓아주세요.</p>
    </div>
    <Link href="">수정</Link>
  </section>
  <section className="submit-container">
    <button type="submit">변경하기</button>
  </section>

    </>
  )
}
