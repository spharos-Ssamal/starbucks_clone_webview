import { MenuDataType, filterDataType } from "@/Types/filter/filterTypes";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function SubCategoryList(props: {
  category: number;
  data: MenuDataType[];
  filterFile: filterDataType[];
  setFilter: Dispatch<SetStateAction<filterDataType[]>>;
}) {
  const router = useRouter();
  const [subCategoryId, setSubCategoryId] = useState("");

  useEffect(() => {
    console.log(router.query);
    if (
      router.query.subCategory &&
      typeof router.query.subCategory === "string"
    ) {
      const subCategory: string = router.query.subCategory;
      setSubCategoryId(subCategory);
    }
  }, [router.query]);

  const handleAddQuery = (item: MenuDataType) => {
    if (item.key === "subCategory") {
      router.push(`/store?category=${props.category}&subCategory=${item.id}`);
      return;
    }
  };

  return (
    <div className="header-sub">
      <nav>
        <ul>
          {props.data &&
            props.data.map((item: MenuDataType, idx) => (
              <li
                key={"subCategory " + item.id + idx}
                onClick={() => handleAddQuery(item)}
                className={item.id == Number(subCategoryId) ? "active" : ""}
              >
                <p>{item.name}</p>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
