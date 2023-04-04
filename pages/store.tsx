import { RequestSubCategoryList } from "@/Service/CategoryService/CategoryService";
import { RequestProduct } from "@/Service/ProductService/ProductService";
import { getSeasonInfo } from "@/Service/SeasonService/SeasonService";
import { ProductInfo } from "@/Types/Product/Request";
import { FilterParams, MenuDataType } from "@/Types/filter/filterTypes";
import { headerMenu } from "@/Types/starbucksTypes";
import CategoryMenuList from "@/components/page/store/CategoryMenuList";
import PriceFilterList from "@/components/page/store/PriceFilterList";
import SeasonFilterList from "@/components/page/store/SeasonFilterList";
import SizeFilterList from "@/components/page/store/SizeFilterList";
import SubCategoryList from "@/components/page/store/SubCategoryList";
import ProductCard from "@/components/ui/ProductCard";
import { storeFilterState } from "@/state/store/atom/storeFilterState";
import Head from "next/head";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroll-component";

import { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";


export default function Store() {
  const router = useRouter();
  const [filterParams, setFilterParams] =
    useRecoilState<FilterParams>(storeFilterState);

  const resetFilterParams = useResetRecoilState(storeFilterState);

  const [products, setProducts] = useState<ProductInfo[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const [filterMenuData, setFilterMenuData] = useState<MenuDataType[]>([]);
  const [sizeFilterData, setSizeFilterData] = useState<MenuDataType[]>([]);
  const [subFilterMenuData, setSubFilterMenuData] = useState<MenuDataType[]>(
    []
  );
  const [seasonMenuData, setSeasonMenuData] = useState<MenuDataType[]>([]);

  const fetchSeasonData = () => {
    getSeasonInfo()
      .then((res) => {
        setSeasonMenuData([...res.data.seasonInfo]);
      })
      .catch((ex) => {
        console.log(ex);
      });
  };

  const generateQueryParams = () => {
    let queryUrl = "/store?";
    console.log("filterParams");
    console.log(filterParams);
    queryUrl += `category=${filterParams.category}`;
    if (filterParams.subCategories.length > 0) {
      filterParams.subCategories.forEach(
        (e) => (queryUrl += `&subCategories=${e}`)
      );
    }

    if (filterParams.seasons.length > 0) {
      filterParams.seasons.forEach((e) => (queryUrl += `&seasons=${e}`));
    }

    if (filterParams.productSize.length > 0) {
      filterParams.productSize.forEach(
        (e) => (queryUrl += `&productSize=${e}`)
      );
    }

    queryUrl += `&priceStart=${filterParams.priceValue.priceStart}`;

    queryUrl += `&priceEnd=${filterParams.priceValue.priceEnd}`;

    queryUrl += `&page=${filterParams.page}&size=${filterParams.size}&sort=${filterParams.sort}`;
    router.push(queryUrl);
  };

  useEffect(() => {
    generateQueryParams();
  }, [filterParams]);

  useEffect(() => {
    resetFilterParams();
    fetchSeasonData();
    setFilterMenuData([
      {
        id: 1,
        name: "전체",
        key: "category",
      },
    ]);
    RequestSubCategoryList(1).then((res) => {
      let myData: MenuDataType[] = [];
      res.data.subCategories.forEach((item: headerMenu) => {
        myData.push({
          id: item.id,
          name: item.name,
          key: "category",
        });
      });
      setFilterMenuData((filterMenuData) => [...filterMenuData, ...myData]);
    });
    setFilterParams({
      ...filterParams,
      category: 1,
    });
  }, []);

  useEffect(() => {
    if (
      router.query.category &&
      router.query.category !== "1" &&
      typeof router.query.category === "string"
    ) {
      console.log(router.query.category);
      const subCategoryId = parseInt(router.query.category);

      RequestSubCategoryList(subCategoryId).then((res) => {
        console.log(res.data);
        let myData: MenuDataType[] = [];
        res.data.subCategories.forEach((item: headerMenu) => {
          myData.push({
            id: item.id,
            name: item.name,
            key: "subCategory",
          });
        });

        if (res.data.sizeInfo !== undefined) {
          setSizeFilterData([...res.data.sizeInfo]);
        } else {
          setSizeFilterData([]);
        }
        setSubFilterMenuData(myData);
      });
    } else if (router.query.category === "1") {
      setSubFilterMenuData([]);
      setSizeFilterData([]);
    }
    fetchSeasonData();
  }, [router]);

  useEffect(() => {
    const param = router.asPath.slice(7, router.asPath.length);

    RequestProduct(param).then((res) => {
      setProducts([...res.data.content]);
    });
  }, [router.asPath]);

  const handleOnChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilterParams({
      ...filterParams,
      sort: value,
    });
  };

  const fetchData = () => {
    // 기존 데이터에 페이지 1 추가해서 서버에 요청
    const param = router.asPath.slice(7, router.asPath.length);
    // 여기에 페이지 값 증가된 값

    RequestProduct(param).then((res) => {
      setProducts([...products, ...res.data.content]);
      // 마지막 페이지인경우에 아래의 코드를 실행
      if (res.data.last) {
        setHasMore(false);
      }
    });

  }

  return (
    <>
      <Head>
        <title>상품 조회</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          margin: "50px 0 0 0",
        }}
      >
        <CategoryMenuList
          data={filterMenuData}
          generateQueryParams={generateQueryParams}
        />
        {sizeFilterData.length > 0 && (
          <SizeFilterList
            data={sizeFilterData}
            generateQueryParams={generateQueryParams}
          />
        )}
        <PriceFilterList generateQueryParams={generateQueryParams} />
        {subFilterMenuData.length > 0 && (
          <SubCategoryList
            data={subFilterMenuData}
            generateQueryParams={generateQueryParams}
          />
        )}
        <SeasonFilterList
          data={seasonMenuData}
          generateQueryParams={generateQueryParams}
        />
      </div>
      <div className="searchResultContent">
        <div className="searchResult-filter" id="search-result-filter">
          <img src="/assets/images/icons/reload.png" />
          <button>
            <p>체리블라썸</p>
            <img className="close-icon" src="/assets/images/icons/close.png" />
          </button>
          <button>
            <p>1만원대</p>
            <img className="close-icon" src="/assets/images/icons/close.png" />
          </button>
        </div>
        <div className="content-order">
          <select id="xyz" onChange={handleOnChangeSelect}>
            <option value={"product.id,DESC"}>신상품순</option>
            <option value={"product.price,ASC"}>낮은가격순</option>
            <option value={"product.price,DESC"}>높은가격순</option>
          </select>
        </div>
        <section className="searchResultProduct">
          
          <InfiniteScroll
            dataLength={products.length}
            next={fetchData}
            style={{ display: "flex", flexDirection: "column-reverse" }}
            hasMore={hasMore}
            loader={<h4>loading</h4>}
          >
            <div className="product-container">
            {products &&
              products.map((element, idx) => (
                <ProductCard
                  key={"product " + element.id + idx}
                  productId={element.id}
                  imageSrc={element.thumbnail}
                  productTitle={element.name}
                  productPrice={`${element.price}`}
                />
              ))}
              </div>
            </InfiniteScroll>
        </section>
      </div>
    </>
  );
}
