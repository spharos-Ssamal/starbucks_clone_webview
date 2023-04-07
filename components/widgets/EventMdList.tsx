import { useCallback, useEffect, useState } from "react";
import Config from "@/configs/config.export";
import {
  eventData,
  eventProductRes,
} from "@/constants/Apis/Types/ResponseType";
import RecommandProductCard from "../ui/RecommandProductCard";
import { RequestEvent } from "@/Service/EventService/EventService";

function EventMdList(props: { data: eventData; title?: string }) {
  const { baseUrl } = Config();
  const [recommendDataList, setRecommendDataList] = useState<eventProductRes[]>(
    []
  );

  const fetchEventData = useCallback(async () => {
    RequestEvent(props.data.id)
      .then((res) => {
        const eventProductRes: eventProductRes[] = res.data.eventProductRes;
        setRecommendDataList([...eventProductRes]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [baseUrl, props.data.id]);

  useEffect(() => {
    fetchEventData();
  }, [fetchEventData]);

  return (
    <section className="recommand" id="recommand-md-1">
      <div>
        <h2>{props.title ? props.title : props.data.name}</h2>
        <div className="recommand-product-list">
          {recommendDataList &&
            recommendDataList.map((item, idx) => (
              <RecommandProductCard key={idx} data={item} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default EventMdList;
