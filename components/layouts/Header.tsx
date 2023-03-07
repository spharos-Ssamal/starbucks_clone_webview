import { headerMenu } from "@/Types/starbucksTypes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { headerNavMenus, headerIcons } from "../../data/starbucksStaticDatas";

function Header() {
  const { pathname } = useRouter();
  const productPath = pathname.split("/")[1];
  const [headerMenus, setHeaderMenus] = useState<headerMenu[]>(headerNavMenus);

  return (
    <header>
      <div className="header-top">
        <div className="menu-icon">
          <Image
            src="/assets/images/icons/menu.svg"
            alt="menu"
            width={20}
            height={20}
          />
        </div>
        <h1>
          <Link href="/">온라인 스토어</Link>
        </h1>
        <nav>
          <ul>
            {headerIcons.map((icon) => (
              <li key={icon.id}>
                <Link href={icon.link}>
                  <Image
                    src={icon.icon}
                    alt={icon.name}
                    width={20}
                    height={20}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {productPath === "product" ? null : (
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
      )}
    </header>
  );
}

export default Header;
