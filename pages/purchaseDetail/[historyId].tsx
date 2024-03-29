import { getUsersPurchaseInfo } from "@/Service/HistoryService/HistoryService";
import { HistoryInfo } from "@/Types/History/types";
import ProductDetailFooterInfo from "@/components/ui/ProductDetailFooterInfo";
import Separator from "@/components/ui/Separator";
import { PAYMENT_METHOD_CREDIT_CARD } from "@/constants/enums/PaymentMethod";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function PurchaseDetail() {
  const router = useRouter();
  const [historyInfo, setHistoryInfo] = useState<HistoryInfo>();

  const fetchHistoryDetailInfo = (historyId: string) => {
    getUsersPurchaseInfo(historyId)
      .then((res) => {
        const result: HistoryInfo = res.data;
        console.log(result);
        setHistoryInfo(result);
      })
      .catch((ex) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "잘못 된 접근입니다.",
        });
      });
  };

  useEffect(() => {
    if (router.query.historyId !== undefined) {
      const historyId = router.query.historyId;
      if (historyId !== undefined && typeof historyId == "string") {
        fetchHistoryDetailInfo(historyId);
      }
    }
  }, [router.query]);

  return (
    <>
      {historyInfo && (
        <>
          <section
            style={{
              margin: "150px 0 0 0",
            }}
            id="purchase-detail"
          >
            <div className="purchase-flex">
              <div>
                <div className="bold">{historyInfo.regTime}</div>
                <div className="no">
                  주문번호
                  <span className="no_numeric">
                    {historyInfo.purchaseHistoryId}
                  </span>
                </div>
              </div>
              <div className="msg_to_go">
                <img
                  className="icon_msg_to_go"
                  src="/assets/images/icons/envelope.png"
                />
              </div>
            </div>
            <div className="purchase-product">
              <div>
                {historyInfo.productInfoList.map((element) => (
                  <>
                    <div className="purchase-detail">
                      <img
                        src={element.thumbnail}
                        alt=""
                        className="product-img"
                        onClick={() => {
                          router.push(`/product/${element.productId}`);
                        }}
                      />
                      <div className="purch-card-info">
                        <p className="name">{element.productName}</p>
                        <span className="bold">{element.price} 원</span>
                        <span className="opacity">{element.count} 개</span>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </section>

          <section id="purchaseDetail-address-info">
            <div className="purchaseDetail-address-info-head">
              <p>배송 정보</p>
            </div>
            <div className="pay">
              <div className="pay-price">
                <p>
                  {historyInfo.addressInfo.recipient} (
                  {historyInfo.addressInfo.alias})
                </p>
                <p>
                  ({historyInfo.addressInfo.zipCode}){" "}
                  {historyInfo.addressInfo.baseAddress}{" "}
                  {historyInfo.addressInfo.detailAddress}
                </p>
              </div>
              <Separator color="lightgrey" gutter={0.6} />
              <div className="pay-price">
                <p>{historyInfo.addressInfo.shippingMemo}</p>
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
                <p className="price">{historyInfo.regTime}</p>
              </div>
              <Separator color="lightgrey" gutter={0.6} />
              <div className="pay-price">
                <p>주문번호</p>
                <p className="price">{historyInfo.purchaseHistoryId}</p>
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
                <p className="title price">{historyInfo.totalPrice} 원</p>
              </div>
              <div className="pay-price">
                <p>상품 금액</p>
                <p className="price">{historyInfo.purchasePrice} 원</p>
              </div>
              <div className="pay-price">
                <p>배송비</p>
                <p className="price">{historyInfo.shippingFee} 원</p>
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
                <p className="title price">{historyInfo.totalPrice}원</p>
              </div>
              <div className="pay-price">
                <p>모바일 상품권</p>
                <p className="price">0원</p>
              </div>
              <div className="pay-price">
                {historyInfo.paymentMethod === PAYMENT_METHOD_CREDIT_CARD ? (
                  <p>신용 카드</p>
                ) : (
                  <p>스타벅스 카드</p>
                )}

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
      )}
    </>
  );
}
