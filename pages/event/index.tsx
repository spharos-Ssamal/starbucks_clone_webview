import { MouseEventHandler, useCallback, useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import Config from "@/configs/config.export";
import { REQUEST_EVENT_ACTIVE } from "@/constants/Apis/URL";
import ActiveEventBanner from "@/components/layouts/ActiveEventBanner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper.min.css";
import { useRouter } from "next/router";

interface activeEventRes {
  id: number;
  name: string;
}

export default function Event() {
  const { baseUrl } = Config();
  const [activeEvent, setActiveEvent] = useState<activeEventRes[]>([]);

  const fetchEventActive = useCallback(async () => {
    axios
      .get(`${baseUrl}/${REQUEST_EVENT_ACTIVE}`)
      .then((res) => {
        const result: activeEventRes[] = res.data.data;
        if (result.length != 0 && result != undefined) {
          setActiveEvent([...result]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [baseUrl]);

  useEffect(() => {
    fetchEventActive();
  }, [fetchEventActive]);

  return (
    <>
      <Head>
        <title>기획전</title>
      </Head>
      <div className="header-sub">
        <nav>
          <ul>
            {activeEvent &&
              activeEvent.map((element, idx) => (
                <>
                  <li key={idx}>{element.name}</li>
                </>
              ))}
          </ul>
        </nav>
      </div>
      <div>
        <Swiper
          autoHeight={true}
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
        >
          {activeEvent &&
            activeEvent.map((element, idx) => (
              <SwiperSlide key={idx}>
                <ActiveEventBanner key={element.name} id={element.id} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}
