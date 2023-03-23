import Config from "@/configs/config.export";
import Image from 'next/image'
import { bannerInfo } from "@/constants/Apis/Types/ResponseType";
import axios from "axios";
import { getImageSize } from 'react-image-size';

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Navigation, Autoplay]);

function MainBanner() {
  const { baseUrl } = Config();
  const [bannerData, setBannerData] = useState<bannerInfo[]>([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/banner`)
      .then((res) => {
        res.data.data.map(async (item:bannerInfo) => {
          const { width, height } = await getImageSize(item.bannerImage);
          console.log(width, height)
          setBannerData((prevData) => [...prevData, {
            bannerImage: item.bannerImage,
            eventId: item.eventId,
            recommendId: item.recommendId,
            regTime: item.regTime,
            width: width,
            height: height
          }])
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section id="event-banner" className="first-section">
      <div className="event-banner">
        <Swiper
          className="banner"
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: false }}
          autoplay={ {delay: 2000} }
          loop={true}
        >
          {bannerData  &&  bannerData.map((bannerInfo: bannerInfo, idx: number) => {
            return (
              <SwiperSlide key={idx}>
                <div className="event-banner__item">
                  <div className="event-banner__item__img">
                    <Image
                      src={bannerInfo.bannerImage}
                      width={bannerInfo.width}
                      height={bannerInfo.height}
                      alt={bannerInfo.bannerImage}
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default MainBanner;
