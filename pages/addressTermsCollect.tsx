import Link from "next/link";
import React from "react";

export default function AddressTermsCollect() {
  return (
    <>
      <header id="store-head">
        <div className="store-header-top">
          <div className="menu-icon"></div>
          <h1>
            <a href="">배송지 변경</a>
          </h1>
          <nav>
            <ul>
              <li>
                <img src="assets/images/icons/close.png" />
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="delivery-term-wrap">
        <div id="delivery-term-header">
          <p>배송지 정보 수집 및 이용동의</p>
          <Link href="">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </Link>
        </div>

        <div className="delivery-term-content">
          <p>
            스타벅스 코리아를 운영하는 주식회사 에스씨케이컴퍼니는 온라인 스토어
            서비스를 제공하기 위하여 아래와 같이 고객님의 배송지 정보를 수집 ·
            이용하려고 하오니, 내용을 확인 후 동의여부를 결정하여 주시기
            바랍니다
          </p>
        </div>

        <div className="delivery-term-content-info">
          <div className="subtitle">[필수] 배송지 정보 수집 이용 내역</div>

          <table>
            <tbody>
              <tr>
                <th>수집 · 이용 목적</th>
                <td>온라인 스토어 서비스 이용 및 상품 배송</td>
              </tr>
              <tr>
                <th>항목</th>
                <td>배송지 주소, 수신자 연락처, 수신자 이름</td>
              </tr>
              <tr>
                <th>보유 및 이용 기간</th>
                <td>회원 탈퇴 또는 동의 철회 시 까지</td>
              </tr>
            </tbody>
          </table>
          <p>
            위의 배송지 정보 수집 · 이용에 대한 동의를 거부할 권리가 있습니다.
            그러나 동의를 거부할 경우 온라인 스토어 서비스 이용에 제한을 받을 수
            있습니다.
          </p>
        </div>
      </div>
    </>
  );
}
