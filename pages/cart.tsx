import { cartListType, cartType } from "@/Types/cart/cartListType";
import CartFooter from "@/components/page/cart/CartFooter";
import CartHeader from "@/components/page/cart/CartHeader";
import CartInfo from "@/components/page/cart/CartInfo";
import CartList from "@/components/page/cart/CartList";
import CartMenu from "@/components/page/cart/CartMenu";
import { cartListState } from "@/state/cartListState";
import axios from "axios";
import Head from "next/head";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";


export default function Cart() {

  const setCartList = useSetRecoilState<cartType>(cartListState);

  useEffect(() => {
    axios.get(`http://localhost:8081/cartListByUser`)
    .then((res) => {     
      setCartList({
        cartListFreeze: res.data.filter((item:cartListType) => item.bigCategoryId === 1),
        cartList: res.data.filter((item:cartListType) => item.bigCategoryId !== 1)
      })
    }).catch((err) => {
      console.log(err)
    })
  },[])

  return(
    <>
    <Head>
      <title>장바구니</title>
      
    </Head>
    <div className="cart-container">
      <CartHeader />
      <CartMenu />
      <CartList />
      <CartInfo />
      <CartFooter />
    </div>
    </>
  );
}