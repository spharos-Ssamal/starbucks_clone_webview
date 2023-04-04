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

import { useEffect, useRef, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
  ORDER_BY_PRODUCT_ID_DESC,
  ORDER_BY_PRODUCT_PRICE_ASC,
  ORDER_BY_PRODUCT_PRICE_DESC,
} from "@/constants/enums/FilterOption";

export default function Store() {
  const router = useRouter();
  const [filterParams, setFilterParams] =
    useRecoilState<FilterParams>(storeFilterState);

  const resetFilterParams = useResetRecoilState(storeFilterState);

  const [products, setProducts] = useState<ProductInfo[]>([]);

  const [pageNo, setPageNo] = useState(0);
  const [sortOption, setSortOption] = useState<string>(
    ORDER_BY_PRODUCT_ID_DESC
  );

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

  const fecthProductData = (param: string) => {
    RequestProduct(param).then((res) => {
      console.log(res.data);
      if (res.data.pageNo === 0) {
        setProducts([...res.data.content]);
      } else {
        setProducts([...products, ...res.data.content]);
      }
      if (res.data.last) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    });
  };

  const generateQueryParams = () => {
    let queryUrl = "";
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

    queryUrl += `&page=${pageNo}&size=6&sort=${sortOption}`;
    return queryUrl;
  };

  useEffect(() => {
    const queryUrl = generateQueryParams();
    router.push("/store?" + queryUrl);
  }, [filterParams]);

  useEffect(() => {
    const queryParam = generateQueryParams();
    fecthProductData(queryParam);
  }, [pageNo, sortOption]);

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
    console.log("useEffect1");
  }, []);

  useEffect(() => {
    if (router.query.category) {
      if (
        router.query.category !== "1" &&
        typeof router.query.category === "string"
      ) {
        const subCategoryId = parseInt(router.query.category);

        RequestSubCategoryList(subCategoryId).then((res) => {
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

      console.log("useEffect2");
    }
  }, [router]);

  useEffect(() => {
    const param = router.asPath.slice(7, router.asPath.length);
    console.log(router.asPath);
    console.log(param);
    setPageNo(0);
    fecthProductData(param);
  }, [router.asPath]);

  const handleOnChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortOption(value);
    setPageNo(0);
  };

  const fetchData = () => {
    setPageNo(pageNo + 1);
  };

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
          setPageNo={setPageNo}
          setSortOption={setSortOption}
        />
        {sizeFilterData.length > 0 && (
          <SizeFilterList data={sizeFilterData} setPageNo={setPageNo} />
        )}
        <PriceFilterList setPageNo={setPageNo} />
        {subFilterMenuData.length > 0 && (
          <SubCategoryList data={subFilterMenuData} setPageNo={setPageNo} />
        )}
        <SeasonFilterList data={seasonMenuData} setPageNo={setPageNo} />
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
            <option value={ORDER_BY_PRODUCT_ID_DESC}>신상품순</option>
            <option value={ORDER_BY_PRODUCT_PRICE_ASC}>낮은가격순</option>
            <option value={ORDER_BY_PRODUCT_PRICE_DESC}>높은가격순</option>
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
