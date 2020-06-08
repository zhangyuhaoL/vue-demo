<!--
 * @Description: 
 * @Author: zhangyuhao
 * @Date: 2020-06-05 11:11:34
 * @LastEditTime: 2020-06-08 14:12:46
 * @LastEdiors: zhangyuhao
--> 
<template>
  <div id="app">
    <transition name="transBox">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { getSomeInfo, param } from "@/utils/tools";
import {
  // callAppFunc_changeNavColor,
  callAppFunc_isEnableRefresh
  // callAppFunc_Jump2Act,
  // callAppFunc_Jump2KoznakVip
} from "@/utils/javascriptAppBridge";
export default {
  name: "app",
  data() {
    return {
      userInfo: {}
    };
  },
  mounted() {
    callAppFunc_isEnableRefresh(); //禁止刷新
    if (!this.userInfo.userID || !this.userInfo.tocken) {
      // 通过js桥拿到一些设备和用户信息
      getSomeInfo().then(result => {
        console.log(1, result);
        // 将拿到的json数据解析成对象
        const resObj = result && JSON.parse(result);

        if (resObj) {
          this.userInfo.userID = resObj.userId;
          this.userInfo.tocken = resObj.tocken;
          this.userInfo.deviceID = resObj.deviceId;

          param.userID = resObj.userId;
          param.tocken = resObj.tocken;
          param.deviceID = resObj.deviceId;
          param.mess = resObj.mess || "";
          param.eventType = "0";
          param.isiOSDevice = resObj.version.includes("iOS"); //大数据上报参数

          if (!window.sessionStorage.getItem("shangbao")) {
            this.reportStat(param); // 大数据上报
          }
        }
      });
    } else {
      param.userID = this.userInfo.userID;
      param.tocken = this.userInfo.tocken;
      param.deviceID = this.userInfo.deviceID;
      param.mess = this.userInfo.mess;
      param.eventType = "0";
      param.isiOSDevice =
        this.userInfo.version && this.userInfo.version.includes("iOS"); //大数据上报参数

      if (!window.sessionStorage.getItem("shangbao")) {
        this.reportStat(param);
      }
    }
  }
};
</script>


<style lang="less">
// @import "./assets/css/common.css";
html {
  width: 100%;
  height: 100%;
  body {
    width: 100%;
    height: 100%;
  }
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  color: #2c3e50;
  .transBox-enter-active {
    transition: all 0.3s ease;
  }
  .transBox-leave-active {
    transition: all 0.3s ease;
  }
  .transBox-enter,
  .transBox-leave {
    opacity: 0;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
