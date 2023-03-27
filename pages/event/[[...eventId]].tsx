import {
  useCallback,
  useEffect,
  useState,
  useRef,
  LiHTMLAttributes,
  DetailedHTMLProps,
  LegacyRef,
} from "react";
import Head from "next/head";
import axios from "axios";
import Config from "@/configs/config.export";
import { REQUEST_EVENT_ACTIVE } from "@/constants/Apis/URL";
import ActiveEventBanner from "@/components/layouts/ActiveEventBanner";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.min.css";
import { useRouter } from "next/router";

interface activeEventRes {
  id: number;
  name: string;
}

export default function Event() {
  const router = useRouter();
  const { baseUrl } = Config();
  const [activeEvent, setActiveEvent] = useState<activeEventRes[]>([]);
  const [eventId, setEventId] = useState(0);
  const [swiper, setSwiper] = useState<SwiperCore>();

  const getSwiperIndexFromEventId = (eventId: number) => {
    if (activeEvent.length !== 0) {
      const event = activeEvent.filter((e) => e.id === eventId)[0];
      return activeEvent.indexOf(event);
    } else {
      return 0;
    }
  };

  const getEventIdFromSwiperIdx = (idx: number) => {
    if (activeEvent.length !== 0) {
      const event = activeEvent[idx];
      return event.id;
    } else {
      return 0;
    }
  };

  const onClickEventButton = (eventId: number) => {
    setEventId(eventId);
  };

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (router.query.eventId !== undefined) {
      const param: string | string[] = router.query.eventId;
      if (param.length !== 0) {
        setEventId(parseInt(param[0]));
      }
    } else {
      if (activeEvent.length !== 0) {
        setEventId(activeEvent[0].id);
      } else {
        setEventId(0);
      }
    }
  }, [router.query.eventId, activeEvent]);

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(getSwiperIndexFromEventId(eventId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventId]);

  return (
    <>
      <Head>
        <title>기획전</title>
      </Head>
      <div className="header-sub">
        <nav>
          <ul>
            {activeEvent &&
              activeEvent.map((element) => (
                <>
                  <li
                    key={element.id}
                    className={eventId === element.id ? "active" : ""}
                    onClick={() => onClickEventButton(element.id)}
                  >
                    {element.name}
                  </li>
                </>
              ))}
          </ul>
        </nav>
      </div>
      <div>
        <Swiper
          onSwiper={setSwiper}
          autoHeight={true}
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          initialSlide={getSwiperIndexFromEventId(eventId)}
          scrollbar={{ draggable: true }}
          onSlideChange={(swiperCore) => {
            const { activeIndex } = swiperCore;
            const nowEventId: number = getEventIdFromSwiperIdx(activeIndex);
            setEventId(nowEventId);
          }}
        >
          {activeEvent &&
            activeEvent.map((element, idx) => (
              <SwiperSlide key={element.id}>
                <ActiveEventBanner key={element.name} id={element.id} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}
