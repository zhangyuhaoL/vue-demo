/*
 * @Description: http
 * @Author: zhangyuhao
 * @Date: 2020-04-17 16:05:22
 * @LastEditTime: 2020-06-08 16:42:25
 * @LastEdiors: zhangyuhao
 */

import axios from "axios";
// import { Message } from 'element-ui';
import { baseUrl } from "./env";

axios.defaults.timeout = 5000;
axios.defaults.baseURL = baseUrl;

let http = {};

//http request 拦截器
axios.interceptors.request.use(
  (config) => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    // config.data = JSON.stringify(config.data);
    config.headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    // if(token){
    //   config.params = {'token':token}
    // }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

//http response 拦截器
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

http.get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, params)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

http.post = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

http.put = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .put(url, params)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default http;
