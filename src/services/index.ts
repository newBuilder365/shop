import { AxiosResponseData } from "@/types/common";
import api from "@/utils/api";

type Pars = {
  orgCode: string | undefined;
};

const services = {
  getLoginPageUIConfigs: (params: Pars): AxiosResponseData<[]> => {
    return api.get(`UIConfig/GetLoginPageUIConfigs?orgCode=${params.orgCode}`);
  },
};

export default services;
