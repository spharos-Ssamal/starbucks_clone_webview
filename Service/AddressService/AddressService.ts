import { AddAddressReq, EditAddressReq } from "@/Types/address/AddressType";
import { CustomAxios } from "@/constants/Apis/Axios/CustomAxios";
import {
  REQUEST_ADDRESS_ALL,
  REQUEST_ADDRESS_ADD,
  REQUEST_ADDRESS_EDIT,
  REQUEST_ADDRESS_DELETE,
} from "@/constants/Apis/URL";

export async function RequestGetAllAddress(userId: string) {
  return await CustomAxios.get(REQUEST_ADDRESS_ALL, {
    params: {
      userId: userId,
    },
  }).then((res) => res.data);
}

export async function RequestAddAddress(req: AddAddressReq) {
  return await CustomAxios.post(REQUEST_ADDRESS_ADD, req).then(
    (res) => res.data
  );
}

export async function RequestModifyAddress(req: EditAddressReq) {
  return await CustomAxios.put(REQUEST_ADDRESS_EDIT, req).then(
    (res) => res.data
  );
}

export async function RequestDeleteAddress(addressId: number) {
  return await CustomAxios.delete(REQUEST_ADDRESS_DELETE, {
    params: {
      addressId: addressId,
    },
  }).then((res) => res.data);
}
