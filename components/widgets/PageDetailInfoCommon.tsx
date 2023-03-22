import React from 'react'
import Image from 'next/image'
import ProductDetailFooterInfo from '../ui/ProductDetailFooterInfo'

export default function PageDetailInfoCommon() {
  return (
    <section className="detail-info">
        <ProductDetailFooterInfo 
          title='이용조건 및 배송안내'
        />
        <ProductDetailFooterInfo 
          title='상품제공정보고시'
        />
        <ProductDetailFooterInfo 
          title='교환/반품 안내'
        />
        <ProductDetailFooterInfo 
          title='취소/환불 안내'
        />
      </section>
  )
}
