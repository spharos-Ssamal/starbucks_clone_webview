import { MenuDataType, filterDataType } from "@/Types/filter/filterTypes";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function SeasonFilterList(props: {
  data: MenuDataType[];
  setFilter: Dispatch<SetStateAction<filterDataType[]>>;
}) {
  const router = useRouter();
  const [seasonIds, setSeasonIds] = useState<string[]>([]);

  useEffect(() => {
    // console.log(router);
    // console.log(router.asPath);
    setSeasonIds([]);

    if (router.query.seasonId !== undefined) {
      const seasonIdParams = router.query.seasonId;
      if (typeof seasonIdParams === "string") {
        setSeasonIds([seasonIdParams]);
      } else {
        setSeasonIds([...seasonIdParams]);
      }
    }
  }, [router.query]);

  const handleAddQuery = (item: MenuDataType) => {
    if (item.key === "season") {
      if (!seasonIds.includes(`${item.id}`, 0)) {
        router.push(`${router.asPath}&seasonId=${item.id}`);
        return;
      } else {
        const changedSeasonIds = seasonIds.filter((e) => e !== `${item.id}`);

        let queryParams: string = "/store?";
        if (router.query.category !== undefined) {
          queryParams = queryParams.concat(`category=${router.query.category}`);
        }

        if (router.query.subCategory !== undefined) {
          if (typeof router.query.subCategory === "string") {
            queryParams = queryParams.concat(
              `&subCategory=${router.query.subCategory}`
            );
          } else {
            router.query.subCategory.forEach((element) =>
              queryParams.concat(`&subCategory=${element}`)
            );
          }
        }
        changedSeasonIds.forEach(
          (element) =>
            (queryParams = queryParams.concat(`&seasonId=${element}`))
        );
        setSeasonIds(changedSeasonIds);
        router.push(queryParams);
      }
    }
  };

  return (
    <div className="header-sub">
      <nav>
        <ul>
          {props.data &&
            props.data.map((item: MenuDataType, idx) => (
              <li
                key={"season " + item.id + idx}
                onClick={() => handleAddQuery(item)}
                className={seasonIds.includes(`${item.id}`, 0) ? "active" : ""}
              >
                <p>{item.name}</p>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
