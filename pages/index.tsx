import RecommendMDInfo from "@/components/ui/products/RecommendInfo";
import ChunsikList from "@/components/widgets/ChunsikList";
import MainBanner from "@/components/widgets/MainBanner";
import MdList from "@/components/widgets/MdList";
import Config from "@/configs/config.export";
import { RequestProductRecommend } from "@/Service/ProductService/ProductService";
import { RecommendInfoRes } from "@/Types/Products/ProductTypes";
import Header from "next/head";
import { useEffect, useState } from "react";
import { SampleData } from "@/data/MainRecommendMDData";
import RecommendMd from "@/components/ui/RecommendMd";

export default function Home() {
  console.log(Config().baseUrl);

  const [recommendMap, setRecommendMap] = useState<Map<string, RecommendInfoRes[]>>(new Map());
  
  useEffect(() => {
    const resultData = new Map(Object.entries(SampleData.data));
    
    // 얘는 추후에 서버랑 통신할때 쓰세요
    // RequestProductRecommend().then((res) => {
    //   const result: RecommendInfo = res.data;
    //   setRecommendData(result);
    //   console.log(recommendData);
    // });
    setRecommendMap(resultData);
    console.log(resultData);
    console.log(recommendMap);

  }, []);

  return (
    <>
      {/* <head>
        <title>[SSAMAL] 스타벅스 쇼핑몰입니다</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head> */}
      <Header />
      <MainBanner />
      

      {/* {Object.keys(recommendMap).map(key => {
        const value = recommendMap[key];
        return(
          <RecommendMd key={key} mdName={key} productList={value}/>

        );
      })} */}
      <ChunsikList />
    </>
  )
}
