import { cartType } from "@/Types/cart/cartListType";
import { cartListState } from "@/state/cart/atom/cartListState";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilValue } from "recoil";

interface Prop {
  amountOfPrice: number;
  numOfProduct: number;
}

export default function CartFooter(prop: Prop) {
  const cartData = useRecoilValue<cartType>(cartListState);
  const router = useRouter();
  const onClickConfirmProduct = () => {
    const cartItemList = cartData.cartList
      .filter((e) => e.check)
      .map((e) => e.id)
      .concat(cartData.cartListFreeze.filter((e) => e.check).map((e) => e.id));
    console.log(cartItemList);
    router.push(`payment/cart/cartIds=${cartItemList}`);
  };

  return (
    <section className="submit-container">
      <div className="submit-box">
        <div className="cart-final">
          <p>
            총 <span>{prop.numOfProduct}</span>건 / 20건
          </p>
          <p className="price">
            {prop.amountOfPrice.toLocaleString("KO-kr")}원
          </p>
        </div>
        <div className="buttons">
          <button>선물하기</button>
          <button onClick={onClickConfirmProduct}>구매하기</button>
        </div>
      </div>
    </section>
  );
}
