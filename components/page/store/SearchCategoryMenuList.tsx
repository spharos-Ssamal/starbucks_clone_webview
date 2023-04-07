import { CategoryAggregationRes } from "@/Types/Product/Response";
import { searchParams, MenuDataType } from "@/Types/filter/filterTypes";
import { ORDER_BY_PRODUCT_ID_DESC } from "@/constants/enums/FilterOption";
import { storeFilterState } from "@/state/store/atom/storeFilterState";
import React, { Dispatch, MutableRefObject, SetStateAction } from "react";
import { useRecoilState } from "recoil";

export default function SearchCategoryMenuList(props: {
  data: CategoryAggregationRes[];
  setPageNo: Dispatch<SetStateAction<number>>;
  setSortOption: Dispatch<SetStateAction<string>>;
}) {
  const [filterParams, setFilterParams] =
    useRecoilState<searchParams>(storeFilterState);

  const handleQuery = (item: CategoryAggregationRes) => {
    props.setPageNo(0);
    props.setSortOption(ORDER_BY_PRODUCT_ID_DESC);

    setFilterParams({
      ...filterParams,
      category: item.categoryId,
      subCategories: [],
      seasons: [],
      productSize: [],
      priceValue: {
        id: 0,
        priceStart: -1,
        priceEnd: -1,
      },
    });
  };

  return (
    <div className="header-sub">
      <div className="nav-title">
        <p>대분류</p>
      </div>
      <nav>
        <ul>
          {props.data &&
            props.data.map((item: CategoryAggregationRes, idx) => (
              <li
                key={"category " + item.categoryId + " " + idx}
                onClick={() => handleQuery(item)}
                className={
                  item.categoryId == filterParams.category ? "active" : ""
                }
              >
                <p>
                  {item.categoryName} {item.count && <>({item.count})</>}
                </p>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
