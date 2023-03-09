import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { headerIcons, headerNavMenus } from "../../data/starbucksStaticDatas";
import { headerMenu } from "../../Types/starbucksTypes";

export default function Header() {
  const [headerMenus, setHeaderMenus] = useState<headerMenu[]>(headerNavMenus);
  console.log('HeaderTop.tsx')

  return (

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
                </Link>ƒ
              </li>
            ))}
          </ul>
        </nav>
      </div>
  
  
  );
}