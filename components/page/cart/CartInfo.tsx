import { cartType } from "@/Types/cart/cartListType";
import { cartListState } from "@/state/cart/atom/cartListState";
import { cartState } from "@/state/cart/atom/cartState";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

interface Props {
  amountOfPrice: number;
  setAmountOfPrice: Dispatch<SetStateAction<number>>;
}

export default function CartInfo(props: Props) {
  const cartData = useRecoilValue<cartType>(cartListState);
  const [cartPrice, setCartPrice] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);

  const [cartAmount, setCartState] = useRecoilState(cartState);

  useEffect(() => {
    let shippingFeeCount = 0;
    const cartListPrice = cartData.cartList.reduce(
      (acc, cur) => acc + cur.product.price * cur.count,
      0
    );
    const cartListFrozenPrice = cartData.cartListFreeze.reduce(
      (acc, cur) => acc + cur.product.price * cur.count,
      0
    );
    setCartPrice(cartListPrice + cartListFrozenPrice);

    if (cartListPrice !== 0 && cartListPrice < 30000) {
      shippingFeeCount += 3000;
    }

    if (cartListFrozenPrice !== 0 && cartListFrozenPrice < 30000) {
      shippingFeeCount += 3000;
    }

    setShippingPrice(shippingFeeCount);
    props.setAmountOfPrice(
      cartListPrice + cartListFrozenPrice + shippingFeeCount
    );
    setCartState(cartData.cartList.length + cartData.cartListFreeze.length);
  }, [cartData]);

  return (
    <section id="total-cart-price">
      <div>
        <div className="title-total-price">총 주문 금액</div>
        <div className="prices">
          <div className="cart-price">
            <p>상품 금액</p>
            <p className="price"> {cartPrice.toLocaleString("ko-KR")}원</p>
          </div>
          <div className="cart-price">
            <p>할인 금액</p>
            <p className="price">0원</p>
          </div>
          <div className="cart-price">
            <p>배송비</p>
            <p className="price">{shippingPrice.toLocaleString("ko-KR")}원</p>
          </div>
        </div>
        <div className="total-price">
          <p>최종 결제 금액</p>
          <p className="price">
            {props.amountOfPrice.toLocaleString("ko-KR")}원
          </p>
        </div>
        <div className="notice">
          <div className="notice-box">
            장바구니에는 최대 20개까지 담을 수 있으며, 담긴 상품은 최대 2개월간
            보관됩니다.
            <br />
            가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.
          </div>
        </div>
      </div>
    </section>
  );
}
