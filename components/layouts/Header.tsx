import { headerMenu } from '@/type/starbucksTypes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { headerNavMenus, headerIcons } from '../../data/starbucksStaticDatas';

function Header() {

  const { pathname } = useRouter();
  const [ headerMenus, setHeaderMenus ] = useState<headerMenu[]>(headerNavMenus);

  return (  
    <header>
      <div className="header-top">
        <div className="header-top-left">
          <Image 
            src="/assets/images/icons/menu.svg"
            alt="menu"
            width={20}
            height={20}
          />
        </div>

        <div className="header-top-center">
          <h1>온라인 스토어</h1>
        </div>

        <div className="header-top-right">
          <ul>
            {
              headerIcons.map(icon => (
                <li className="icon">
                  <Link href={icon.link}>
                  <Image
                    src={icon.icon}
                    alt={icon.name}
                    width={20}
                    height={20}
                  />
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="header-bottom">
        <div className="nav-bar">
          <ul>
            {
              headerMenus.map(menu => (
                <li key={menu.id} className={pathname === menu.link ? 'active' : ''}><Link href={menu.link}>{menu.name}</Link></li>
              ))
            }
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;