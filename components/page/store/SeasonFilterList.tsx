import { FilterParams, MenuDataType } from "@/Types/filter/filterTypes";
import { storeFilterState } from "@/state/store/atom/storeFilterState";
import React, { MutableRefObject } from "react";
import { useRecoilState } from "recoil";

export default function SeasonFilterList(props: {
  data: MenuDataType[];
  pageNo: MutableRefObject<number>;
}) {
  const [filterParams, setFilterParams] =
    useRecoilState<FilterParams>(storeFilterState);

  const handleAddQuery = (item: MenuDataType) => {
    if (item.key === "season") {
      props.pageNo.current = 0;
      if (filterParams.seasons.includes(item.id, 0)) {
        setFilterParams({
          ...filterParams,
          seasons: filterParams.seasons.filter((e) => e != item.id),
        });
      } else {
        setFilterParams({
          ...filterParams,
          seasons: [...filterParams.seasons, item.id],
        });
      }
    }
  };

  return (
    <div className="header-sub">
      <div className="nav-title">
        <p>시즌</p>
      </div>
      <nav>
        <ul>
          {props.data &&
            props.data.map((item: MenuDataType, idx) => (
              <li
                key={"season " + item.id + idx}
                onClick={() => handleAddQuery(item)}
                className={
                  filterParams.seasons.includes(item.id, 0) ? "active" : ""
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
