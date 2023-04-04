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
  const router = useRouter();
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
          priceStart: -1,
          priceEnd: -1,
        },
        page: 0,
        size: 6,
        sort: "product.id,DESC",
      });
    }
  };

  return (
    <div className="header-sub">
      <div className="nav-title">
        <p>메뉴</p>
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
