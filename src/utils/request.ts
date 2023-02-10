import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const request: AxiosInstance = axios.create({
  baseURL: "http://220.178.103.125:8088",
  timeout: 5000,
});

// 请求拦截器
request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在这里可以对请求参数进行处理，例如加入 token
    // config.headers["Authorization"] = "Bearer " + window.localStorage.getItem("token");
    return config;
  },
  (error: any) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response: AxiosResponse) => {
    response.data.data = response.data.Data
    response.data = {
      data: response.data.Data,
      message: response.data.Message,
      code: response.data.Code,
      state: response.data.State
    }
    return response.data;
  },
  (error: any) => {
    // Handle errors here
    return Promise.reject(error);
  }
);



export default request;
