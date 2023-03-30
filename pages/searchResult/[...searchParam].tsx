import {
  RequestCategoryAggregationHashTag,
  RequestCategoryAggregationName,
} from "@/Service/ProductService/ProductService";
import { getSeasonInfo } from "@/Service/SeasonService/SeasonService";
import { CategortAggregationRes } from "@/Types/Product/Response";
import { SeasonInfo } from "@/Types/season/SeasonTypes";
import ProductCard from "@/components/ui/ProductCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function SearchResult() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [categoryAggregation, setCategoryAggregation] = useState<
    CategortAggregationRes[]
  >([]);
  const [seasonInfoData, setSeasonInfoData] = useState<SeasonInfo[]>([]);

  const getCategoryAggregationByName = (searchData: string) => {
    RequestCategoryAggregationName(searchData).then((res) => {
      const result: CategortAggregationRes[] = res.data;
      setCategoryAggregation(result);
    });
  };

  const getCategoryAggregationByHashtag = (searchData: string) => {
    RequestCategoryAggregationHashTag(searchData).then((res) => {
      const result: CategortAggregationRes[] = res.data;
      setCategoryAggregation(result);
    });
  };

  useEffect(() => {
    getSeasonInfo()
      .then((res) => {
        const seasonInfo = res.data.seasonInfo;
        setSeasonInfoData([...seasonInfo]);
      })
      .catch((ex) => {
        console.log(ex);
      });
  }, []);

  useEffect(() => {
    if (router.query.searchParam === undefined) {
      Swal.fire({
        icon: "error",
        text: "잘못된 접근입니다.",
      });
      router.back();
    } else {
      const data = router.query.searchParam[0];
      setSearchValue(data.split("=")[1]);
      const searchType = data.split("=")[0];
      if (searchValue !== "") {
        if (searchType === "hashtag") {
          getCategoryAggregationByHashtag(searchValue);
        } else if (searchType === "name") {
          getCategoryAggregationByName(searchValue);
        }
      }
    }
  }, [router.query.searchParam]);

  return (
    <>
      <nav>
        <ul>
          <li> `{searchValue}` 의 검색결과</li>
        </ul>
      </nav>

      <div className="search-result-with-data">
        <div className="categoryTop">
          <nav>
            <ul>
              <li id="1" className="active">
                전체
              </li>
              {categoryAggregation &&
                categoryAggregation.map((element, idx) => (
                  <>
                    <li id={element.categoryId.toString()} key={idx}>
                      {element.categoryName} ({element.count})
                    </li>
                  </>
                ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="search-result-with-data">
        <div className="categoryBottom">
          <nav>
            <ul className="title">
              <li className="titleFixed">가격</li>
            </ul>
            <ul className="contents">
              <li>1만원미만</li>
              <li>1만원대</li>
              <li>2만원대</li>
              <li>3만원대</li>
              <li>4만원대</li>
              <li>5만원이상</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="search-result-with-data">
        <div className="categoryBottom">
          <nav>
            <ul className="title">
              <li className="titleFixed">시즌</li>
            </ul>
            <ul className="contents">
              {seasonInfoData &&
                seasonInfoData.map((element, idx) => (
                  <>
                    <li key={element.name + element.id}>{element.name}</li>
                  </>
                ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="search-result-with-data">
        <div className="foldable">
          접기 <img src="/assets/images/icons/arrow-up.png" />
        </div>
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
          <select id="xyz">
            <option>신상품순</option>
            <option>추천순</option>
            <option>낮은가격순</option>
            <option>높은가격순</option>
          </select>
        </div>
        <section className="searchResultProduct">
          <ProductCard
            productId={0}
            imageSrc={""}
            productTitle={""}
            productPrice={""}
          />
        </section>
      </div>
    </>
  );
}
