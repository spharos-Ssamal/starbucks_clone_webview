import { chunsikDataType } from "@/Types/starbucksTypes";
import Config from "@/configs/config.export";
import { BaseRes, eventData } from "@/constants/Apis/Types/ResponseType";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

function ChunsikList(props: {data: eventData}) {

  const { baseUrl } = Config();
  const [ chunsikData, setChunsikData ] = useState<BaseRes>({} as BaseRes)

  useEffect(()=>{
    axios.get(`${baseUrl}api/v1/event/get?eventId=${props.data.id}`)
    .then(res => {
      setChunsikData(res.data)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
      })
  },[props, baseUrl])

  
  return ( 
    <section className="recommand" id="chunsik">
      <h2>{props.data.name}</h2>
      {
        chunsikData.data && chunsikData.data.map(
          (chunsik: chunsikDataType) => (
            <div className="chunsik-item" key={chunsik.products.id}>
              
                <Link href={`/product/${chunsik.products.id}`}>
                <img src={chunsik.products.thumbnail} alt={chunsik.products.description}/>
                </Link>
             
              <div className="chunsik-item-info">
                <p className="item-title">{chunsik.products.name}</p>
                <p className="item-price"><span>{chunsik.products.price}</span>원</p>
              </div>
            </div>
          ))}
      
    </section>
   );
}

export default ChunsikList;