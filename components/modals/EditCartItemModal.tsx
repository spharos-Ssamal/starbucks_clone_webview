import { RequestCartUpdate } from "@/Service/CartService/CartService";
import { cartListType, cartType } from "@/Types/cart/cartListType";
import { cartListState } from "@/state/cart/atom/cartListState";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Swal from "sweetalert2";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  cartItemInfo: cartListType;
}

export default function EditCartItemModal(props: Props) {
  const [countOf, setCountOf] = useState(0);
  const [cartData, setCartData] = useRecoilState<cartType>(cartListState);

  useEffect(() => {
    setCountOf(props.cartItemInfo.count);
  }, [props]);

  const onClickCount = (count: number) => {
    if (count >= 1 && count <= 3) {
      setCountOf(count);
    }
  };

  const updateProductItemCountRequest = () => {
    RequestCartUpdate({
      cartId: props.cartItemInfo.id,
      count: countOf,
    }).then((res) => {
      const resultCartId = res.data;

      props.setIsModalOpen(false);
    });
  };

  const onClickConfirm = () => {
    if (
      cartData.cartList.findIndex((e) => e.id === props.cartItemInfo.id) !== -1
    ) {
      updateProductItemCountRequest();
      setCartData({
        ...cartData,
        cartList: cartData.cartList.map((element) => {
          if (element.id === props.cartItemInfo.id) {
            return {
              id: element.id,
              frozen: element.frozen,
              count: countOf,
              check: element.check,
              product: element.product,
            };
          } else {
            return element;
          }
        }),
      });

      Swal.fire({
        icon: "success",
        text: "데이터가 변경 되었습니다.",
      });
    } else if (
      cartData.cartListFreeze.findIndex(
        (e) => e.id === props.cartItemInfo.id
      ) !== -1
    ) {
      updateProductItemCountRequest();
      setCartData({
        ...cartData,
        cartListFreeze: cartData.cartListFreeze.map((element) => {
          if (element.id === props.cartItemInfo.id) {
            return {
              id: element.id,
              frozen: element.frozen,
              count: countOf,
              check: element.check,
              product: element.product,
            };
          } else {
            return element;
          }
        }),
      });

      Swal.fire({
        icon: "success",
        text: "데이터가 변경 되었습니다.",
      });
      props.setIsModalOpen(false);
    }
  };

  return (
    <>
      {props.isModalOpen && (
        <div className="modalWrap">
          <header id="store-head">
            <div className="store-header-top">
              <div className="menu-icon"></div>
              <h1>
                <a href="">주문 수정</a>
              </h1>
              <nav>
                <ul>
                  <li>
                    <img
                      src="/assets/images/icons/close.png"
                      onClick={() => props.setIsModalOpen(false)}
                    />
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <section id="item-change">
            <img src={props.cartItemInfo.product.thumbnail} alt="" />
            <div>
              <p>{props.cartItemInfo.product.name}</p>
              <p>{props.cartItemInfo.product.price}원</p>
            </div>
          </section>
          <section id="change-quantity">
            <div>
              <p>상품 주문 수량</p>
              <div className="change">
                <div className="quantity">
                  <img
                    src="/assets/images/icons/minus.png"
                    alt=""
                    onClick={() => onClickCount(countOf - 1)}
                  />
                  <div>{countOf}</div>
                  <img
                    src="/assets/images/icons/add.png"
                    alt=""
                    onClick={() => onClickCount(countOf + 1)}
                  />
                </div>
                <p>{countOf * props.cartItemInfo.product.price}원</p>
              </div>
            </div>
          </section>
          <section className="submit-container">
            <div className="submit-box">
              <div className="change-final">
                <p>주문금액</p>
                <p className="price">
                  합계{" "}
                  <span>{countOf * props.cartItemInfo.product.price}원</span>
                </p>
              </div>
              <div className="buttons">
                <button onClick={() => props.setIsModalOpen(false)}>
                  취소
                </button>
                <button onClick={() => onClickConfirm()}>확인</button>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
