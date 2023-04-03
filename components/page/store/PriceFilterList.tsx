import {
  MenuDataType,
  PriceDataType,
  filterDataType,
} from "@/Types/filter/filterTypes";
import { PriceList } from "@/data/starbucksStaticDatas";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useEffect } from "react";

export default function PriceFilterList() {
  const router = useRouter();
  const priceData = PriceList;

  const handleAddQuery = (item: PriceDataType) => {
    console.log(item);
    // if (item.key === "category") {
    //   router.push(`/store?category=${item.id}`);
    //   return;
    // }
  };

  return (
    <div className="header-sub">
      <nav>
        <ul>
          {priceData.map((item: PriceDataType) => (
            <li
              key={"price_data " + item.id}
              onClick={() => handleAddQuery(item)}
              className={item.id == Number(router.query.price) ? "active" : ""}
            >
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
