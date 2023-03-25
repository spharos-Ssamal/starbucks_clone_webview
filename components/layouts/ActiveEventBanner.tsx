import { useEffect, useState } from "react";
import Config from "@/configs/config.export";
import { REQUEST_BANNER, REQUEST_EVENT_GET } from "@/constants/Apis/URL";
import axios from "axios";
import { ProductInfo } from "@/Types/ProductRequest/Request";

interface EventBannerProp {
  id: number;
}

interface EventDetailInfo {
  eventName : string;
  products :ProductInfo;
}

export interface bannerDataType {
  eventId: number;
  regTime: string;
  bannerImage: string;
  recommendId: number;
}

export default function ActiveEventBanner(props: EventBannerProp) {
  const { baseUrl } = Config();
  
  const [activeEventData, setActiveEventData] = useState<EventDetailInfo[]>(
    []
  );
  //console.log("banner", activeEventData);

  // useEffect(() => {
  //   axios
  //     .get(`${baseUrl}/${REQUEST_EVENT_GET}?eventid=${props.id}`)
  //     .then((res) => {
  //       const response : EventDetailInfo = res.data.data;
  //       setActiveEventData(res.data.data);
  //       console.log("banner", res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
  <>

    <section id="event-info" className="first-section-sub-one">
      <div className="event-info">
        <img src="" width="100%" height="100%"/>
      </div>
    </section>
  </>
  );
}
