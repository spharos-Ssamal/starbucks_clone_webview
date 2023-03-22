import React from 'react'
import Image from 'next/image'

import { getImageSize } from 'react-image-size';
import { ServerStyleSheet } from 'styled-components'

import { productResponseDetailImages } from '@/Types/ProductRequest/Response'
import Nodata from '@/components/ui/Nodata';

export default function ProductDetailList(props:{productImages: productResponseDetailImages[]}) {

  return (
    <section id="product-detail">
        <p>상품 정보</p>
        {
          props.productImages.length > 0 ? props.productImages.map( (item:productResponseDetailImages) => {
            
            (getImageSize(item.imageUrl).then((size) => { 
              console.log(size)

            }))

            return (
              <Image 
                key={item.id} 
                src={item.imageUrl} 
                width={item.width}
                height={item.height}
                alt=""
            />
            )

          })
          : 
          <Nodata 
            text="상품 정보가 없습니다."
          />
        }
      </section>
  )
}