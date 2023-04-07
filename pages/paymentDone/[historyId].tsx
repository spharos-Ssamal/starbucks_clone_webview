import { getUsersPurchaseInfo } from "@/Service/HistoryService/HistoryService";
import { HistoryInfo } from "@/Types/History/types";
import {
  OrderButton48width,
  OrderButton48widthColorReverse,
} from "@/components/ui/OrderButtonsPerSize";
import { PAYMENT_METHOD_STARBUCKS_CARD } from "@/constants/enums/PaymentMethod";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function PaymentDone() {
  const router = useRouter();
  const [historyInfo, setHistoryInfo] = useState<HistoryInfo>();
  useEffect(() => {
    if (
      router.query.historyId !== undefined &&
      typeof router.query.historyId === "string"
    ) {
      const historyId: string = router.query.historyId;
      getUsersPurchaseInfo(historyId)
        .then((res) => {
          const result: HistoryInfo = res.data;
          setHistoryInfo(result);
        })
        .catch((ex) => {
          Swal.fire({
            icon: "error",
            title: "Opps....",
            text: "일시적인 에러가 발생하였습니다.",
          });
        });
    }
  }, []);

  return (
    <>
      {historyInfo && (
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
                <div className="name">
                  {historyInfo.addressInfo.recipient} (
                  {historyInfo.addressInfo.alias})
                </div>
                <div className="is-primary">기본</div>
              </div>
              <p className="pPaddingTopSix">
                ({historyInfo.addressInfo.zipCode}){" "}
                {historyInfo.addressInfo.baseAddress}{" "}
                {historyInfo.addressInfo.detailAddress}
              </p>
              <p className="contact">
                <span>{historyInfo.addressInfo.contactInfo1}</span>
              </p>
              <p className="separatorWithLine"></p>
              <p className="">{historyInfo.addressInfo.shippingMemo}</p>
            </div>
          </div>

          <p className="separator"></p>

          <div id="payDoneWrap">
            <div className="delivery-info-title">
              <p>
                주문상품 <span>({historyInfo.productInfoList.length})</span>
              </p>
            </div>

            {historyInfo.productInfoList &&
              historyInfo.productInfoList.map((element, idx) => (
                <>
                  <div
                    key={element.productName + " " + idx}
                    className="purchased-product"
                  >
                    <div className="purchase-detail">
                      <img
                        src={element.thumbnail}
                        alt=""
                        className="product-img"
                      />
                      <div className="purch-card-info">
                        <p className="name">{element.productName}</p>
                        <span className="qtyOpacity">{element.count}개</span>
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </div>

          <p className="separator"></p>

          <div id="payDoneWrap">
            <div className="viewPrice">
              <div className="sum">
                <div className="bold">결제 금액</div>
                <div className="fontsize">{historyInfo.totalPrice}원</div>
              </div>
              <p className="separatorWithLine"></p>
              <div className="sum">
                {historyInfo.paymentMethod === PAYMENT_METHOD_STARBUCKS_CARD ? (
                  <div className="name">스타벅스 카드</div>
                ) : (
                  <div className="name">신용 카드</div>
                )}

                <div className="bold">{historyInfo.totalPrice}원</div>
              </div>
            </div>
          </div>

          <div id="payDoneWrap">
            <div className="productOrderSectionOpenBottomWrap">
              <OrderButton48widthColorReverse
                onClick={() =>
                  router.push(
                    `/purchaseDetail/${historyInfo.purchaseHistoryId}`
                  )
                }
              >
                상세정보 확인
              </OrderButton48widthColorReverse>
              <OrderButton48width onClick={() => router.push("/")}>
                메인으로 가기
              </OrderButton48width>
            </div>
          </div>
        </body>
      )}
    </>
  );
}
