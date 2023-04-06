import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartListType, cartType } from "@/Types/cart/cartListType";
import Swal from "sweetalert2";
import CartFooter from "@/components/page/cart/CartFooter";
import CartInfo from "@/components/page/cart/CartInfo";
import CartList from "@/components/page/cart/CartList";
import CartMenu from "@/components/page/cart/CartMenu";
import { cartListState } from "@/state/cart/atom/cartListState";
import Nodata from "@/components/ui/Nodata";
import { userLoginState } from "@/state/user/atom/userLoginState";
import { RequestCartGet } from "@/Service/CartService/CartService";
import LoginToAction from "@/components/page/mypage/loginToAction";

function Cart() {
  const router = useRouter();
  const isLogin = useRecoilValue(userLoginState);

  const setCartList = useSetRecoilState<cartType>(cartListState);
  const cartData = useRecoilValue<cartType>(cartListState);
  const [amountOfPrice, setAmountOfPrice] = useState(0);
  const [numOfProduct, setNumOfProduct] = useState(0);

  useEffect(() => {
    if (!isLogin.isLogin) {
      Swal.fire({
        text: "로그인이 필요한 서비스입니다!",
        color: "#fff",
        background: "#009b39",
        toast: true,
        showConfirmButton: false,
        position: "bottom",
        timer: 2000,
        timerProgressBar: true,
      });
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
      {!isLogin.isLogin ? (
        <LoginToAction />
      ) : (
        <>
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
      )}
    </>
  );
}

export default Cart;
