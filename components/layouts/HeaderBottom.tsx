import { headerMenu } from "@/Types/starbucksTypes";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { headerNavMenus, headerIcons } from "../../data/starbucksStaticDatas";

export default function HeaderBottom() {
  const { pathname } = useRouter();
  const productPath = pathname.split("/")[1];
  const [headerMenus, setHeaderMenus] = useState<headerMenu[]>(headerNavMenus);

  return(
    <>
    <div className="header-bottom">
          <nav>
            <ul>
              {headerMenus.map((menu) => (
                <li
                  key={menu.id}
                  className={pathname === menu.link ? "active" : ""}
                >
                  <Link href={menu.link}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
    </>
  );
}