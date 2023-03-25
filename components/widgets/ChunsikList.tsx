import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Config from "@/configs/config.export";
import { chunsikDataType } from "@/Types/starbucksTypes";
import { BaseRes, eventData } from "@/constants/Apis/Types/ResponseType";
import { REQUEST_EVENT_GET } from "@/constants/Apis/URL";

function ChunsikList(props: {data: eventData}) {

  const { baseUrl } = Config();
  const [ chunsikData, setChunsikData ] = useState<BaseRes>({} as BaseRes)

  useEffect(()=>{
    axios.get(`${baseUrl}/${REQUEST_EVENT_GET}?eventId=${props.data.id}`)
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