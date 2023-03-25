import React from 'react'
import Image from 'next/image'
import { productDataType } from '@/Types/starbucksTypes'
import { imageType } from '@/Types/image/imageType'

export default function ProductHeader(props:{productData: productDataType, importImgSize: imageType}) {
  return (
    <section id="product-top">
        <div className="product-img">
          <Image 
            src={props.productData.thumbnail}
            alt={props.productData.description}
            width={props.importImgSize.width}
            height={props.importImgSize.height}
          />
        </div>
        <div className="product-info">
          <div className="product-name">
            <div>
              <p>{props.productData.name}<span className="is-new">New</span></p>
            </div>
            <div className="share-icon">
              <Image 
                src="/assets/images/icons/share.svg" 
                alt="share-icon"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className="description">
            {props.productData.description}
          </div>
          <div className="price">
            {props.productData.price.toLocaleString()}원
          </div>
        </div>
        <div className="notice">
        </div>
      </section>
  )
}
