import { cartListType, cartType } from '@/Types/cart/cartListType'
import { cartListState } from '@/state/cartListState'
import Link from 'next/link'
import { useRecoilState } from 'recoil'

export default function CartItem(props:{data:cartListType}) {

  const [cartList, setCartList] = useRecoilState<cartType>(cartListState)

  const handleCheck = () => {
    if(props.data.bigCategoryId === 1) {
      setCartList(
        { ...cartList, 
          cartListFreeze: cartList.cartListFreeze.map((item:cartListType) => {
            if(item.cartId === props.data.cartId) {
              return {...item, check: !item.check}
            }
            return item
          })      
        })
    } else {
      setCartList(
        { ...cartList, 
          cartList: cartList.cartList.map((item:cartListType) => {
            if(item.cartId === props.data.cartId) {
              return {...item, check: !item.check}
            }
            return item
          })      
        })
    }
  }
  
  return (
    <div className="cart-product">
        <div className={props.data.check ?'sbCheckBoxOn':'sbCheckBox'} onClick={handleCheck}></div>
        <div>
          <div className="item-info">
            <img src="./assets/images/products/cake.jpg" alt="" className="product-img" />
            <div>
              <p className="name">부드러운 고구마 생크림 케이크</p>
              <p className="price">33,000원</p>
            </div>
            <Link href="#"><img src="./assets/images/icons/close.png" alt="" className="close-icon" /></Link>
          </div>
          <div className="count">
            <p>수량: 1개</p>
          </div>
          <div className="item-price">
            <p>주문 금액</p>
            <p>33,000원</p>
          </div>
          <div className="item-purchase">
            <a href="">
              주문 수정
            </a>
            <a href="">바로 구매</a>
          </div>
        </div>
      </div>
  )
}
