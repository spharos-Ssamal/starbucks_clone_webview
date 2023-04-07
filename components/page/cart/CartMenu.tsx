import { RequestCartDelete } from "@/Service/CartService/CartService";
import { cartType } from "@/Types/cart/cartListType";
import { cartListState } from "@/state/cart/atom/cartListState";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Swal from "sweetalert2";

export default function CartMenu() {
  const [cartList, setCartList] = useRecoilState<cartType>(cartListState);
  const [listAllCheck, setListAllCheck] = useState(false);

  useEffect(() => {
    let check = true;
    let freezeCheck = true;
    cartList.cartList.find((item) => item.check === false)
      ? (check = false)
      : (check = true);
    cartList.cartListFreeze.find((item) => item.check === false)
      ? (freezeCheck = false)
      : (freezeCheck = true);
    if (check && freezeCheck) {
      setListAllCheck(true);
    } else {
      setListAllCheck(false);
    }
  }, [cartList]);

  const deleteCartItem = (list: number[]) => {
    Swal.fire({
      title: "알림",
      text: "정말 삭제하시겠습니까?",
      icon: "question",

      showCancelButton: true,
      confirmButtonColor: "#009b39",
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then((res) => {
      if (res.isConfirmed) {
        let cartListNow = cartList.cartList;
        let cartListFreezeNow = cartList.cartListFreeze;

        list.forEach(async (e) => {
          await RequestCartDelete(e)
            .then((res) => {
              const deletedId: number = res.data;
              console.log(deletedId);
              cartListNow = cartListNow.filter((e) => e.id !== deletedId);
              cartListFreezeNow = cartListFreezeNow.filter(
                (e) => e.id !== deletedId
              );
            })
            .then(() => {
              setCartList({
                ...cartList,
                cartList: cartListNow,
                cartListFreeze: cartListFreezeNow,
              });
            })
            .then(() => {
              Swal.fire({
                icon: "success",
                title: "성공!",
                text: "장바구니 상품을 삭제했습니다.",
                timer: 2000,
              });
            })
            .catch((ex) => console.log(ex));
        });
      }
    });
  };

  const onClickSelectDelete = () => {
    const selectList = cartList.cartList
      .filter((e) => e.check)
      .map((e) => e.id)
      .concat(cartList.cartListFreeze.filter((e) => e.check).map((e) => e.id));
    deleteCartItem(selectList);
  };

  const onClickDeleteAll = () => {
    const listOfCartItems = cartList.cartList
      .map((e) => e.id)
      .concat(cartList.cartListFreeze.map((e) => e.id));
    deleteCartItem(listOfCartItems);
  };

  const handleAllCheck = (check: boolean) => {
    setListAllCheck(!check);
    setCartList({
      ...cartList,
      cartList: cartList.cartList.map((item) => {
        return { ...item, check: !check };
      }),
      cartListFreeze: cartList.cartListFreeze.map((item) => {
        return { ...item, check: !check };
      }),
    });
  };

  return (
    <section id="cart-header">
      <p className="title">장바구니</p>
      <div className="cart-select">
        <div className="select-all">
          <div
            className={listAllCheck ? "sbCheckBoxOn" : "sbCheckBox"}
            onClick={() => handleAllCheck(listAllCheck)}
          ></div>
          <p className="cart-select-btn">전체선택</p>
        </div>
        <div className="selectDel">
          <p className="cart-select-btn" onClick={onClickSelectDelete}>
            선택삭제
          </p>
          <p className="cart-select-btn" onClick={onClickDeleteAll}>
            전체삭제
          </p>
        </div>
      </div>
    </section>
  );
}
