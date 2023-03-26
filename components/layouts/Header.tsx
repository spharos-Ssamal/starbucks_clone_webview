import { ChangeEvent, EventHandler, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
// component
import LoginModal from "../modals/LoginModal";
import SignupModal from "../modals/SignupModal";
import SideMenuModal from "../modals/SideMenuModal";
// recoil
import { useRecoilValue, useSetRecoilState } from "recoil";
import { headerMenu } from "@/Types/starbucksTypes";
import {
  filterMenuType,
  filterSubCategoryType,
  filterType,
  sizeType,
  smallCategoryType,
} from "@/Types/header/filterType";

import axios from "axios";
import Config from "@/configs/config.export";
import {
  headerNavMenus,
  headerIcons,
  categoryList,
} from "../../data/starbucksStaticDatas";
import { userIsLogin } from "@/state/user/atom/userIsLoginState";
import HeaderTopRightIcons from "../ui/HeaderTopRightIcons";

function Header() {
  const baseUrl = Config().baseUrl;
  const setIsLogin = useSetRecoilState(userIsLogin);

  // if(myStorage.getItem('accessToken')) {
  //   setIsLogin(true)
  // }

  const isLogin = useRecoilValue(userIsLogin);

  const router = useRouter();
  const { pathname, query } = useRouter();
  const productPath = pathname.split("/")[1];

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState<boolean>(false);
  const [headerMenus, setHeaderMenus] = useState<headerMenu[]>(headerNavMenus);

  const [filterList, setFilterList] = useState<filterType[]>([]);

  const handleFilter = (name: String) => {
    setFilterList([]);
    router.push(`/listview?category=${name}`);
  };

  const handleSubFilter = (event: ChangeEvent<HTMLInputElement>) => {
    let checker = filterList.find(
      (filter) => filter.value === event.target.value
    );
    if (checker?.checked === true && event.target.checked === false) {
      let newList = filterList.filter(
        (filter) => filter.value !== event.target.value
      );
      setFilterList(newList);
    } else {
      setFilterList([
        ...filterList,
        {
          name: event.target.name,
          value: event.target.value,
          checked: event.target.checked,
        },
      ]);
    }
  };

  const handlePushPage = () => {
    router.push("/login");
  };

  const handleSideMenuClose = () => {
    setIsSideMenuOpen(false);
  };

  return (
    <>
      <LoginModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
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
          {pathname === "/store" ? (
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
        {pathname === "/product/[productId]" ||
        pathname === "/cart" ||
        pathname === "/search" ||
        pathname === "/store" ? null : (
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
