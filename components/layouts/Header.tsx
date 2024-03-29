import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
// component
import SignupModal from "../modals/SignupModal";

import { useRecoilState, useRecoilValue } from "recoil";
import { headerMenu } from "@/Types/starbucksTypes";

import { headerNavMenus } from "../../data/starbucksStaticDatas";
import HeaderTopRightIcons from "../ui/HeaderTopRightIcons";

import HeaderBottomMenuList from "../ui/HeaderBottomMenuList";
import SideMenuModal from "../modals/SideMenuModal";
import CongratulationAnimation from "../modals/CongratulationAnimation";
import { userLoginState } from "@/state/user/atom/userLoginState";
import { cartState } from "@/state/cart/atom/cartState";
import { cartListState } from "@/state/cart/atom/cartListState";
import { cartType } from "@/Types/cart/cartListType";

// css lazy loading
// import dynamic from "next/dynamic";
// const SideMenuModal = dynamic(() => import("../modals/SideMenuModal"), {
//   ssr: false,
// });

function Header() {

  const [cartAmount, setCartState] = useRecoilState(cartState);
  const cartData = useRecoilValue<cartType>(cartListState);

  const router = useRouter();
  const { pathname, query } = useRouter();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState<boolean>(false);
  const [headerMenus, setHeaderMenus] = useState<headerMenu[]>(headerNavMenus);

  const exceptionList = [
    "/product/[productId]",
    "/cart",
    "/address",
    "/addressRegister",
    "/addressChange",
    "/purchaseList",
    "/payment",
    "/store",
    "/productSearch/[...searchParam]",
  ];

  const backButtonList = [
    "/store",
    "/product/[productId]",
    "/address",
    "/payment/[...paymentParam]",
    "/purchaseList",
    "/purchaseDetail/[historyId]",
    "/cart",
    "/productSearch/[...searchParam]",
  ];

  const handleSideMenuClose = () => {
    setIsSideMenuOpen(false);
  };

  useEffect(() => {
    setCartState(cartData.cartList.length + cartData.cartListFreeze.length);
  }, []);

  return (
    <>
      <SignupModal
        isSignupModalOpen={isSignupModalOpen}
        setIsSignupModalOpen={setIsSignupModalOpen}
      />
      <SideMenuModal
        isModalOpen={isSideMenuOpen}
        closeModal={handleSideMenuClose}
      />
      
      <header>
        <div className="header-top">
          {backButtonList.includes(pathname, 0) ? (
            <div className="menu-icon" onClick={() => router.back()}>
              <Image
                src="/assets/images/icons/left.png"
                alt="menu"
                width={20}
                height={20}
              />
            </div>
          ) : (
            <div className="menu-icon" onClick={() => setIsSideMenuOpen(true)}>
              <Image
                src="/assets/images/icons/menu.svg"
                alt="menu"
                width={20}
                height={20}
              />
            </div>
          )}
          <h1>
            <Link href="/">온라인 스토어</Link>
          </h1>
          <HeaderTopRightIcons />
        </div>
        {exceptionList.includes(pathname, 0) ? null : (
          <HeaderBottomMenuList data={headerMenus} />
        )}
      </header>
    </>
  );
}

export default Header;
