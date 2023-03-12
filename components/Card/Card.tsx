import React, { useState } from 'react'
import { cakeType } from '@/Types/starbucksTypes'
import { cakeStaticData } from '@/data/starbucksStaticDatas';
import Link from 'next/link';

export default function Card() {
  const [card, setCard] = useState<cakeType[]>(cakeStaticData);
  return (
    <>
    
    <section id="event-product">
      <div className="product-container">
          {
            card.map(item => (
              <>
              <Link href={`/cake/${item.id}`} style={{textDecoration: 'none'}}>

              <div className="product-item" key={item.id}>
                <img src={item.thumbnail} className="thumbnail"/>
                <div className="product-item-info">
                  <p className="product-item-name">{item.name}</p>
                  <p className="product-item-price">{item.price}원</p>
                </div>
              </div>
              </Link>
              </>
            ))
          }
        </div>
        
    </section>
    </>
  );
}
