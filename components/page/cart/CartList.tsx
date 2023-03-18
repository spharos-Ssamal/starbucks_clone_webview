import { cartListType } from '@/Types/cart/cartListType';
import { cartListState } from '@/state/cartListState';
import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import CartItem from './CartItem';

export default function CartList() {

  const [cartItems, setCartItems] = useRecoilState(cartListState);
  const [listAllCheck, setListAllCheck] = useState(false);
  const [listFreezeAllCheck, setListFreezeAllCheck] = useState(false);
  console.log(cartItems)

  useEffect(() => {
    let check = true
    let freezeCheck = true
    cartItems.cartList.find(item => item.check === false) ? check = false : check = true
    cartItems.cartListFreeze.find(item => item.check === false) ? freezeCheck = false : freezeCheck = true
    setListAllCheck(check)
    setListFreezeAllCheck(freezeCheck)
  },[cartItems])


  const handleCartListAllCheck = (check:boolean) => {
    setListAllCheck(!check)
    setCartItems({
      ...cartItems,
      cartList: cartItems.cartList.map((item:cartListType) => {
        return {...item, check: !check}
      })
    })
  }

  const handleFreezeCartListAllCheck = (check:boolean) => {
    setListFreezeAllCheck(!check)
    setCartItems({
      ...cartItems,
      cartListFreeze: cartItems.cartListFreeze.map((item:cartListType) => {
        return {...item, check: !check}
      })
    })
  }
  return (
    <section id="cart-list">
      
      <div className="select">
        <div className="select-items">
          <div className={listAllCheck ? 'sbCheckBoxOn':'sbCheckBox'} onClick={()=>handleCartListAllCheck(listAllCheck)}></div>
          <p>일반상품</p>
        </div>
      </div>
      {
        cartItems.cartList.map((item:cartListType) => (
          <CartItem 
            key={item.cartId}
            data={item} 
          />
        ))
      }

      { cartItems.cartListFreeze ? (
        <>
        <div className="select">
          <div className="select-items">
          <div className={listFreezeAllCheck ? 'sbCheckBoxOn':'sbCheckBox'} onClick={()=>handleFreezeCartListAllCheck(listFreezeAllCheck)}></div>
          <p>냉동상품</p>
          </div>
        </div>
        {
          cartItems.cartListFreeze.map((item:cartListType) => (
            <CartItem 
              key={item.cartId}
              data={item} 
            />
          ))
        }
        </>
      )
        : null
      }
      
    </section>
  )
}
