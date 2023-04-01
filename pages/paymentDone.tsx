import {
  OrderButton48width,
  OrderButton48widthColorReverse,
} from "@/components/ui/OrderButtonsPerSize";

export default function purchaseDone() {
  return (
    <body id="payment">
      <div id="payDoneWrap">
        <p className="title">주문이 완료되었습니다.</p>
      </div>

      <p className="separator"></p>

      <div id="payDoneWrap">
        <div className="delivery-info-title">
          <p>배송 정보</p>
        </div>
        <div className="delivery-info">
          <div className="delivery-name">
            <div className="name">춘식이 (집)</div>
            <div className="is-primary">기본</div>
          </div>
          <p className="pPaddingTopSix">
            (48058) 부산광역시 해운대구 센텀남대로 35(우동) 2층 test test
          </p>
          <p className="contact">
            <span>010-1234-5678</span>
            <span>010-1111-2222</span>
          </p>
          <p className="separatorWithLine"></p>
          <p className="">부재시 문 앞에 놓아주세요</p>
        </div>
      </div>

      <p className="separator"></p>

      <div id="payDoneWrap">
        <div className="delivery-info-title">
          <p>
            주문상품 <span>(1)</span>
          </p>
        </div>

        <div className="purchased-product">
          <div className="purchase-detail">
            <img
              src="./assets/images/best/cake/01.jpg"
              alt=""
              className="product-img"
            />
            <div className="purch-card-info">
              <p className="name">부드러운 고구마 생크림 케이크</p>
              <span className="qtyOpacity">1개</span>
            </div>
          </div>
        </div>
      </div>

      <p className="separator"></p>

      <div id="payDoneWrap">
        <div className="viewPrice">
          <div className="sum">
            <div className="bold">결제 금액</div>
            <div className="fontsize">26,000원</div>
          </div>
          <p className="separatorWithLine"></p>
          <div className="sum">
            <div className="name">신용카드</div>
            <div className="bold">26,000원</div>
          </div>
        </div>
      </div>

      <div id="payDoneWrap">
        <div className="productOrderSectionOpenBottomWrap">
          <OrderButton48widthColorReverse>
            상세정보 확인
          </OrderButton48widthColorReverse>
          <OrderButton48width>메인으로 가기</OrderButton48width>
        </div>
      </div>
    </body>
  );
}
