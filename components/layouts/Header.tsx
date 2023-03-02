import { headerMenu } from '@/type/starbucksTypes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { headerNavMenus, headerIcons } from '../../data/starbucksStaticDatas';

function Header() {

  const { pathname } = useRouter();
  const productPath = pathname.split('/')[1];
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
          <h1><Link href="/">온라인 스토어</Link></h1>
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
      {
        productPath === 'product' ? (
          null 
        ) : (
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
        )
      }
      
    </header>
  );
}

export default Header;