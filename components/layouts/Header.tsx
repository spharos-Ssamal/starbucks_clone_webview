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
import { SearchModal } from "../modals/SearchModal";
import FilterMenuList from "../ui/FilterMenuList";
import { MenuDataType, filterDataType } from "@/Types/filter/filterTypes";
import HeaderBottomMenuList from "../ui/HeaderBottomMenuList";

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
  const [filterMenuData, setFilterMenuData] = useState<MenuDataType[]>([]);
  const [subFilterMenuData, setSubFilterMenuData] = useState<MenuDataType[]>(
    []
  );

  const [filterData, setFilterDatas] = useState<filterDataType[]>([]);

  useEffect(() => {
    if (filterData.length > 0) {
      console.log("필터링데이터", filterData);
      let queryUrl = "";
      filterData.forEach((item) => {
        queryUrl += `&${item.key}=${item.id}`;
      });
      router.push(`/store?category=${router.query.category}${queryUrl}`);
    }
    // console.log(menuList);
  }, [filterData]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/category/subCategories?categoryId=1`)
      .then((res) => {
        let myData: MenuDataType[] = [];
        res.data.data.subCategories.forEach((item: headerMenu) => {
          myData.push({
            id: item.id,
            name: item.name,
            key: "category",
          });
        });
        setFilterMenuData(myData);
      });
  }, []);

  useEffect(() => {
    if (query.category && query.category !== "1") {
      axios
        .get(
          `${baseUrl}/api/v1/category/subCategories?categoryId=${query.category}`
        )
        .then((res) => {
          let myData: MenuDataType[] = [];
          res.data.data.subCategories.forEach((item: headerMenu) => {
            myData.push({
              id: item.id,
              name: item.name,
              key: "subCategory",
            });
          });
          setSubFilterMenuData(myData);
        });
    }
  }, [query]);

  const exceptionList = [
    "/product/[productId]",
    "/cart",
    "/address",
    "/addressRegister",
    "/addressChange",
    "/purchaseList",
    "/payment",
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
        {pathname === "/store" ? (
          <>
            <FilterMenuList
              data={filterMenuData}
              filterFile={filterData}
              setFilter={setFilterDatas}
            />
            {subFilterMenuData.length > 0 && (
              <FilterMenuList
                data={subFilterMenuData}
                filterFile={filterData}
                setFilter={setFilterDatas}
              />
            )}
          </>
        ) : exceptionList.includes(pathname, 0) ? null : (
          <HeaderBottomMenuList data={headerMenus} />
        )}
      </header>
    </>
  );
}

export default Header;
