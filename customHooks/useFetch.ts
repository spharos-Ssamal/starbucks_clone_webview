import Config from '@/configs/config.export';
import axios from 'axios';

export const useFetch = async (url:string)  => {
  const { baseUrl } = Config();
  
  const res = await axios.get(baseUrl + url);
  return res;

}
