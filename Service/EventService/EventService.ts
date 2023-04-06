import { CustomAxios } from "@/constants/Apis/Axios/CustomAxios";
import { REQUEST_EVENT_GET } from "@/constants/Apis/URL";
import { REQUEST_EVENT_ACTIVE } from "@/constants/Apis/URL";

export async function RequestEvent(eventId: number) {
  return await CustomAxios.get(REQUEST_EVENT_GET, {
    params: {
      eventId: eventId,
    },
  }).then((res) => res.data);
}

export async function RequestEventActive() {
  return await CustomAxios.get(REQUEST_EVENT_ACTIVE).then((res) => res.data);
}
