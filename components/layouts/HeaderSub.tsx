import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react"
import { mainEventList } from "../../data/starbucksStaticDatas";
import { eventData } from "../../Types/starbucksTypes";

export default function HeadeSub() {

  const [moveToSub, setMoveToSub] = useState<eventData[]>(mainEventList);
  const { pathname } = useRouter();
  const evtPath = pathname.split("/")[1];
  console.log("주목@ = " + pathname);

  return(
    
      
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