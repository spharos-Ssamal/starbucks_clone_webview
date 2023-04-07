import { searchParams, PriceDataType } from "@/Types/filter/filterTypes";
import { PriceList } from "@/data/starbucksStaticDatas";
import { storeFilterState } from "@/state/store/atom/storeFilterState";
import React, { Dispatch, MutableRefObject, SetStateAction } from "react";
import { useRecoilState } from "recoil";

export default function PriceFilterList(props: {
  setPageNo: Dispatch<SetStateAction<number>>;
}) {
  const priceData = PriceList;
  const [filterParams, setFilterParams] =
    useRecoilState<searchParams>(storeFilterState);

  const handleAddQuery = (item: PriceDataType) => {
    props.setPageNo(0);
    if (filterParams.priceValue.id !== item.id) {
      setFilterParams({
        ...filterParams,
        priceValue: {
          id: item.id,
          priceStart: item.startValue,
          priceEnd: item.endValue,
        },
      });
    } else {
      setFilterParams({
        ...filterParams,
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
        <p>가격</p>
      </div>
      <nav>
        <ul>
          {priceData.map((item: PriceDataType) => (
            <li
              key={"price_data " + item.id}
              onClick={() => handleAddQuery(item)}
              className={filterParams.priceValue.id === item.id ? "active" : ""}
            >
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
