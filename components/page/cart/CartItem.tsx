import { cartListType, cartType } from "@/Types/cart/cartListType";
import EditCartItemModal from "@/components/modals/EditCartItemModal";
import { cartListState } from "@/state/cart/atom/cartListState";
import Link from "next/link";
import { useRouter } from "next/router";
import { SetStateAction, useState } from "react";
import { useRecoilState } from "recoil";

export default function CartItem(props: { data: cartListType }) {
  const router = useRouter();
  const [cartList, setCartList] = useRecoilState<cartType>(cartListState);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  const onClickPurchaseProduct = () => {
    const countOf = props.data.count;
    const productId = props.data.product.id;
    router.push(`/payment/product/product=${productId}&count=${countOf}`);
  };

  const handleCheck = () => {
    if (props.data.frozen) {
      setCartList({
        ...cartList,
        cartListFreeze: cartList.cartListFreeze.map((item: cartListType) => {
          if (item.id === props.data.id) {
            return { ...item, check: !item.check };
          }
          return item;
        }),
      });
    } else {
      setCartList({
        ...cartList,
        cartList: cartList.cartList.map((item: cartListType) => {
          if (item.id === props.data.id) {
            return { ...item, check: !item.check };
          }
          return item;
        }),
      });
    }
  };

  return (
    <div className="cart-product">
      <EditCartItemModal
        isModalOpen={isEditModalOpen}
        setIsModalOpen={setIsEditModalOpen}
        cartItemInfo={props.data}
      />
      <div
        className={props.data.check ? "sbCheckBoxOn" : "sbCheckBox"}
        onClick={handleCheck}
      ></div>
      <div className="itemLists">
        <div className="item-info">
          <img
            src={props.data.product.thumbnail}
            alt=""
            className="product-img"
          />
          <div className="itemNamePrice">
            <p className="name">{props.data.product.name}</p>
            <p className="price">
              {props.data.product.price.toLocaleString("ko-KR")}
            </p>
          </div>
          <Link href="#">
            <img
              src="./assets/images/icons/close.png"
              alt=""
              className="close-icon"
            />
          </Link>
        </div>
        <div className="count">
          <p>수량: {props.data.count}개</p>
        </div>
        <div className="item-price">
          <p>주문 금액</p>
          <p>
            {(props.data.product.price * props.data.count).toLocaleString(
              "ko-KR"
            )}
            원
          </p>
        </div>
        <div className="item-purchase">
          <a onClick={() => setIsEditModalOpen(true)}>주문 수정</a>
          <a onClick={() => onClickPurchaseProduct()}>바로 구매</a>
        </div>
      </div>
    </div>
  );
}
