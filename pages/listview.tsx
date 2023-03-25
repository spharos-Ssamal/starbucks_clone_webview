import { useEffect, useState } from 'react'
import axios from 'axios';
import { productType } from '@/Types/header/filterType';
import { useRouter } from 'next/router'
import Config from "@/configs/config.export";

export default function ProductListView() {

  const { baseUrl } = Config();
  const { query } = useRouter();
  const [ productList, setProductList ] = useState<productType[]>([])

  useEffect(()=>{
    axios.get(`${baseUrl}/product`)
    .then((res) => {
      console.log(res.data.find((product:productType) => product.bigCategory === query.category))
      console.log(res.data.filter((product:productType) => 
        product.bigCategory === query.category    
      ))
      setProductList(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },[query.category])

  
  return (
    <>
      {
        productList.map((product, idx) => (
          <div key={idx}>
            <p>{product.productName}</p>
            <p>{product.bigCategory}</p>
          </div>
        
        ))
      }
    </>
  )
}
