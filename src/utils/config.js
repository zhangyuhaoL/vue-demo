/*
 * @Description: ip配置
 * @Author: zhangyuhao
 * @Date: 2020-06-08 11:59:33
 * @LastEditTime: 2020-06-08 12:01:16
 * @LastEdiors: zhangyuhao
 */

const env = "test";
// let BASE_URL = "";
let UPMESS = "";

if (env === "test") {
  // BASE_URL = "http://test.koznak.tv:19999";
  UPMESS = "http://120.205.22.111:9797/activityReportLog";
}

export { UPMESS };
