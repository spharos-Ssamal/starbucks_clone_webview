import { cartListType } from "@/Types/cart/cartListType";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  cartItemInfo: cartListType;
}

export default function EditCartItemModal(props: Props) {
  const [countOf, setCountOf] = useState(0);

  useEffect(() => {
    setCountOf(props.cartItemInfo.count);
  }, [props]);

  const onClickCount = (count: number) => {
    if (count >= 1 && count <= 3) {
      setCountOf(count);
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
                <button>확인</button>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
