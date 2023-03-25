import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useRecoilValue, useSetRecoilState } from "recoil";
import axios from "axios";
import { cartListType, cartType } from "@/Types/cart/cartListType";
import Swal from "sweetalert2";
import CartFooter from "@/components/page/cart/CartFooter";
import CartHeader from "@/components/page/cart/CartHeader";
import CartInfo from "@/components/page/cart/CartInfo";
import CartList from "@/components/page/cart/CartList";
import CartMenu from "@/components/page/cart/CartMenu";
import Config from "@/configs/config.export";
import { cartListState } from "@/state/cart/atom/cartListState";
import { userIsLogin } from "@/state/user/atom/userIsLoginState";
import Nodata from "@/components/ui/Nodata";
import { REQUEST_CART_GET } from "@/constants/Apis/URL";

function Cart() {

  const router = useRouter();
  const isLogin = useRecoilValue(userIsLogin)

  const baseUrl = Config().baseUrl;

  const setCartList = useSetRecoilState<cartType>(cartListState);
  const cartData = useRecoilValue<cartType>(cartListState);

  useEffect(() => {
    axios.get(`${baseUrl}/${REQUEST_CART_GET}?userId=05a35a40-8d0b-49c6-9d39-fa93c010ee26`)
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
      text: '로그인 페이지로 이동합니다',
    }).then(function() {
    router.push('/login')
    return null;
    })
  }

  return(
    <>
    <Head>
      <title>장바구니</title>
    </Head>
    
    {
      cartData && cartData.cartList.length === 0 && cartData.cartListFreeze.length === 0 ? 
      <section id="cart-header" style={{paddingBottom: "50vh"}}>
        <p className="title">장바구니</p>
        <Nodata text="장바구니가 비었습니다." icon='cart'/> 
      </section>
      :
      <>
      <CartMenu />
      <CartList />
      <CartInfo />
      <CartFooter />
      </>
    }
      
    </>
  );
}

export default (Cart);