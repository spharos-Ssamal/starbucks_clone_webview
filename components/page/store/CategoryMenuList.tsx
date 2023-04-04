import { FilterParams, MenuDataType } from "@/Types/filter/filterTypes";
import { ORDER_BY_PRODUCT_ID_DESC } from "@/constants/enums/FilterOption";
import { storeFilterState } from "@/state/store/atom/storeFilterState";
import React, { Dispatch, MutableRefObject, SetStateAction } from "react";
import { useRecoilState } from "recoil";

export default function CategoryMenuList(props: {
  data: MenuDataType[];
  pageNo: MutableRefObject<number>;
  setSortOption: Dispatch<SetStateAction<string>>;
}) {
  const [filterParams, setFilterParams] =
    useRecoilState<FilterParams>(storeFilterState);
  const handleAddQuery = (item: MenuDataType) => {
    if (item.key === "category") {
      props.pageNo.current = 0;
      props.setSortOption(ORDER_BY_PRODUCT_ID_DESC);
      setFilterParams({
        category: item.id,
        subCategories: [],
        seasons: [],
        productSize: [],
        priceValue: {
          id: 0,
          priceStart: -1,
          priceEnd: -1,
        },
      });
    }
  };

  return (
    <div className="header-sub">
      <div className="nav-title">
        <p>대분류</p>
      </div>
      <nav>
        <ul>
          {props.data &&
            props.data.map((item: MenuDataType, idx) => (
              <li
                key={"category " + item.id + idx}
                onClick={() => handleAddQuery(item)}
                className={item.id == filterParams.category ? "active" : ""}
              >
                <p>{item.name}</p>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
