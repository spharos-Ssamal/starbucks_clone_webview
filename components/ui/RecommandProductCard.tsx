import { recommandData } from '@/constants/Apis/Types/ResponseType'
import Image from 'next/image'
import Link from 'next/link'
import { getImageSize } from 'react-image-size';
import React, { useEffect, useState } from 'react'
import { imageType } from '@/Types/image/imageType';

export default function RecommandProductCard(props: {data: recommandData}) {

  const [ size, setSize ] = useState<imageType>({
    width: 0,
    height: 0
  })

  useEffect(()=>{
    getImageSize(props.data.products.thumbnail).then( (size) => {
      setSize(size)
    });
  },[props.data])

  return (
    
      <div className="recommand-product-item">
        <div className="recommand-product-item__img">
          <Link href={`/product/${props.data.products.id}`}>
          <Image 
            src={props.data.products.thumbnail} 
            alt={props.data.products.description} 
            width={size.width}
            height={size.height}
          />
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
