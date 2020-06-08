<!--
 * @Description: 第一个活动页面
 * @Author: zhangyuhao
 * @Date: 2020-06-05 14:56:33
 * @LastEditTime: 2020-06-08 16:10:38
 * @LastEdiors: zhangyuhao
-->
<template>
  <div class="main">
    <div class="box">
      <div class="mask" v-if="isHidden"></div>
      <img src="@/assets/img/one/one1.png" alt />
      <img @click="goMovie(movieInfos[0])" src="@/assets/img/one/tjzs.png" alt />
      <img src="@/assets/img/one/one2.png" alt />
      <div class="line">
        <img src="@/assets/img/one/dycf_left.png" alt />
        <img @click="goMovie(movieInfos[3])" src="@/assets/img/one/dycf_right.png" alt />
      </div>
      <div class="line">
        <img @click="goMovie(movieInfos[2])" src="@/assets/img/one/kkg_left.png" alt />
        <img src="@/assets/img/one/kkg_right.png" alt />
      </div>
      <div class="line">
        <img src="@/assets/img/one/ssj_left.png" alt />
        <img @click="goMovie(movieInfos[1])" src="@/assets/img/one/ssj_right.png" alt />
      </div>
      <img src="@/assets/img/one/one3.png" alt />
      <img @click="goMovie(movieInfos[4])" src="@/assets/img/one/cql.png" alt />
      <img src="@/assets/img/one/one4.png" alt />
      <div class="line">
        <img src="@/assets/img/one/tkzc_left.png" alt />
        <img @click="goMovie(movieInfos[5])" src="@/assets/img/one/tkzc_right.png" alt />
      </div>
      <div class="line">
        <img @click="goMovie(movieInfos[6])" src="@/assets/img/one/zy_left.png" alt />
        <img src="@/assets/img/one/zy_right.png" alt />
      </div>
      <div class="line">
        <img src="@/assets/img/one/wdqk_left.png" alt />
        <img @click="goMovie(movieInfos[7])" src="@/assets/img/one/wdqk_right.png" alt />
      </div>
      <img src="@/assets/img/one/one5.png" alt />
    </div>

    <img src="@/assets/img/bg/bg5.png" alt @click="share" />
    <img src="@/assets/img/bg/bg6.png" alt />
  </div>
</template>

<script>
import { param } from "@/utils/tools";
import {
  callAppFunc_WebShare,
  callAppFunc_Jump2KoznakVip
} from "../../utils/javascriptAppBridge";

export default {
  name: "one",
  props: ["isHidden"],
  data() {
    return {
      movieInfos: [
        {
          id: "5e0ea71734ccd95f2dcb3129ceb8de15",
          name: "铁甲战士"
        },
        {
          id: "5e18507c2764d94a0c7c1e1213810650",
          name: "神经战"
        },
        {
          id: "5e23bd3177be790efd636d6f0062b7bf",
          name: "卡卡哥"
        },
        {
          id: "5e180f3d72c890d5b7d3395f023170db",
          name: "地狱厨房"
        },
        {
          id: "5e23c8fd2b8be31838098b7ebf221b10",
          name: "陈情令"
        },
        {
          id: "5e216594d60048539c1a8b1ca9709eb9",
          name: "天空之城"
        },
        {
          id: "5dc5579f1316b31aa356a7371654e88c",
          name: "招摇"
        },
        {
          id: "5e169ca320cb455c8e3584575239f4f2",
          name: "武动乾坤第二季"
        }
      ]
    };
  },
  methods: {
    goMovie(item) {
      param.eventType = "1";
      param.mess = `播放-${item.name}`;
      this.reportStat(param);
      const data = {
        type: 510001,
        video_id: item.id
      };

      callAppFunc_Jump2KoznakVip(data);
    },
    share() {
      param.eventType = "1";
      param.mess = "分享";

      const data = {
        shareTitle: "ئەڭ ئالقىشلىق فىلىمنى ھەقسىز كۆرىسىز",
        shareString: "مۇنداق ئېسسىل فىلىمنى كۆرمەي تۇرالامسىز؟",
        shareUrl: ""
      };
      callAppFunc_WebShare(data);
    }
  }
};
</script>
<style lang="less" scoped>
.bg_image(@url) {
  background-image: url("@{url}.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  .box {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    .line {
      display: flex;
      flex-direction: row;
      width: 100%;
      img {
        width: 50%;
        height: 100%;
        margin: 0;
      }
    }
    img {
      width: 100%;
      margin: 0;
    }
    .mask {
      z-index: 2;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
    }
  }
  img {
    width: 100%;
    margin: 0;
  }
}
</style>
