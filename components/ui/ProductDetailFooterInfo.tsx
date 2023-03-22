import React from 'react'
import Image from 'next/image'

export default function ProductDetailFooterInfo(props:{title:string, url?:string}) {
  return (
    <div className="nav-button">
      <button>
        <div className="nav-container">
          <div>
            <p className="title">{props.title}</p>
          </div>
          <Image 
            src="/assets/images/icons/contents/right-arrow.png" 
            alt="right-arrow"
            width={20}
            height={20}
          />
        </div>
      </button>
    </div>
  )
}
