import { MenuDataType, filterDataType } from "@/Types/filter/filterTypes";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function SeasonFilterList(props: { data: MenuDataType[] }) {
  const router = useRouter();
  const [seasonIds, setSeasonIds] = useState<string[]>([]);

  useEffect(() => {
    // console.log(router);
    // console.log(router.asPath);
    setSeasonIds([]);

    if (router.query.seasons !== undefined) {
      const seasonIdParams = router.query.seasons;
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
        router.push(`${router.asPath}&seasons=${item.id}`);
        return;
      } else {
        const changedSeasonIds = seasonIds.filter((e) => e !== `${item.id}`);

        let queryParams: string = "/store?";
        if (router.query.category !== undefined) {
          queryParams = queryParams.concat(`category=${router.query.category}`);
        }

        if (router.query.subCategories !== undefined) {
          if (typeof router.query.subCategories === "string") {
            queryParams = queryParams.concat(
              `&subCategories=${router.query.subCategories}`
            );
          } else {
            router.query.subCategories.forEach((element) =>
              queryParams.concat(`&subCategories=${element}`)
            );
          }
        }
        changedSeasonIds.forEach(
          (element) => (queryParams = queryParams.concat(`&seasons=${element}`))
        );
        setSeasonIds(changedSeasonIds);
        router.push(queryParams);
      }
    }
  };

  return (
    <div className="header-sub">
      <div className="nav-title">
        <p>메뉴</p>
      </div>
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
