import { recommandData } from '@/constants/Apis/Types/ResponseType'
import Link from 'next/link'
import React from 'react'

export default function RecommandProductCard(props: {data: recommandData}) {
  return (
    
      <div className="recommand-product-item">
        <div 
          className="recommand-product-item__img"
        >
          <Link href={`/product/${props.data.products.id}`}>
          <img src={props.data.products.thumbnail} alt={props.data.products.description} />
          </Link>
        </div>
        <div className="recommand-product-item__info">
          <p className="item-new">New</p>
          <p className="item-title">{props.data.products.name}</p>
          <p className="item-price"><span>{props.data.products.price.toLocaleString()}</span>원 </p>
        </div>
      </div>
  )
}