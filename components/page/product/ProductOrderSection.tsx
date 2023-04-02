import { useState, useRef } from "react";
import myStyle from "./ProductOrderSection.module.css";
import Sheet, { SheetRef } from "react-modal-sheet";
import Separator from "@/components/ui/Separator";
import {
  OrderButton,
  OrderButton35width,
  OrderButton38widthColorReverse,
  OrderToggleButton,
} from "@/components/ui/OrderButtonsPerSize";
import { useRouter } from "next/router";
import { RequestCartInsert } from "@/Service/CartService/CartService";
import { useRecoilValue } from "recoil";
import { userLoginState } from "@/state/user/atom/userLoginState";
import Swal from "sweetalert2";

interface Props {
  productId: number;
  productName: string;
  productPrice: number;
}

export default function ProductOrderSection(props: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [countOf, setCountOf] = useState(1);
  const router = useRouter();
  const isLogin = useRecoilValue(userLoginState);
  const ref = useRef<SheetRef>();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const onClickCount = (count: number) => {
    if (count >= 1 && count <= 3) {
      setCountOf(count);
    }
  };

  const onClickPurchase = () => {
    if (isLogin.isLogin) {
      router.push(
        `/payment/product/product=${props.productId}&count=${countOf}`
      );
    } else {
      Swal.fire({
        icon: "info",
        title: "알림!",
        text: "로그인 하세요!",
      });
      setIsOpen(false);
    }
  };

  const onClickCart = () => {
    if (isLogin.isLogin) {
      RequestCartInsert({
        userId: isLogin.userId,
        productId: props.productId,
        count: countOf,
      })
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "장바구니에 상품을 담았습니다.",
          });
          setIsOpen(false);
        })
        .catch((err) => {
          console.log(err);
          if (err.data === "ERROR-BR-004") {
            Swal.fire({
              icon: "error",
              title: "Error!",
              text: "장바구니에 상품이 가득 찼습니다.",
            });
          }
        });
    } else {
      Swal.fire({
        icon: "info",
        title: "알림!",
        text: "로그인 하세요!",
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <div
        className={
          isOpen ? myStyle.productOrderSectionOpen : myStyle.productOrderSection
        }
      >
        {!isOpen ? <OrderToggleButton onClick={handleOpen} /> : null}

        {!isOpen ? (
          <OrderButton onClick={handleOpen}>구매하기</OrderButton>
        ) : (
          <div className={myStyle.productOrderSectionOpenBottomWrap}>
            <img
              src="/assets/images/icons/shopping-cart.svg"
              onClick={onClickCart}
            />
            <OrderButton38widthColorReverse>
              선물하기
            </OrderButton38widthColorReverse>
            <OrderButton35width onClick={onClickPurchase}>
              구매하기
            </OrderButton35width>
          </div>
        )}
      </div>
      <Sheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        detent="content-height"
        style={{
          zIndex: 100,
        }}
      >
        <Sheet.Container>
          <Sheet.Content>
            <div
              style={{
                height: "300px",
                boxSizing: "border-box",
                paddingTop: "1rem",
              }}
            >
              <OrderToggleButton onClick={() => setIsOpen(false)} />
              <div className={myStyle.greyWrap}>
                <div className={myStyle.greyboxWrap}>
                  <div className={myStyle.greybox}>
                    <div className={myStyle.title}>{props.productName}</div>

                    <div className={myStyle.QtyCountWrap}>
                      <div className={myStyle.QtyCount}>
                        <img
                          src="/assets/images/icons/minus.png"
                          onClick={() => onClickCount(countOf - 1)}
                        />
                        {countOf}
                        <img
                          src="/assets/images/icons/add.png"
                          onClick={() => onClickCount(countOf + 1)}
                        />
                      </div>
                      <div className={myStyle.priceBold}>
                        {(props.productPrice * countOf).toLocaleString("KR-kn")}
                        원
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator color="lightgrey" gutter={0.6} />

              <div className={myStyle.bottomPriceWrap}>
                합계{" "}
                <span className={myStyle.rightBottomBoldPrice}>
                  {(props.productPrice * countOf).toLocaleString("KR-kn")}원
                </span>
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
}
