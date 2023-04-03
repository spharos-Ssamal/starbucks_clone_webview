import { MenuDataType, filterDataType } from "@/Types/filter/filterTypes";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function SubCategoryList(props: {
  category: number;
  data: MenuDataType[];
}) {
  const router = useRouter();
  const [subCategoryId, setSubCategoryId] = useState("");

  useEffect(() => {
    if (
      router.query.subCategories &&
      typeof router.query.subCategories === "string"
    ) {
      const subCategories: string = router.query.subCategories;
      setSubCategoryId(subCategories);
    }
  }, [router.query]);

  const handleAddQuery = (item: MenuDataType) => {
    if (item.key === "subCategory") {
      router.push(`/store?category=${props.category}&subCategories=${item.id}`);
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
                key={"subCategories " + item.id + idx}
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
