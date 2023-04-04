import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
// component
import SignupModal from "../modals/SignupModal";

import { useRecoilValue } from "recoil";
import { headerMenu } from "@/Types/starbucksTypes";

import { headerNavMenus } from "../../data/starbucksStaticDatas";
import { userIsLogin } from "@/state/user/atom/userIsLoginState";
import HeaderTopRightIcons from "../ui/HeaderTopRightIcons";

import HeaderBottomMenuList from "../ui/HeaderBottomMenuList";

// css lazy loading
import dynamic from "next/dynamic";
const SideMenuModal = dynamic(() => import("../modals/SideMenuModal"), {
  ssr: false,
});

function Header() {
  const isLogin = useRecoilValue(userIsLogin);

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
  ];

  const backButtonList = [
    "/store",
    "/product/[productId]",
    "/address",
    "/payment/[...paymentParam]",
    "/purchaseList",
    "/purchaseDetail/[historyId]",
    "/cart",
  ];

  const handlePushPage = () => {
    router.push("/login");
  };

  const handleSideMenuClose = () => {
    setIsSideMenuOpen(false);
  };

  

  return (
    <>
      {/* <LoginModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}
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
