import Header from "@/components/layouts/Header";

export default function Cart() {

  return(
    <>
      <Header />

        <div className="cart-container">
          <div>
            <header id="store-head">
              <div className="store-header-top">
                <div className="menu-icon">
                  <img src="assets/images/icons/menu.svg" alt="" />
                </div>
                <h1><a href="">온라인 스토어</a></h1>
                <nav>
                  <ul>
                    <li><img src="assets/images/icons/close.png" /></li>
                  </ul>
                </nav>
              </div>
            </header>
          </div>
          <section id="cart-header">
            <p className="title">장바구니</p>
            <div className="cart-select">
              <div className="select-all">
                <input type="checkbox" /><span>전체 선택</span>
              </div>
              <div className="select-del">
                <a>선택삭제</a>
                <a>전체삭제</a>
              </div>
            </div>
          </section>
          <section id="cart-list">
            <div className="select">
              <div className="select-items">
                <input type="checkbox" /><span>냉동 상품</span>
              </div>
            </div>
            <div className="cart-product">
              <input type="checkbox" />
              <div>
                <div className="item-info">
                  <img src="./assets/images/products/cake.jpg" alt="" className="product-img" />
                  <div>
                    <p className="name">부드러운 고구마 생크림 케이크</p>
                    <p className="price">33,000원</p>
                  </div>
                  <a href=""><img src="./assets/images/icons/close.png" alt="" className="close-icon" /></a>
                </div>
                <div className="count">
                  <p>수량: 1개</p>
                </div>
                <div className="item-price">
                  <p>주문 금액</p>
                  <p>33,000원</p>
                </div>
                <div className="item-purchase">
                  <a href="">
                    주문 수정
                  </a>
                  <a href="">바로 구매</a>
                </div>
              </div>
            </div>
          </section>
          <section id="total-cart-price">
            <div>
              <div className="title-total-price">
                총 주문 금액
              </div>
              <div className="prices">
                <div className="cart-price">
                  <p>상품 금액</p>
                  <p className="price">33,000원</p>
                </div>
                <div className="cart-price">
                  <p>할인 금액</p>
                  <p className="price">0원</p>
                </div>
                <div className="cart-price">
                  <p>배송비</p>
                  <p className="price">3,000원</p>
                </div>
              </div>
              <div className="total-price">
                <p>최종 결제 금액</p>
                <p className="price">36,000원</p>
              </div>
              <div className="notice">
                <div className="notice-box">
                  장바구니에는 최대 20개까지 담을 수 있으며, 담긴 상품은 최대 2개월간 보관됩니다.<br />
                  가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.
                </div>
              </div>
            </div>
          </section>
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
        </div>
    </>
  );
}