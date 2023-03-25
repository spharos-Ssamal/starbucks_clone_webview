import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import { useRecoilValue } from 'recoil';
import { cartState } from "@/state/cart/atom/cartState";
import { headerIcons } from '@/data/starbucksStaticDatas';

export default function HeaderTopRightIcons() {

  const cartCnt = useRecoilValue(cartState)
  const [isSignupModalOpen, setIsSignupModalOpen] = useState<boolean>(false);

  return (
    <div>
      <nav>
          <ul>
            {headerIcons.map((icon) => (
              icon.name === 'mypage' ?
                  <li 
                    onClick={()=>setIsSignupModalOpen(true)}
                    key={icon.id}
                  >
                    <Image
                        src={icon.icon}
                        alt={icon.name}
                        width={20}
                        height={20}
                      />
                  </li>
                 
                : 

                icon.name === 'cart' ?

                <li key={icon.id}>
                  <Link href={icon.link}>
                  <p className="cart-badge">{cartCnt}</p>
                  <Image
                      src={icon.icon}
                      alt={icon.name}
                      width={20}
                      height={20}
                    />
                  </Link>
                </li>
              
                :
                  <li key={icon.id}>
                  <Link href={icon.link}>
                    <Image
                      src={icon.icon}
                      alt={icon.name}
                      width={20}
                      height={20}
                    />
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
    </div>
  )
}
