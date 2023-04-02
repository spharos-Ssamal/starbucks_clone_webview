/* eslint-disable react-hooks/exhaustive-deps */
import { PaymentInfo, PrePurchaseProductInfo } from "@/Types/payment/types";
import { Dispatch, SetStateAction, useEffect } from "react";

interface Props {
  prePurchaseProducts: PrePurchaseProductInfo[];
  discountFee: number;
  paymentInfo: PaymentInfo;
  setPaymentInfo: Dispatch<SetStateAction<PaymentInfo>>;
}

export default function PaymentInfoComponent(props: Props) {
  const { prePurchaseProducts, discountFee, paymentInfo, setPaymentInfo } =
    props;

  useEffect(() => {
    const amountOfProductPrice = prePurchaseProducts.reduce(
      (acc, curr) => acc + curr.price * curr.count,
      0
    );

    const shippingFee = amountOfProductPrice > 30000 ? 0 : 3000;

    setPaymentInfo({
      ...paymentInfo,
      amountOfProductPrice: amountOfProductPrice,
      amountOfDiscountPrice: discountFee,
      amountOfTotalPrice: amountOfProductPrice + shippingFee - discountFee,
    });
  }, [prePurchaseProducts]);

  return (
    <>
      <section id="pay-info">
        <div>
          <p>결제 정보</p>
        </div>
        <div className="pay">
          <div className="pay-price">
            <p className="title">주문 금액</p>
            <p className="title price">
              {paymentInfo.amountOfProductPrice > 0 &&
              paymentInfo.amountOfProductPrice < 30000
                ? paymentInfo.amountOfProductPrice + 3000
                : paymentInfo.amountOfProductPrice}
              원
            </p>
          </div>
          <div className="pay-price">
            <p>상품 금액</p>
            <p className="price">{paymentInfo.amountOfProductPrice}원</p>
          </div>
          <div className="pay-price">
            <p>배송비</p>
            <p className="price">
              {paymentInfo.amountOfProductPrice > 0 &&
              paymentInfo.amountOfProductPrice < 30000
                ? 3000
                : 0}{" "}
              원
            </p>
          </div>
        </div>
        <div className="pay">
          <div className="pay-price">
            <p className="title">할인 금액</p>
            <p className="title price">{paymentInfo.amountOfDiscountPrice}원</p>
          </div>
          <div className="pay-price">
            <p>상품 할인</p>
            <p className="price">0원</p>
          </div>
        </div>
        <div className="pay">
          <div className="pay-price">
            <p className="title">결제 금액</p>
            <p className="title price">
              {paymentInfo.amountOfProductPrice > 0 &&
              paymentInfo.amountOfProductPrice < 30000
                ? paymentInfo.amountOfProductPrice +
                  3000 -
                  paymentInfo.amountOfDiscountPrice
                : paymentInfo.amountOfProductPrice -
                  paymentInfo.amountOfDiscountPrice}
              원
            </p>
          </div>
          <div className="pay-price">
            <p>모바일 상품권</p>
            <p className="price">0원</p>
          </div>
        </div>
      </section>
    </>
  );
}
