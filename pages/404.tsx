import { useLottie } from "lottie-react";
import nodata from "@/public/assets/lottie/nodata.json";

export default function Error404Page() {
  const options = {
    animationData: nodata,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div
      style={{
        margin: "160px 0px 0px 0px",
      }}
    >
      <h1
        style={{
          margin: "10px",
        }}
      >
        Error
      </h1>
      <div className="nodata-wrap">
        <div className="icon">{View}</div>
        <div className="text">페이지를 찾을 수 업습니다.</div>
      </div>
    </div>
  );
}
