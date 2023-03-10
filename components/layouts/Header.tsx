import { headerMenu } from "@/Types/starbucksTypes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { headerNavMenus, headerIcons } from "../../data/starbucksStaticDatas";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

function Header() {
  const { pathname } = useRouter();
  const productPath = pathname.split("/")[1];
  const [headerMenus, setHeaderMenus] = useState<headerMenu[]>(headerNavMenus);

  return (
    <header>
      <HeaderTop/>
      {productPath === "product" ? null : (
        
        <HeaderBottom />
        
      )}
    </header>
  );
}

export default Header;
