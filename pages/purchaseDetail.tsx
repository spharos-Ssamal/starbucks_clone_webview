import ProductDetailFooterInfo from "@/components/ui/ProductDetailFooterInfo";
import Separator from "@/components/ui/Separator";

export default function purchaseDetail() {
  return (
    <>
      <section id="purchase-detail">
        <div className="purchase-flex">
          <div>
            <div className="bold">
              2023-02-23{" "}
              <span className="light-opacity">
                <img src="./assets/images/icons/giftbox.png" />
                선물주문
              </span>
            </div>
            <div className="no">
              주문번호
              <span className="no_numeric">D2023022314353484868346</span>
            </div>
          </div>
          <div className="msg_to_go">
            <img
              className="icon_msg_to_go"
              src="./assets/images/icons/envelope.png"
            />
          </div>
        </div>
        <div className="purchase-product">
          <div>
            <div className="purchase-detail">
              <img
                src="./assets/images/products/cake.jpg"
                alt=""
                className="product-img"
              />
              <div className="purch-card-info">
                <p className="bold">선물수락</p>
                <p className="name">부드러운 고구마 생크림 케이크</p>
                <span className="bold">33,000원</span>
                <span className="opacity">1개</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="purchaseDetail-pay-info">
        <div className="purchaseDetail-pay-info-head">
          <p>주문 정보</p>
        </div>
        <div className="pay">
          <div className="pay-price">
            <p>주문일시</p>
            <p className="price">2023.02.23 오후 01:55</p>
          </div>
          <Separator color="lightgrey" gutter={0.6} />
          <div className="pay-price">
            <p>주문번호</p>
            <p className="price">D2023022314353484868346</p>
          </div>
        </div>
      </section>

      <section id="purchaseDetail-pay-info">
        <div className="purchaseDetail-pay-info-head">
          <p>결제 정보</p>
          <p className="grey-round-border">현금영수증</p>
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
        <Separator color="lightgrey" gutter={0.4} />
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
        <Separator color="lightgrey" gutter={0.4} />
        <div className="pay">
          <div className="pay-price">
            <p className="title">결제 금액</p>
            <p className="title price">33,000원</p>
          </div>
          <div className="pay-price">
            <p>모바일 상품권</p>
            <p className="price">0원</p>
          </div>
          <div className="pay-price">
            <p>스타벅스 카드</p>
            <p className="price">33,000원</p>
          </div>
        </div>
      </section>

      <section className="detail-info">
        <ProductDetailFooterInfo title="이용조건 및 배송안내" />
        <ProductDetailFooterInfo title="취소/환불 안내" />
        <ProductDetailFooterInfo title="교환/반품 안내" />
      </section>
    </>
  );
}
