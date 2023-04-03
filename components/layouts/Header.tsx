import { ChangeEvent, EventHandler, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
// component
import SignupModal from "../modals/SignupModal";
import SideMenuModal from "../modals/SideMenuModal";
// recoil
import { useRecoilValue, useSetRecoilState } from "recoil";
import { headerMenu } from "@/Types/starbucksTypes";

import axios from "axios";
import Config from "@/configs/config.export";
import { headerNavMenus } from "../../data/starbucksStaticDatas";
import { userIsLogin } from "@/state/user/atom/userIsLoginState";
import HeaderTopRightIcons from "../ui/HeaderTopRightIcons";

import { MenuDataType, filterDataType } from "@/Types/filter/filterTypes";
import HeaderBottomMenuList from "../ui/HeaderBottomMenuList";
import CategoryMenuList from "../page/store/CategoryMenuList";
import SubCategoryList from "../page/store/SubCategoryList";
import { getSeasonInfo } from "@/Service/SeasonService/SeasonService";
import SeasonFilterList from "../page/store/SeasonFilterList";

function Header() {
  const baseUrl = Config().baseUrl;

  const isLogin = useRecoilValue(userIsLogin);

  const router = useRouter();
  const { pathname, query } = useRouter();
  const productPath = pathname.split("/")[1];
  const [category, setCategory] = useState(1);
  const [subCategory, setSubCategory] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState<boolean>(false);
  const [headerMenus, setHeaderMenus] = useState<headerMenu[]>(headerNavMenus);
  const [filterMenuData, setFilterMenuData] = useState<MenuDataType[]>([]);
  const [subFilterMenuData, setSubFilterMenuData] = useState<MenuDataType[]>(
    []
  );
  const [seasonMenuData, setSeasonMenuData] = useState<MenuDataType[]>([]);

  const [filterData, setFilterDatas] = useState<filterDataType[]>([]);

  const fetchSeasonData = () => {
    getSeasonInfo()
      .then((res) => {
        setSeasonMenuData([...res.data.seasonInfo]);
      })
      .catch((ex) => {
        console.log(ex);
      });
  };

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
    fetchSeasonData();
    setFilterMenuData([
      {
        id: 1,
        name: "전체",
        key: "category",
      },
    ]);

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
        setFilterMenuData((filterMenuData) => [...filterMenuData, ...myData]);
      });
    setCategory(1);
  }, []);

  useEffect(() => {
    if (
      query.category &&
      query.category !== "1" &&
      typeof query.category === "string"
    ) {
      const subCategory: string = query.category;
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
          setSubCategory(parseInt(subCategory));
        });
    } else if (query.category === "1") {
      setSubFilterMenuData([]);
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
            <CategoryMenuList
              setCategory={setCategory}
              data={filterMenuData}
              filterFile={filterData}
              setFilter={setFilterDatas}
            />
            {subFilterMenuData.length > 0 && (
              <SubCategoryList
                category={category}
                data={subFilterMenuData}
                filterFile={filterData}
                setFilter={setFilterDatas}
              />
            )}
            <SeasonFilterList
              data={seasonMenuData}
              setFilter={setFilterDatas}
            />
          </>
        ) : exceptionList.includes(pathname, 0) ? null : (
          <HeaderBottomMenuList data={headerMenus} />
        )}
      </header>
    </>
  );
}

export default Header;
