import http from './config/http';

//获取医院列表
export const getHospital = () => http.get('raicois/api/v2/Hospital', {});
