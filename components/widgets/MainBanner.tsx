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
import { REQUEST_BANNER } from "@/constants/Apis/URL";

SwiperCore.use([Pagination, Navigation, Autoplay]);

function MainBanner() {
  const { baseUrl } = Config();
  const [ bannerData, setBannerData ] = useState<bannerInfo[]>([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/${REQUEST_BANNER}`)
      .then((res) => {
        console.log(res.data.data);
        setBannerData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getSize = (url: string) => {
    let myImage = {
      width: 0,
      height: 0,
    };
    getImageSize(url).then((res) => {
      console.log(res)
      myImage.width = res.width;
      myImage.height = res.height;
    });
    console.log(myImage)
    return myImage;
  };

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
                      width={600}
                      height={600}
                      // width={getSize(bannerInfo.bannerImage).width}
                      // height={getSize(bannerInfo.bannerImage).height}
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
