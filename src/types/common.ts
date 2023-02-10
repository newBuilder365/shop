import { AxiosResponse } from "axios";

// 接口返回后最终想要类型
export type ICommom<T>= { 
  data: T;
  state: boolean;
  message: string;
  code: string;
}

// 服务返回的数据类型
export type AxiosResponseData<T, D=any> = Promise<AxiosResponse<ICommom<T>, D>['data']>