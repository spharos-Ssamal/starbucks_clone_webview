import { useRouter } from "next/router";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";
import React, { useState } from "react";
import { headerNavMenus, headerIcons } from "../../data/starbucksStaticDatas";
import LoginModal from "../modals/LoginModal";
import { headerMenu } from "@/Types/starbucksTypes";
import Link from "next/link";

function Header() {
  const { pathname } = useRouter();
  const productPath = pathname.split("/")[1];
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [headerMenus, setHeaderMenus] = useState<headerMenu[]>(headerNavMenus);

  console.log(isModalOpen)
  return (
    <>
    <LoginModal 
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
    />
    <header>

      <div className="header-top">
        <div className="menu-icon" onClick={()=>setIsModalOpen(true)}>
          <img
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
                  <img
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
        
        <HeaderBottom />
        
      )}
    </header>
  </>
  );
}

export default Header;
