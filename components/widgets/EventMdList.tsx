import { useEffect, useState } from "react";
import axios from "axios";
import Config from "@/configs/config.export";
import { BaseRes, eventData, recommandData } from "@/constants/Apis/Types/ResponseType";
import { REQUEST_EVENT_GET } from "@/constants/Apis/URL";
import RecommandProductCard from "../ui/RecommandProductCard";

function EventMdList(props:{ data: eventData, title ?: string }) {

  const { baseUrl } = Config();
  const [ recommandData, setRecommandData ] = useState<BaseRes>({} as BaseRes)

  useEffect(()=>{
    axios.get(`${baseUrl}/${REQUEST_EVENT_GET}?eventId=${props.data.id}`)
    .then(res => {
      setRecommandData(res.data)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
      })
  },[props, baseUrl])

  return (
    <section className="recommand" id="recommand-md-1">
    <div>
      <h2>{props.title ? props.title : props.data.name}</h2>
      <div className="recommand-product-list">
      {
        recommandData.data && recommandData.data.map(
          (item: recommandData , idx: number) => <RecommandProductCard key={idx} data={item} />
        )
      }
      </div>
    </div>
  </section>
  );
}

export default EventMdList;