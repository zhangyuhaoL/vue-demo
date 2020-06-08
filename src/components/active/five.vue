<!--
 * @Description: 
 * @Author: zhangyuhao
 * @Date: 2020-06-08 10:04:54
 * @LastEditTime: 2020-06-08 16:44:34
 * @LastEdiors: zhangyuhao
--> 
<template>
  <div class="main">
    <div class="box">
      <div class="mask" v-if="isHidden">
        <p>6-ئاينىڭ 15-كۈنى قولدىن بەرسىڭىز بولمايدىغان كىلاسسىك مەزمۇنلار</p>
      </div>
      <img src="@/assets/img/five/five1.png" alt />
      <img @click="goMovie(movieInfos[0])" src="@/assets/img/five/dbfsdnx.png" alt />
      <img src="@/assets/img/five/five2.png" alt />
      <div class="line">
        <img src="@/assets/img/five/gsjj_left.png" alt />
        <img @click="goMovie(movieInfos[1])" src="@/assets/img/five/gsjj_right.png" alt />
      </div>
      <div class="line">
        <img @click="goMovie(movieInfos[2])" src="@/assets/img/five/xp_left.png" alt />
        <img src="@/assets/img/five/xp_right.png" alt />
      </div>
      <div class="line">
        <img src="@/assets/img/five/eg_left.png" alt />
        <img @click="goMovie(movieInfos[3])" src="@/assets/img/five/eg_right.png" alt />
      </div>
      <img src="@/assets/img/five/five3.png" alt />
      <img @click="goMovie(movieInfos[5])" src="@/assets/img/five/adpj.png" alt />
      <img src="@/assets/img/five/five4.png" alt />
      <div class="line">
        <img src="@/assets/img/five/hfh_left.png" alt />
        <img @click="goMovie(movieInfos[4])" src="@/assets/img/five/hfh_right.png" alt />
      </div>
      <div class="line">
        <img @click="goMovie(movieInfos[6])" src="@/assets/img/five/wjda_left.png" alt />
        <img src="@/assets/img/five/wjda_right.png" alt />
      </div>
      <div class="line">
        <img src="@/assets/img/five/syrdhy_left.png" alt />
        <img @click="goMovie(movieInfos[7])" src="@/assets/img/five/syrdhy_right.png" alt />
      </div>
      <img src="@/assets/img/five/five5.png" alt />
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
  name: "five",
  props: ["isHidden"],
  data() {
    return {
      movieInfos: [
        {
          id: "5ea939d511f9018b07afb8a370f86b2f",
          name: "调包富少的逆袭"
        },
        {
          id: "5ebe6336f83ab45da4c4a15044a02039",
          name: "盖世俊杰"
        },
        {
          id: "5ec73c363b98bb367d3e5ea52ac716bc",
          name: "希皮"
        },
        {
          id: "5eaa8df23040c44f08690a448ff8339f",
          name: "恶棍"
        },
        {
          id: "5eb2803535e0636090d7b3b1058a58fa",
          name: "火凤凰"
        },
        {
          id: "5ea91721242369146f65c5534cc77571",
          name: "爱的迫降"
        },
        {
          id: "5e9fedfe22c188ab7d7de64e0ee499f8",
          name: "无尽的爱"
        },
        {
          id: "5e8d3cca282a1b4b3522815662aad8c2",
          name: "所有人的谎言"
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