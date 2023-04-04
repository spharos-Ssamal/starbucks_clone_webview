import { FilterParams, PriceDataType } from "@/Types/filter/filterTypes";
import { PriceList } from "@/data/starbucksStaticDatas";
import { storeFilterState } from "@/state/store/atom/storeFilterState";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

export default function PriceFilterList(props: {
  generateQueryParams: () => void;
}) {
  const priceData = PriceList;
  const [id, setId] = useState(0);
  const [filterParams, setFilterParams] =
    useRecoilState<FilterParams>(storeFilterState);

  const handleAddQuery = (item: PriceDataType) => {
    console.log(item);
    if (id !== item.id) {
      setId(item.id);
      setFilterParams({
        ...filterParams,
        priceValue: {
          priceStart: item.startValue,
          priceEnd: item.endValue,
        },
      });
    } else {
      setId(0);
      setFilterParams({
        ...filterParams,
        priceValue: {
          priceStart: -1,
          priceEnd: -1,
        },
      });
    }
    props.generateQueryParams();
  };

  return (
    <div className="header-sub">
      <nav>
        <ul>
          {priceData.map((item: PriceDataType) => (
            <li
              key={"price_data " + item.id}
              onClick={() => handleAddQuery(item)}
              className={item.id == id ? "active" : ""}
            >
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
