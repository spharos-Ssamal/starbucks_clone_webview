import { useEffect, useState } from "react";
import RecommandProductCard from "../ui/RecommandProductCard";

import Config from "@/configs/config.export";
import {
  BaseRes,
  eventData,
  eventProductRes,
} from "@/constants/Apis/Types/ResponseType";
import { RequestRecommendProduct } from "@/Service/ProductService/ProductService";

function RecommandMdList(props: { data: eventData; title?: string }) {
  const { baseUrl } = Config();
  const [recommandData, setRecommandData] = useState<BaseRes>({} as BaseRes);

  useEffect(() => {
    RequestRecommendProduct(props.data.id)
      .then((res) => {
        setRecommandData(res);
      })
      .catch((err) => console.log(err));
  }, [props, baseUrl]);

  return (
    <section className="recommand" id="recommand-md-1">
      <h2>{props.title ? props.title : props.data.name}</h2>
      <div className="recommand-product-list">
        {recommandData.data &&
          recommandData.data.map((item: eventProductRes, idx: number) => (
            <RecommandProductCard key={idx} data={item} />
          ))}
      </div>
    </section>
  );
}

export default RecommandMdList;
