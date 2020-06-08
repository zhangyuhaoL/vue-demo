/*
 * @Description:
 * @Author: zhangyuhao
 * @Date: 2020-06-08 12:11:20
 * @LastEditTime: 2020-06-08 12:17:54
 * @LastEdiors: zhangyuhao
 */
import {
  callAppFunc_getSomeParams,
  // callAppFunc_Jump2KoznakVip,
  // callAppFunc_WebShare
} from "./javascriptAppBridge";

/**
 * 大数据上报对象
 */
const param = {
  deviceID: "",
  tocken: "",
  userID: "",
  eventType: "", //0 预览 1点击
  mess: "",
  isiOSDevice: "", //手机型号
};

/**
 * 获取一些设备信息
 *
 */
function getSomeInfo() {
  return new Promise((resolve, rejects) => {
    callAppFunc_getSomeParams((response) => {
      if (response != "") {
        resolve(response);
      } else {
        rejects("获取信息失败");
      }
    });
  });
}

export { getSomeInfo, param };
