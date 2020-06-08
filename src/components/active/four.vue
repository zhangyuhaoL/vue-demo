<!--
 * @Description: 
 * @Author: zhangyuhao
 * @Date: 2020-06-08 09:38:41
 * @LastEditTime: 2020-06-08 16:46:53
 * @LastEdiors: zhangyuhao
--> 
<template>
  <div class="main">
    <div class="box">
      <div class="mask" v-if="isHidden">
        <p>6-ئاينىڭ 15-كۈنى ئالقىشلىق مەزمۇنلار سىزنى ساقلايدۇ</p>
      </div>
      <img src="@/assets/img/four/four1.png" alt />
      <img @click="goMovie(movieInfos[0])" src="@/assets/img/four/dxzs.png" alt />
      <img src="@/assets/img/four/four2.png" alt />
      <div class="line">
        <img src="@/assets/img/four/bstg_left.png" alt />
        <img @click="goMovie(movieInfos[2])" src="@/assets/img/four/bstg_right.png" alt />
      </div>
      <div class="line">
        <img @click="goMovie(movieInfos[3])" src="@/assets/img/four/ywdj_left.png" alt />
        <img src="@/assets/img/four/ywdj_right.png" alt />
      </div>
      <div class="line">
        <img src="@/assets/img/four/zamw_left.png" alt />
        <img @click="goMovie(movieInfos[1])" src="@/assets/img/four/zamw_right.png" alt />
      </div>
      <img src="@/assets/img/four/four3.png" alt />
      <img @click="goMovie(movieInfos[4])" src="@/assets/img/four/bf.png" alt />
      <img src="@/assets/img/four/four4.png" alt />
      <div class="line">
        <img src="@/assets/img/four/sssszss_left.png" alt />
        <img @click="goMovie(movieInfos[5])" src="@/assets/img/four/sssszss_right.png" alt />
      </div>
      <div class="line">
        <img @click="goMovie(movieInfos[7])" src="@/assets/img/four/ldz_left.png" alt />
        <img src="@/assets/img/four/ldz_right.png" alt />
      </div>
      <div class="line">
        <img src="@/assets/img/four/ssssslth_left.png" alt />
        <img @click="goMovie(movieInfos[6])" src="@/assets/img/four/ssssslth_right.png" alt />
      </div>
      <img src="@/assets/img/four/four5.png" alt />
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
  name: "four",
  props: ["isHidden"],
  data() {
    return {
      movieInfos: [
        {
          id: "5e9044d01c732d1bba6b38fadcd12f79",
          name: "喋血战士"
        },
        {
          id: "5e831a7f11d61ca81f8b0b8147b41a4d",
          name: "真爱满屋4"
        },
        {
          id: "5e8722af116f31b5d1ad48639f1abf96",
          name: "变身特工"
        },
        {
          id: "5e8d372a2e5e4d0bd6d45b21cf015868",
          name: "一网打尽"
        },
        {
          id: "5e7426ce6bd723031a5ae1807dd21cda",
          name: "白发"
        },
        {
          id: "5e8bedd013ce949795b4279273f19ff1",
          name: "三生三世枕上书"
        },
        {
          id: "ba4ced9b4e84ef4c46d5e008887f8bbc",
          name: "三生三世十里桃花"
        },
        {
          id: "5e7c3a1321607b0b3b538bbdc5c320b8",
          name: "绿豆传"
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
      overflow: hidden;
      p {
        margin-top: 0.6rem;
        text-align: center;
        font-size: 0.4rem;
        color: #fff;
      }
    }
  }
  img {
    width: 100%;
    margin: 0;
  }
}
</style>