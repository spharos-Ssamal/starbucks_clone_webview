import { cartListType, cartType } from "@/Types/cart/cartListType";
import CartFooter from "@/components/page/cart/CartFooter";
import CartHeader from "@/components/page/cart/CartHeader";
import CartInfo from "@/components/page/cart/CartInfo";
import CartList from "@/components/page/cart/CartList";
import CartMenu from "@/components/page/cart/CartMenu";
import axios from "axios";
import Head from "next/head";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styles from "./cart.module.css";
import Config from "@/configs/config.export";
import { cartListState } from "@/state/cart/atom/cartListState";
import withAuth from "@/util/withAuth";
import { useRouter } from "next/router";
import { userIsLogin } from "@/state/user/atom/userIsLoginState";
import Swal from "sweetalert2";

function Cart() {

  const router = useRouter();
  const isLogin = useRecoilValue(userIsLogin)

  const baseUrl = Config().baseUrl;

  const setCartList = useSetRecoilState<cartType>(cartListState);

  useEffect(() => {
    axios.get(`${baseUrl}api/v1/cart/get?userId=05a35a40-8d0b-49c6-9d39-fa93c010ee26`)
    .then((res) => {    
      console.log(res.data) 
      setCartList({
        cartListFreeze: res.data.data.filter((item:cartListType) => item.frozen === true),
        cartList: res.data.data.filter((item:cartListType) => item.frozen === false)
      })
    }).catch((err) => {
      console.log(err)
    })
  },[])

  if(!isLogin) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You must login first!',
    })
    return null;
  }

  return(
    <>
    <Head>
      <title>장바구니</title>
      
    </Head>
      <CartHeader />
      <CartMenu />
      <CartList />
      <CartInfo />
      <CartFooter />
    </>
  );
}

export default (Cart);