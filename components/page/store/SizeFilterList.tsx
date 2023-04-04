import {
  FilterParams,
  MenuDataType,
  filterDataType,
} from "@/Types/filter/filterTypes";
import { storeFilterState } from "@/state/store/atom/storeFilterState";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useRecoilState } from "recoil";

export default function SizeFilterList(props: {
  data: MenuDataType[];
  generateQueryParams: () => void;
}) {
  const [filterParams, setFilterParams] =
    useRecoilState<FilterParams>(storeFilterState);

  const handleAddQuery = (item: MenuDataType) => {
    if (filterParams.productSize.includes(item.id, 0)) {
      setFilterParams({
        ...filterParams,
        productSize: filterParams.productSize.filter((e) => e != item.id),
      });
    } else {
      setFilterParams({
        ...filterParams,
        productSize: [...filterParams.productSize, item.id],
      });
    }
    props.generateQueryParams();
  };

  return (
    <div className="header-sub">
      <nav>
        <ul>
          {props.data &&
            props.data.map((item: MenuDataType) => (
              <li
                key={item.id}
                onClick={() => handleAddQuery(item)}
                className={
                  filterParams.productSize.includes(item.id, 0) ? "active" : ""
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
