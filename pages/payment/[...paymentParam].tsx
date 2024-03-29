import { RequestGetDefaultAddress } from "@/Service/AddressService/AddressService";
import { RequestPaymentConfirm } from "@/Service/PaymentService/PaymentService";
import { getPrePurchaseProducts } from "@/Service/PurchaseService/PurchaseService";

import {
  PaymentConfirmReq,
  PaymentInfo,
  PrePurchaseProductInfo,
  ProductBePurchased,
  initPaymentInfo,
} from "@/Types/payment/types";
import PaymentInfoComponent from "@/components/page/payment/PaymentInfoComponent";
import { userLoginState } from "@/state/user/atom/userLoginState";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Swal from "sweetalert2";
import {
  RequestCartDelete,
  RequestGetCartItem,
  RequestGetCartItems,
} from "@/Service/CartService/CartService";
import { cartListType } from "@/Types/cart/cartListType";
import {
  AddressDataType,
  ShippingAddressInfo,
  initShippingAddressInfo,
} from "@/Types/address/AddressType";
import ChangeAddressModal from "@/components/modals/ChangeAddressModal";

export default function Payment() {
  const router = useRouter();
  const isLogin = useRecoilValue(userLoginState);
  const [prePurchaseProducts, setPrePurchaseProducts] = useState<
    PrePurchaseProductInfo[]
  >([]);
  const [purchaseType, setPurchaseType] = useState("product");
  const [paymentType, setPaymentType] = useState("STARBUCKS_CARD");
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>(initPaymentInfo);
  const [changeAddressModalOpen, setChangeAddressModalOpen] =
    useState<boolean>(false);

  const [shippingAddress, setShippingAddress] = useState<ShippingAddressInfo>(
    initShippingAddressInfo
  );

  const fetchPrePurchaseProductsInfo = (productId: number[], count: number) => {
    getPrePurchaseProducts(productId)
      .then((res) => {
        const prePurchaseProductInfo: PrePurchaseProductInfo = res.data[0];
        setPrePurchaseProducts([
          {
            id: prePurchaseProductInfo.id,
            name: prePurchaseProductInfo.name,
            thumbnail: prePurchaseProductInfo.thumbnail,
            count: count,
            price: prePurchaseProductInfo.price,
          },
        ]);
      })
      .catch((ex) => {
        console.log(ex);
      });
  };

  const fetchCartItemInfo = (cartId: number) => {
    RequestGetCartItem(cartId).then((res) => {
      const prePurchaseProductInfo: cartListType = res.data;
      const data: PrePurchaseProductInfo = {
        id: prePurchaseProductInfo.product.id,
        cartId: cartId,
        name: prePurchaseProductInfo.product.name,
        thumbnail: prePurchaseProductInfo.product.thumbnail,
        count: prePurchaseProductInfo.count,
        price: prePurchaseProductInfo.product.price,
      };
      setPrePurchaseProducts([data]);
    });
  };

  const fetchCartItemsInfo = (cartId: string[]) => {
    const cartIds = cartId.map((e) => parseInt(e));
    RequestGetCartItems(cartIds).then((res) => {
      const result: cartListType[] = res.data;
      const results: PrePurchaseProductInfo[] = result.map((e) => {
        return {
          id: e.product.id,
          cartId: e.id,
          name: e.product.name,
          thumbnail: e.product.thumbnail,
          count: e.count,
          price: e.product.price,
        };
      });
      setPrePurchaseProducts([...results]);
    });
  };

  const requestPayment = () => {
    const productsBePurchase: ProductBePurchased[] = prePurchaseProducts.map(
      (element) => ({
        id: element.id,
        count: element.count,
      })
    );

    const request: PaymentConfirmReq = {
      userId: isLogin.userId,
      purchasedList: productsBePurchase,
      paymentMethod: paymentType,
      addressId: shippingAddress.id,
      shippingFee: paymentInfo.shippingFee,
      amountOfProductPrice: paymentInfo.amountOfProductPrice,
      amountOfDiscount: paymentInfo.amountOfDiscountPrice,
      amountOfTotalPrice: paymentInfo.amountOfTotalPrice,
    };
    RequestPaymentConfirm(request)
      .then((res) => {
        if (purchaseType === "cart") {
          prePurchaseProducts.map(
            (element) => element.cartId && RequestCartDelete(element.cartId)
          );
        }
        const historyId = res.data.historyId;
        Swal.fire({
          icon: "success",
          text: "주문이 완료되었습니다.",
        }).then(() => {
          router.push(`/paymentDone/${historyId}`);
        });
      })
      .catch((ex) => {
        console.log(ex);
        Swal.fire({
          icon: "error",
          text: "주문이 실패했습니다.",
        }).then(() => {
          router.push("/");
        });
      });
  };

  const requestPaymentConfirm = () => {
    Swal.fire({
      icon: "question",
      title: "결제 확인",
      text: `${paymentInfo.amountOfTotalPrice} 을 결제 하시겠습니까?`,

      showCancelButton: true,
      confirmButtonColor: "#009b39",
      confirmButtonText: "승인",
      cancelButtonText: "취소",
    }).then((res) => {
      if (res.isConfirmed) {
        requestPayment();
      } else {
        Swal.fire({
          icon: "info",
          title: "취소",
          text: "취소 되었습니다.",
        });
      }
    });
  };

  useEffect(() => {
    RequestGetDefaultAddress(isLogin.userId)
      .then((res) => {
        const defaultAddress: AddressDataType = res.data.result;
        setShippingAddress(defaultAddress);
      })
      .catch((ex) => {
        console.log(ex);
      });
  }, [isLogin.userId]);

  useEffect(() => {
    if (router.query.paymentParam !== undefined) {
      const paymentParam = router.query.paymentParam;
      const purchaseParam = paymentParam[0];
      if (purchaseParam === "product") {
        const productParam = paymentParam[1].split("&");
        const productId = parseInt(productParam[0].split("=")[1]);
        const productCount = parseInt(productParam[1].split("=")[1]);
        fetchPrePurchaseProductsInfo([productId], productCount);
      } else if (purchaseParam === "cart") {
        setPurchaseType("cart");
        const cartItemParam = paymentParam[1].split("=");
        const cartParam = cartItemParam[0];
        if (cartParam === "cartId") {
          const cartIdParam = cartItemParam[1];
          fetchCartItemInfo(parseInt(cartIdParam));
        } else if (cartParam === "cartIds") {
          const cartIdsParam = cartItemParam[1].split(",");
          if (prePurchaseProducts.length == 0) {
            fetchCartItemsInfo(cartIdsParam);
          }
        }
      } else {
        Swal.fire({
          icon: "error",
          text: "잘못 된 접근입니다.",
        });
        router.push("/");
      }
    }
  }, [router.query]);

  return (
    <>
      <ChangeAddressModal
        isModalOpen={changeAddressModalOpen}
        setIsModalOpen={setChangeAddressModalOpen}
        setShippingAddress={setShippingAddress}
      />
      <section id="pay-title">
        <p className="title">결제하기</p>
      </section>
      <section id="pay-delivery">
        <div className="delivery-info-title">
          <p>배송 정보</p>
          <a onClick={() => setChangeAddressModalOpen(true)}>
            <div className="delivery-change">변경</div>
          </a>
        </div>
        <div className="delivery-info">
          <div className="delivery-name">
            <div className="name">
              {shippingAddress.recipient} ({shippingAddress.alias})
            </div>
            {shippingAddress.defaultAddress && (
              <div className="is-primary">기본</div>
            )}
          </div>
          <p>
            ({shippingAddress.zipCode}) {shippingAddress.baseAddress}{" "}
            {shippingAddress.detailAddress}
          </p>
          <p>{shippingAddress.contactInfo1}</p>
        </div>
      </section>
      <section className="pay-products">
        <div className="details">
          <summary>
            <div className="grey-wrap">
              <p>상품내역</p>
              <div className="grey-arrow-down-wrap">
                <img
                  src="/assets/images/icons/arrow-down-sign-to-navigate.png"
                  alt=""
                />
              </div>
            </div>
          </summary>
          {prePurchaseProducts &&
            prePurchaseProducts.map((element, idx) => (
              <>
                <div key={element.id + idx} className="product-summary">
                  <img src={element.thumbnail} alt="" />
                  <div>
                    <p className="p_subtitle">{element.name}</p>
                    <p className="p_opacity">{element.count}</p>
                    <p className="p_bold">{element.price * element.count}</p>
                  </div>
                </div>
              </>
            ))}
        </div>
      </section>
      <section id="coupon">
        <div className="details">
          <summary>
            <div className="grey-wrap">
              <p
                onClick={() => {
                  Swal.fire({
                    icon: "warning",
                    title: "아직 개발되지 않았습니다.",
                    text: "아직 개발중입니다. 다음 버전에서 만나요~",
                  });
                }}
              >
                쿠폰 및 할인
              </p>
              <div className="grey-arrow-down-wrap">
                <img
                  src="/assets/images/icons/arrow-down-sign-to-navigate.png"
                  alt=""
                />
              </div>
            </div>
          </summary>
          <div className="detail">
            <Link href=""></Link>
          </div>
        </div>
      </section>
      <section id="mobile-gift">
        <div>
          <p>모바일 상품권</p>
          <a
            onClick={() => {
              Swal.fire({
                icon: "warning",
                title: "아직 개발되지 않았습니다.",
                text: "아직 개발중입니다. 다음 버전에서 만나요~",
              });
            }}
          >
            <div>
              <p>사용하기</p>
              <img src="/assets/images/icons/arrow-point-to-right.png" alt="" />
            </div>
          </a>
        </div>
      </section>
      <section id="pay-method">
        <div>
          <p>결제 수단</p>
        </div>
        <div className="pay-choice">
          <div className="radio-pd14">
            <div>
              <input
                type="radio"
                name="pay"
                defaultChecked={true}
                onClick={() => setPaymentType("STARBUCKS_CARD")}
              />{" "}
              스타벅스 카드
            </div>
          </div>

          {/* <div className="pay-sb-card">
            <div className="eGiftCardWrap">
              <div className="eGiftCard">
                <img src="/assets/images/banner/banner01.png" />
              </div>
              <div className="eGiftCardInfo">
                <p className="eGiftCardInfoTitle">고맙습니다 e-Gift</p>
                <p className="eGiftCardPrice">42,800원</p>
              </div>
              <div>
                <input type="radio" name="userCard" />
              </div>
            </div>

            <div className="eGiftCardWrap">
              <div className="eGiftCard">
                <img src="/assets/images/banner/banner01.png" />
              </div>
              <div className="eGiftCardInfo">
                <p className="eGiftCardInfoTitle">안녕하세요 e-Gift</p>
                <p className="eGiftCardPrice">17,800원</p>
              </div>
              <div>
                <input type="radio" name="userCard" />
              </div>
            </div>

            <div className="eGiftCardWrap">
              <div className="eGiftCard2">
                <img src="/assets/images/icons/add.png" />
                <span>더보기</span>
              </div>
            </div>
          </div> */}

          <div className="radio-pd14-pd30">
            <input
              type="radio"
              name="pay"
              onClick={() => setPaymentType("CREDIT_CARD")}
            />{" "}
            신용카드
          </div>
        </div>
      </section>
      <PaymentInfoComponent
        prePurchaseProducts={prePurchaseProducts}
        discountFee={0}
        paymentInfo={paymentInfo}
        setPaymentInfo={setPaymentInfo}
      />
      <section id="pay-info">
        <div className="pay">
          <div className="pay-price">
            <p className="title">최종 결제 금액</p>
            <p className="title price">{paymentInfo.amountOfTotalPrice}원</p>
          </div>
        </div>
        <div className="notice">
          <div className="notice-box">
            위 주문 내용을 확인하였으며, 결제에 동의합니다.
            <br />
            (전자상거래법 8조 2항)
          </div>
        </div>
      </section>

      <section className="submit-container">
        <button type="submit" onClick={() => requestPaymentConfirm()}>
          {paymentInfo.amountOfTotalPrice}원 결제하기
        </button>
      </section>
    </>
  );
}
