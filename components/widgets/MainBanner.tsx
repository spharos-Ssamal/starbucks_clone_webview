import Config from "@/configs/config.export";
import Image from "next/image";
import { bannerInfo } from "@/constants/Apis/Types/ResponseType";
import axios from "axios";
import { getImageSize } from "react-image-size";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { REQUEST_BANNER } from "@/constants/Apis/URL";
import { useRouter } from "next/router";

SwiperCore.use([Pagination, Navigation, Autoplay]);

function MainBanner() {
  const router = useRouter();
  const { baseUrl } = Config();
  const [bannerData, setBannerData] = useState<bannerInfo[]>([]);

  const onClickBanner = (bannerInfo: bannerInfo) => {
    console.log(bannerInfo);
    if (bannerInfo.eventId !== null) {
      router.push(`/event/${bannerInfo.eventId}`);
    } else if (bannerInfo.recommendId !== null) {
      router.push(`${bannerInfo.linkedUrl}`);
    }
  };

  useEffect(() => {
    axios
      .get(`${baseUrl}/${REQUEST_BANNER}`)
      .then((res) => {
        setBannerData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getSize:any = async (url: string) => {
    
    const size = await getImageSize(url);
    return size;

  };

  return (
    <section id="event-banner" className="first-section">
      <div className="event-banner">
        <Swiper
          className="banner"
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: false }}
          autoplay={{ delay: 2000 }}
          loop={true}
        >
          {bannerData &&
            bannerData.map((bannerInfo: bannerInfo, idx: number) => {
              return (
                <SwiperSlide
                  key={"banner " + bannerInfo.regTime + idx}
                  onClick={() => onClickBanner(bannerInfo)}
                >
                  <div className="event-banner__item">
                    <div className="event-banner__item__img">
                      <Image
                        src={bannerInfo.bannerImage}
                        width={getSize(bannerInfo.bannerImage).width === undefined ? 800 : getSize(bannerInfo.bannerImage).width }
                        height={getSize(bannerInfo.bannerImage).height === undefined ? 800 : getSize(bannerInfo.bannerImage).height}
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
