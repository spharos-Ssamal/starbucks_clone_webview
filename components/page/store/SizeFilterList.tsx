import { FilterParams, MenuDataType } from "@/Types/filter/filterTypes";
import { storeFilterState } from "@/state/store/atom/storeFilterState";
import React, { Dispatch, MutableRefObject, SetStateAction } from "react";
import { useRecoilState } from "recoil";

export default function SizeFilterList(props: {
  data: MenuDataType[];
  setPageNo: Dispatch<SetStateAction<number>>;
}) {
  const [filterParams, setFilterParams] =
    useRecoilState<FilterParams>(storeFilterState);

  const handleAddQuery = (item: MenuDataType) => {
    props.setPageNo(0);
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
  };

  return (
    <div className="header-sub">
      <div className="nav-title">
        <p>용량</p>
      </div>
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
