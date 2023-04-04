import {
  FilterParams,
  MenuDataType,
  filterDataType,
} from "@/Types/filter/filterTypes";
import { storeFilterState } from "@/state/store/atom/storeFilterState";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useRecoilState } from "recoil";

export default function CategoryMenuList(props: {
  data: MenuDataType[];
  generateQueryParams: () => void;
}) {
  const [filterParams, setFilterParams] =
    useRecoilState<FilterParams>(storeFilterState);
  const handleAddQuery = (item: MenuDataType) => {
    console.log(item);
    if (item.key === "category") {
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
