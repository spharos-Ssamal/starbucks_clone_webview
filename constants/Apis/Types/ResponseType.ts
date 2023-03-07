export interface BaseRes<T = any> {
  status: string;
  data: T;
  message: string;
}
