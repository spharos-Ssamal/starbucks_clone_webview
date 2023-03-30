export default function OrderChange() {
  return (
    <div className="modalWrap">
      <header id="store-head">
        <div className="store-header-top">
          <div className="menu-icon"></div>
          <h1>
            <a href="">주문 수정</a>
          </h1>
          <nav>
            <ul>
              <li>
                <img src="/assets/images/icons/close.png" />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="item-change">
        <img src="./assets/images/event/cake/02.jpg" alt="" />
        <div>
          <p>부드러운 티라미수 롤케이크</p>
          <p>19,900원</p>
        </div>
      </section>
      <section id="change-quantity">
        <div>
          <p>상품 주문 수량</p>
          <div className="change">
            <div className="quantity">
              <img src="/assets/images/icons/minus.png" alt="" />
              <div>1</div>
              <img src="/assets/images/icons/add.png" alt="" />
            </div>
            <p>19,900원</p>
          </div>
        </div>
      </section>
      <section className="submit-container">
        <div className="submit-box">
          <div className="change-final">
            <p>주문금액</p>
            <p className="price">
              합계 <span>19,900원</span>
            </p>
          </div>
          <div className="buttons">
            <button>취소</button>
            <button>확인</button>
          </div>
        </div>
      </section>
    </div>
  );
}
