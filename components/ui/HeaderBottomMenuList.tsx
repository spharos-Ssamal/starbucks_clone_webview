import { headerMenuType } from '@/Types/filter/filterTypes'
import { useRouter } from 'next/router';
import React from 'react'

export default function HeaderBottomMenuList(props:{data: headerMenuType[] }) {

  const router = useRouter();
  const handlePushRouter = (link:string) => {
    router.push(link)
  }
  return (
    <div className="header-bottom">
      <nav>
        <ul>
          {props.data &&
            props.data.map((item: headerMenuType) => (
              <li
                key={item.id}
                onClick={()=>handlePushRouter(item.link)}
                className={item.link === router.pathname ? "active" : ""}
              >
                <p>{item.name}</p>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  )
}
