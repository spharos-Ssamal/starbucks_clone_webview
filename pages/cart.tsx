import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useRecoilValue, useSetRecoilState } from "recoil";
import axios from "axios";
import { cartListType, cartType } from "@/Types/cart/cartListType";
import Swal from "sweetalert2";
import CartFooter from "@/components/page/cart/CartFooter";
import CartInfo from "@/components/page/cart/CartInfo";
import CartList from "@/components/page/cart/CartList";
import CartMenu from "@/components/page/cart/CartMenu";
import Config from "@/configs/config.export";
import { cartListState } from "@/state/cart/atom/cartListState";
import Nodata from "@/components/ui/Nodata";
import { REQUEST_CART_GET_ALL } from "@/constants/Apis/URL";
import { userLoginState } from "@/state/user/atom/userLoginState";
import { RequestCartGet } from "@/Service/CartService/CartService";

function Cart() {
  const router = useRouter();
  const isLogin = useRecoilValue(userLoginState);

  const baseUrl = Config().baseUrl;

  const setCartList = useSetRecoilState<cartType>(cartListState);
  const cartData = useRecoilValue<cartType>(cartListState);
  const [amountOfPrice, setAmountOfPrice] = useState(0);
  const [numOfProduct, setNumOfProduct] = useState(0);

  useEffect(() => {
    if (!isLogin.isLogin) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "로그인 페이지로 이동합니다",
      });

      router.push("/login");
    } else {
      RequestCartGet(isLogin.userId)
        .then((res) => {
          setCartList({
            cartListFreeze: res.data.filter(
              (item: cartListType) => item.frozen === true
            ),
            cartList: res.data.filter(
              (item: cartListType) => item.frozen === false
            ),
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <>
      <Head>
        <title>장바구니</title>
      </Head>

      {cartData &&
      cartData.cartList.length === 0 &&
      cartData.cartListFreeze.length === 0 ? (
        <section id="cart-header" style={{ paddingBottom: "50vh" }}>
          <p className="title">장바구니</p>
          <Nodata text="장바구니가 비었습니다." icon="cart" />
        </section>
      ) : (
        <>
          <CartMenu />
          <CartList />
          <CartInfo
            amountOfPrice={amountOfPrice}
            setAmountOfPrice={setAmountOfPrice}
            numOfProduct={numOfProduct}
            setNumOfProduct={setNumOfProduct}
          />
          <CartFooter
            amountOfPrice={amountOfPrice}
            numOfProduct={numOfProduct}
          />
        </>
      )}
    </>
  );
}

export default Cart;
