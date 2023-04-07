import { useState } from "react";
import SearchHashtagButton from "../page/search/SearchHashtagButton";
import {
  RequestCategoryAggregationHashTag,
  RequestCategoryAggregationName,
} from "@/Service/ProductService/ProductService";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { searchParams } from "@/Types/filter/filterTypes";
import { storeFilterState } from "@/state/store/atom/storeFilterState";
import {
  SEARCH_OPTION_PRODUCT_HASHTAG,
  SEARCH_OPTION_PRODUCT_NAME,
} from "@/constants/enums/SearchOption";

interface Props {
  isModalOpen: boolean;
  closeModal: () => void;
}

export function SearchModal(props: Props) {
  const [searchData, setSearchData] = useState<string>("");
  const [filterParams, setFilterParams] =
    useRecoilState<searchParams>(storeFilterState);
  const router = useRouter();

  const onChangeSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };

  const onClickSearchButton = () => {
    if (searchData === "") {
      Swal.fire({
        icon: "error",
        text: "검색어를 입력해주세요",
      });
    } else {
      props.closeModal();
      if (searchData.includes("#")) {
        setFilterParams({
          ...filterParams,
          searchOption: SEARCH_OPTION_PRODUCT_HASHTAG,
          searchName: searchData.slice(1, searchData.length),
          category: 1,
          subCategories: [],
          seasons: [],
          productSize: [],
          priceValue: {
            id: 0,
            priceStart: -1,
            priceEnd: -1,
          },
        });
        router.push(
          `/productSearch/hashtag=${searchData.slice(1, searchData.length)}`
        );
      } else {
        setFilterParams({
          ...filterParams,
          searchOption: SEARCH_OPTION_PRODUCT_NAME,
          searchName: searchData,
          category: 1,
          subCategories: [],
          seasons: [],
          productSize: [],
          priceValue: {
            id: 0,
            priceStart: -1,
            priceEnd: -1,
          },
        });
        router.push(`/productSearch/name=${searchData}`);
      }
    }
  };

  return (
    <>
      {props.isModalOpen && (
        <div className="modalWrap">
          <div className="search-top">
            <div className="search-bar">
              <form>
                <input hidden />
                <input
                  type="text"
                  value={searchData}
                  onChange={onChangeSearchBar}
                  placeholder="검색어를 입력해 주세요."
                />
                <div className="search-icons">
                  <ul>
                    <div>
                      <li>
                        <img
                          onClick={() => onClickSearchButton()}
                          src="/assets/images/icons/search.svg"
                        />
                      </li>
                    </div>
                    <div>
                      <li>
                        <img
                          onClick={props.closeModal}
                          src="/assets/images/icons/close.png"
                        />
                      </li>
                    </div>
                  </ul>
                </div>
              </form>
            </div>
          </div>
          <div className="search-latest">
            <div className="search-latest-title">
              <h3>최근 검색어</h3>
            </div>
            <div className="search-latest-keywords"></div>
            <hr />
            <div className="delete-keywords">
              <button>전체삭제</button>
            </div>
          </div>

          <div className="recommand-tag">
            <div className="recommand-tage-title">
              <h3>추천 태그</h3>
            </div>
            <div className="tag-list">
              <SearchHashtagButton tagTitle={"test"} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
