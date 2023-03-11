import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react"
import { mainEventList } from "../../data/starbucksStaticDatas";
import { eventData } from "../../Types/starbucksTypes";

export default function HeadeSub() {

  const [moveToSub, setMoveToSub] = useState<eventData[]>(mainEventList);
  const { pathname } = useRouter();
  const evtPath = pathname.split("/")[1];

  return(
    // [event] 기획전 번호 1, 2, 3, 4 라우터로 페이지 돌리는법? 
    // {pathname === evt.link? "active" : ""} evt.link 는 숫자라서 pathname과 매칭안될 뿐더러
    // event/1 찍는법을 아직 모름..
      
      <div className="header-sub">
        <nav>
          <ul>
            {moveToSub.map( evt => (
              
              <li
                key = {evt.id} 
                className="active"> 
              
              <Link href={`/event/${evt.id}`}>{evt.titleShort}</Link></li>
              
            ))}
          </ul>
        </nav>
      </div>
    
  )
}