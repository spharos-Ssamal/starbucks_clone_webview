import { headerMenu } from "@/Types/starbucksTypes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { headerNavMenus, headerIcons } from "../../data/starbucksStaticDatas";
import LoginModal from "../modals/LoginModal";
import SignupModal from "../modals/SignupModal";
import { useRecoilValue } from "recoil";
import { cartState } from "../../state/cartState";


function Header() {
  const { pathname } = useRouter();
  const productPath = pathname.split("/")[1];
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState<boolean>(false);
  const [headerMenus, setHeaderMenus] = useState<headerMenu[]>(headerNavMenus);

  const cartCnt = useRecoilValue(cartState)

  console.log(isModalOpen)
  return (
    <>
    <LoginModal 
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
    />
    <SignupModal 
      isSignupModalOpen={isSignupModalOpen}
      setIsSignupModalOpen={setIsSignupModalOpen}
    />
    <header>
      <div className="header-top">
        <div className="menu-icon" onClick={()=>setIsModalOpen(true)}>
          <Image
            src="/assets/images/icons/menu.svg"
            alt="menu"
            width={20}
            height={20}
          />
        </div>
        <h1>
          <Link href="/">온라인 스토어</Link>
        </h1>
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
      {productPath === "product" ? null : (
        <div className="header-bottom">
          <nav>
            <ul>
              {headerMenus.map((menu) => (
                <li
                  key={menu.id}
                  className={pathname === menu.link ? "active" : ""}
                >
                  <Link href={menu.link}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  </>
  );
}

export default Header;
