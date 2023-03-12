import Card from '@/components/Card/Card';
import HeaderSub from '@/components/layouts/HeaderSub'
import HeaderTop from '@/components/layouts/HeaderTop'
import { mainEventList } from '@/data/starbucksStaticDatas';
import { eventData } from '@/Types/starbucksTypes';
import { useState } from 'react'

export default function event() {

  const [ evt, setEvt ] = useState<eventData[]>(mainEventList);
  console.log(mainEventList);
  
  return (
    <>
    <HeaderTop />
    <HeaderSub />

  <div className="container">
    <div id="event-info" className="first-section-sub-one">
      <div className="event-info">
        {
          evt && evt.map( item => (
            <img src={item.imgUrl} width="100%" height="100%"/>
            
          ))
        }
      </div>
    </div>
    
        <Card/>
    

  </div>
    </>
  )
}
