import HeaderSub from '@/components/layouts/HeaderSub'
import HeaderTop from '@/components/layouts/HeaderTop'
import { eventData } from '@/Types/starbucksTypes';
import { useState } from 'react'

export default function event() {

  const [ evt, setEvt ] = useState<eventData[]>();
  
  return (
    <>
    <HeaderTop />

  <div className="container">
    <div id="event-info" className="first-section-sub-one">
      <div className="event-info">
        {
          evt && evt.map( item => (
            <img src={item.imageUrl} width="100%" height="100%"/>
            
          ))
        }
      </div>
    </div>
    <div id="event-product">
      <div className="product-container">
        <div className="product-item">
          <img src="assets/images/event/cake/01.jpg" className="thumbnail"/>
          <div className="product-item-info">
            <p className="product-item-name">{item.titleShort}</p>
            <p className="product-item-price">19,900원</p>
          </div>
        </div>
      </div>
    </div>
    

    <HeaderSub />
  </div>
    </>
  )
}
