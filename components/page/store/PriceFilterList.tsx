import { MenuDataType, filterDataType } from "@/Types/filter/filterTypes";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useEffect } from "react";

export default function PriceFilterList(props: {
  data: MenuDataType[];
  setFilter: Dispatch<SetStateAction<filterDataType[]>>;
}) {
  const router = useRouter();

  const handleAddQuery = (item: MenuDataType) => {
    console.log(item);
    if (item.key === "category") {
      router.push(`/store?category=${item.id}`);
      return;
    }
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
                  item.id == Number(router.query.price) ? "active" : ""
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
