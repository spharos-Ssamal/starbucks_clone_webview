import ProductCard from "@/components/ui/ProductCard";
import Separator from "@/components/ui/Separator";
import React from "react";

export default function searchResult() {
  return (
    <>
      <header>
        <div className="header-top">
          <div className="menu-icon">
            <img src="assets/images/icons/menu.svg" alt="" />
          </div>
          <h1>온라인 스토어</h1>
          <nav>
            <ul>
              <li>
                <img src="assets/images/icons/search.svg" />
              </li>
              <li>
                <img src="assets/images/icons/shopping-cart.svg" />
              </li>
              <li>
                <img src="assets/images/icons/close.png" />
              </li>
            </ul>
          </nav>
        </div>
        <div className="search-header-bottom">
          <nav>
            <ul>
              <li>"#리유저블"의 검색결과</li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="search-result-with-data">
        <div className="categoryTop">
          <nav>
            <ul>
              <li className="active">전체</li>
              <li>케이크</li>
              <li>텀블러/보온병</li> {/* (0)이면 display hidden */}
              <li>머그/컵(5)</li>
              <li>라이프스타일</li>
              <li>티/커피용품(1)</li>
              <li>세트(6)</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="search-result-with-data">
        <div className="categoryBottom">
          <nav>
            <ul className="title">
              <li className="titleFixed">가격</li>
            </ul>
            <ul className="contents">
              <li>1만원미만</li>
              <li>1만원대</li>
              <li>2만원대</li>
              <li>3만원대</li>
              <li>4만원대</li>
              <li>5만원이상</li>
            </ul>
          </nav>
        </div>
      </div>
        <div className="search-result-with-data">
          <div className="categoryBottom">
            <nav>
              <ul className="title">
                <li className="titleFixed">시즌</li>
              </ul>
              <ul className="contents">
                <li>Spring</li>
                <li>커티스쿨릭</li>
                <li>체리블라썸</li>
                <li>밸런타인데이</li>
                <li>New York</li>
                <li>데스크 컬렉션</li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="search-result-with-data">
         <div className="foldable">
          접기 <img src="./assets/images/icons/arrow-up.png" />
        </div>
        </div>

      <div className="searchResultContent">
        <div className="searchResult-filter" id="search-result-filter">
          <img src="./assets/images/icons/reload.png" />
          <button>
            <p>체리블라썸</p>
            <img className="close-icon" src="./assets/images/icons/close.png" />
          </button>
          <button>
            <p>1만원대</p>
            <img className="close-icon" src="./assets/images/icons/close.png" />
          </button>
        </div>
        <div className="content-order">
          <select id="xyz">
            <option>신상품순</option>
            <option>추천순</option>
            <option>낮은가격순</option>
            <option>높은가격순</option>
          </select>
        </div>
        <section className="searchResultProduct">
          <ProductCard
            productId={0}
            imageSrc={""}
            productTitle={""}
            productPrice={""}
          />
        </section>
      </div>
    </>
  );
}
