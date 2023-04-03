import { useCallback, useEffect, useState } from "react";
import Config from "@/configs/config.export";
import { REQUEST_BANNER, REQUEST_EVENT_GET } from "@/constants/Apis/URL";
import axios from "axios";
import { ProductInfo } from "@/Types/Product/Request";
import ProductCard from "../ui/ProductCard";

interface EventBannerProp {
  id: number;
}

interface EventDetailRes {
  detailImage: string;
  eventProductRes: EventDetailInfo[];
}

interface EventDetailInfo {
  eventName: string;
  products: ProductInfo;
}

export default function ActiveEventBanner(props: EventBannerProp) {
  const { baseUrl } = Config();
  const [detailImage, setDetailImage] = useState("");
  const [activeEventData, setActiveEventData] = useState<EventDetailInfo[]>([]);

  const fetchEventDetail = useCallback(async () => {
    axios
      .get(`${baseUrl}/${REQUEST_EVENT_GET}`, {
        params: { eventId: props.id },
      })
      .then((res) => {
        const result: EventDetailRes = res.data.data;
        setDetailImage(result.detailImage);
        setActiveEventData(result.eventProductRes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [baseUrl, props.id]);

  useEffect(() => {
    fetchEventDetail();
  }, [fetchEventDetail]);

  return (
    <>
      <div id="event-info" className="first-section-sub-one">
        <div className="event-info">
          <img src={detailImage} alt="" width="100%" height="100%" />
        </div>
        <div id="event-items" className="first-section-sub-one">
          <div className="product-container">
            {activeEventData &&
              activeEventData.map((element, idx) => (
                <ProductCard
                  key={
                    "eventProduct " +
                    element.eventName +
                    " " +
                    element.products.id +
                    " " +
                    idx
                  }
                  productId={element.products.id}
                  imageSrc={element.products.thumbnail}
                  productTitle={element.products.name}
                  productPrice={element.products.price.toString()}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
