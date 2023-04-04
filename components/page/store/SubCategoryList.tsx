import {
  FilterParams,
  MenuDataType,
  filterDataType,
} from "@/Types/filter/filterTypes";
import { storeFilterState } from "@/state/store/atom/storeFilterState";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function SubCategoryList(props: { data: MenuDataType[] }) {
  const router = useRouter();
  const [filterParams, setFilterParams] =
    useRecoilState<FilterParams>(storeFilterState);

  const handleAddQuery = (item: MenuDataType) => {
    if (item.key === "subCategory") {
      setFilterParams({
        ...filterParams,
        subCategories: [item.id],
      });
      return;
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
                key={"subCategories " + item.id + idx}
                onClick={() => handleAddQuery(item)}
                className={
                  filterParams.subCategories.includes(item.id, 0)
                    ? "active"
                    : ""
                }
              >
                <p>{item.name}</p>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
