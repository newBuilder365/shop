import { AxiosResponseData } from "@/types/common";
import { AxiosRequestConfig } from "axios";
import request from "./request";

const api = {
  get<T = any, D = any>(
    url: string,
    config?: AxiosRequestConfig
  ): AxiosResponseData<T, D> {
    return request.get(url, config);
  },
  post<T = any, D = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponseData<T, D>> {
    return request.post(url, data, config);
  },
  put<T = any, D = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponseData<T, D>> {
    return request.put(url, data, config);
  },
  delete<T = any, D=any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponseData<T, D>> {
    return request.delete(url, config);
  },
};

export default api;
