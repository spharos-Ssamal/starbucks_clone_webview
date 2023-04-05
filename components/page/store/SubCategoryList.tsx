import { searchParams, MenuDataType } from "@/Types/filter/filterTypes";
import { storeFilterState } from "@/state/store/atom/storeFilterState";
import React, { Dispatch, MutableRefObject, SetStateAction } from "react";
import { useRecoilState } from "recoil";

export default function SubCategoryList(props: {
  data: MenuDataType[];
  setPageNo: Dispatch<SetStateAction<number>>;
}) {
  const [filterParams, setFilterParams] =
    useRecoilState<searchParams>(storeFilterState);

  const handleAddQuery = (item: MenuDataType) => {
    if (item.key === "subCategory") {
      props.setPageNo(0);
      if (filterParams.subCategories.includes(item.id, 0)) {
        setFilterParams({
          ...filterParams,
          subCategories: filterParams.subCategories.filter((e) => e != item.id),
        });
      } else {
        setFilterParams({
          ...filterParams,
          subCategories: [...filterParams.subCategories, item.id],
        });
      }
    }
  };

  return (
    <div className="header-sub">
      <div className="nav-title">
        <p>카테고리</p>
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
