/*
 * @Description: 大数据上报
 * @Author: zhangyuhao
 * @Date: 2020-06-01 14:18:42
 * @LastEditTime: 2020-06-08 16:39:04
 * @LastEdiors: zhangyuhao
 */

import axios from "axios";
import { UPMESS } from "../utils/config";

var reportData = {
  methods: {
    GetQueryString(url) {
      var reg = new RegExp("(^|&)" + url + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
    // 数据上报
    reportStat(params) {
      /* eslint-disable-next-line */
      if (true || document.referrer == "") {
        // 上报数据
        // const URI = document.URL.toString();
        var pageFrom = this.GetQueryString("from");
        if (pageFrom == undefined || pageFrom == null) {
          pageFrom = "default";
        } else {
          try {
            pageFrom = pageFrom.split("#")[0];
          } catch (e) {
            console.log(e);
          }
        }
        var u = navigator.userAgent;
        const platform = params.isiOSDevice === true ? "iOS" : "Android";
        const infoArr = u.split(";");
        let device = "";
        let system = "";
        if (params.isiOSDevice) {
          const begin = infoArr[1].indexOf("iPhone");
          const i = infoArr[1].indexOf("like");
          system = infoArr[1].substring(begin, i - 1); // iPhone OS 10_3_3
          device = "iPhone";
        } else {
          const i = infoArr[1].indexOf(")");
          system = infoArr[1];
          system = system.replace(/\s+/g, "");
          device = infoArr[1].substring(0, i);
          device = device.replace(/\s+/g, "");
        }
        var param = {
          deviceId: params.deviceID,
          device: device,
          systemType: platform,
          systemVersion: system,
          userId: params.tocken ? params.userID : "",
          userIsLogin: params.tocken ? true : false,
          businessId: "activity",
          businessName: "activity",
          businessFrom: pageFrom,
          pageId: "june_active",
          pageName: "june_active",
          pageType: "1",
          pageValue: "june_active",
          //  eventType: params ? "1" : "0",
          eventType: params.eventType,
          eventData: { destination: params.mess || "" },
        };
        if (params.mess == "") {
          window.sessionStorage.setItem("shangbao", "1");
        }
        //  var requesturl = "http://stat.koznak.tv:9092/activityReportLog";
        var requesturl = UPMESS;
        //  var requesturl = base.appear_test;
        const qs = require("qs");
        const paramsStr = JSON.stringify(param);

        console.log(333333, qs);

        axios
          .post(requesturl, qs.stringify({ data: paramsStr }), {
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          })
          .then(() => {
            console.log("----------数据上报成功");
          })
          .catch(function() {
            console.log("----------数据上报失败");
          });
      }
    },
  },
};
//

export default reportData;
