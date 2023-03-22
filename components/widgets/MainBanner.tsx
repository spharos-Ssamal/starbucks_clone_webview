import Config from "@/configs/config.export";
import { bannerInfo } from "@/constants/Apis/Types/ResponseType";
import axios from "axios";
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
        setBannerData([...res.data.data]);
        console.log(bannerData);
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
          {bannerData.map((bannerInfo: bannerInfo, idx: number) => {
            return (
              <SwiperSlide key={idx}>
                <div className="event-banner__item">
                  <div className="event-banner__item__img">
                    <img
                      src={bannerInfo.bannerImage}
                      width="100%"
                      height="100%"
                      alt=""
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
