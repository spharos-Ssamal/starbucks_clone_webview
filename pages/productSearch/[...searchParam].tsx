import { RequestSubCategoryList } from "@/Service/CategoryService/CategoryService";
import {
  RequestCategoryAggregationHashTag,
  RequestCategoryAggregationName,
  RequestProduct,
  RequestProductUsingHashtag,
  RequestProductUsingName,
} from "@/Service/ProductService/ProductService";
import { getSeasonInfo } from "@/Service/SeasonService/SeasonService";
import { ProductInfo } from "@/Types/Product/Request";
import { searchParams, MenuDataType } from "@/Types/filter/filterTypes";
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
import { useRecoilState } from "recoil";
import {
  ORDER_BY_PRODUCT_ID_DESC,
  ORDER_BY_PRODUCT_PRICE_ASC,
  ORDER_BY_PRODUCT_PRICE_DESC,
} from "@/constants/enums/FilterOption";
import {
  SEARCH_OPTION_STORE,
  SEARCH_OPTION_PRODUCT_NAME,
  SEARCH_OPTION_PRODUCT_HASHTAG,
} from "@/constants/enums/SearchOption";
import {
  CategoryAggregationRes,
  SearchProductRes,
} from "@/Types/Product/Response";
import SearchCategoryMenuList from "@/components/page/store/SearchCategoryMenuList";
import Nodata from "@/components/ui/Nodata";

export default function ProductLookup() {
  const router = useRouter();
  const [filterParams, setFilterParams] =
    useRecoilState<searchParams>(storeFilterState);

  const [categoryAggregation, setCategoryAggregation] = useState<
    CategoryAggregationRes[]
  >([]);

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

  const setProductsFromSearchResults = (result: SearchProductRes) => {
    if (result.pageNo === 0) {
      setProducts([...result.content]);
    } else {
      setProducts([...products, ...result.content]);
    }

    if (result.last) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }
  };

  const fetchSeasonData = () => {
    getSeasonInfo()
      .then((res) => {
        console.log(res);
        setSeasonMenuData([...res.data.seasonInfo]);
      })
      .catch((ex) => {
        console.log(ex);
      });
  };

  const fetchProductData = (param: string) => {
    console.log(param);
    if (filterParams.searchOption === SEARCH_OPTION_STORE) {
      fetchProductDataInStore(param);
    } else if (filterParams.searchOption === SEARCH_OPTION_PRODUCT_NAME) {
      fetchProductDataUsingProductName(param);
    } else if (filterParams.searchOption === SEARCH_OPTION_PRODUCT_HASHTAG) {
      fetchProductDataUsingHashtag(param);
    }
  };

  const fetchProductDataInStore = (param: string) => {
    RequestProduct(param).then((res) => {
      const result: SearchProductRes = res.data;
      setProductsFromSearchResults(result);
    });
  };

  const fetchProductDataUsingProductName = (param: string) => {
    if (param.includes("productName", 0)) {
      RequestProductUsingName(param).then((res) => {
        const result: SearchProductRes = res.data;
        setProductsFromSearchResults(result);
      });
    }
  };

  const fetchProductDataUsingHashtag = (param: string) => {
    if (param.includes("hashtagName"))
      RequestProductUsingHashtag(param).then((res) => {
        const result: SearchProductRes = res.data;
        setProductsFromSearchResults(result);
      });
  };

  const getCategoryAggregationByName = (searchData: string) => {
    RequestCategoryAggregationName(searchData).then((res) => {
      const result: CategoryAggregationRes[] = res.data;
      setCategoryAggregation([
        { categoryId: 1, categoryName: "전체" },
        ...result,
      ]);
    });
  };

  const getCategoryAggregationByHashtag = (searchData: string) => {
    RequestCategoryAggregationHashTag(searchData).then((res) => {
      const result: CategoryAggregationRes[] = res.data;
      setCategoryAggregation([
        { categoryId: 1, categoryName: "전체" },
        ...result,
      ]);
    });
  };

  const setupAllCategories = () => {
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
    console.log("setup All categories");
  };

  const setupSubCategoryFilter = (subCategoryId: number) => {
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
  };

  const generateQueryParams = () => {
    let queryUrl = "";

    if (filterParams.searchOption !== SEARCH_OPTION_STORE) {
      if (filterParams.searchOption === SEARCH_OPTION_PRODUCT_NAME) {
        queryUrl += `productName=${filterParams.searchName}&category=${filterParams.category}`;
      } else if (filterParams.searchOption === SEARCH_OPTION_PRODUCT_HASHTAG) {
        queryUrl += `hashtagName=${filterParams.searchName}&category=${filterParams.category}`;
      }
    } else {
      queryUrl += `category=${filterParams.category}`;
    }

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

    console.log("Query : " + queryUrl);

    return queryUrl;
  };

  useEffect(() => {
    const queryUrl = generateQueryParams();
    router.push(`/productSearch/${filterParams.searchOption}?` + queryUrl);
  }, [filterParams]);

  useEffect(() => {
    const queryParam = generateQueryParams();
    fetchProductData(queryParam);
  }, [pageNo, sortOption]);

  useEffect(() => {
    fetchSeasonData();
    const searchParam = filterParams.searchOption;
    if (searchParam === SEARCH_OPTION_STORE) {
      setupAllCategories();
    } else if (searchParam === SEARCH_OPTION_PRODUCT_NAME) {
      const productName: string = filterParams.searchName;
      getCategoryAggregationByName(productName);
    } else if (searchParam === SEARCH_OPTION_PRODUCT_HASHTAG) {
      const hashTagName: string = filterParams.searchName;
      getCategoryAggregationByHashtag(hashTagName);
    }
  }, []);

  useEffect(() => {
    console.log(router);
    if (router.query.category) {
      if (
        router.query.category !== "1" &&
        typeof router.query.category === "string"
      ) {
        const subCategoryId = parseInt(router.query.category);
        setupSubCategoryFilter(subCategoryId);
      }
    }
  }, [router]);

  useEffect(() => {
    const param = router.asPath.slice(
      "/productSearch".length + filterParams.searchOption.length + 2,
      router.asPath.length
    );
    setPageNo(0);
    fetchProductData(param);
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
        {filterParams.searchName !== "" && (
          <>
            <nav>
              <ul>
                <li> {filterParams.searchName} 의 검색결과</li>
              </ul>
            </nav>
          </>
        )}

        {filterParams.searchOption !== SEARCH_OPTION_STORE ? (
          <>
            <SearchCategoryMenuList
              data={categoryAggregation}
              setPageNo={setPageNo}
              setSortOption={setSortOption}
            />
          </>
        ) : (
          <>
            <CategoryMenuList
              data={filterMenuData}
              setPageNo={setPageNo}
              setSortOption={setSortOption}
            />
          </>
        )}

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
            loader={<h4></h4>}
          >
            <div className="product-container">
              {products.length != 0 ? (
                products.map((element, idx) => (
                  <ProductCard
                    key={"product " + element.id + idx}
                    productId={element.id}
                    imageSrc={element.thumbnail}
                    productTitle={element.name}
                    productPrice={`${element.price}`}
                  />
                ))
              ) : (
                <>
                  <Nodata text="검색 결과가 없습니다." icon="item" />
                </>
              )}
            </div>
          </InfiniteScroll>
        </section>
      </div>
    </>
  );
}
