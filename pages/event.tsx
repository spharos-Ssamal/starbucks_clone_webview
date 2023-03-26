import { MouseEventHandler, useCallback, useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import Config from "@/configs/config.export";
import { REQUEST_EVENT_ACTIVE } from "@/constants/Apis/URL";
import ActiveEventBanner from "@/components/layouts/ActiveEventBanner";

interface activeEventRes {
  id: number;
  name: string;
}

export default function Event() {
  const { baseUrl } = Config();
  const [activeEvent, setActiveEvent] = useState<activeEventRes[]>([]);
  const [eventId, setEventId] = useState<number>(0);

  const onClickEventBanner = (value: number) => {
    setEventId(value);
    console.log(eventId);
  };

  const fetchEventActive = useCallback(async () => {
    axios
      .get(`${baseUrl}/${REQUEST_EVENT_ACTIVE}`)
      .then((res) => {
        const result: activeEventRes[] = res.data.data;
        if (result.length != 0 && result != undefined) {
          setActiveEvent([...result]);
          setEventId(result[0].id);
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
              activeEvent.map((element) => (
                <>
                  <li
                    key={element.id}
                    onClick={() => onClickEventBanner(element.id)}
                  >
                    {element.name}
                  </li>
                </>
              ))}
          </ul>
        </nav>
      </div>
      {eventId != 0 && (
        <>
          <ActiveEventBanner id={4} />
        </>
      )}
    </>
  );
}
