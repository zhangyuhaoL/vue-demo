<!--
 * @Description: 第二个活动页面
 * @Author: zhangyuhao
 * @Date: 2020-06-05 14:56:33
 * @LastEditTime: 2020-06-08 11:12:02
 * @LastEdiors: zhangyuhao
-->
<template>
  <div class="main">
    <div class="box">
      <div class="mask" v-if="isHidden">
        <p>6-ئاينىڭ 13-كۈنى چوقۇم كىرىپ كۆرۈڭ</p>
      </div>
      <img src="@/assets/img/two/two1.png" alt />
      <img @click="goMovie(movieInfos[2])" src="@/assets/img/two/zjz.png" alt />
      <img src="@/assets/img/two/two2.png" alt />
      <div class="line">
        <img src="@/assets/img/two/yw_left.png" alt />
        <img @click="goMovie(movieInfos[3])" src="@/assets/img/two/yw_right.png" alt />
      </div>
      <div class="line">
        <img @click="goMovie(movieInfos[1])" src="@/assets/img/two/tsxl_left.png" alt />
        <img src="@/assets/img/two/tsxl_right.png" alt />
      </div>
      <div class="line">
        <img src="@/assets/img/two/wmjs_left.png" alt />
        <img @click="goMovie(movieInfos[0])" src="@/assets/img/two/wmjs_right.png" alt />
      </div>
      <img src="@/assets/img/two/two3.png" alt />
      <img @click="goMovie(movieInfos[4])" src="@/assets/img/two/qyn.png" alt />
      <img src="@/assets/img/two/two4.png" alt />
      <div class="line">
        <img src="@/assets/img/two/gcd_left.png" alt />
        <img @click="goMovie(movieInfos[7])" src="@/assets/img/two/gcd_right.png" alt />
      </div>
      <div class="line">
        <img @click="goMovie(movieInfos[5])" src="@/assets/img/two/mzwj_left.png" alt />
        <img src="@/assets/img/two/mzwj_right.png" alt />
      </div>
      <div class="line">
        <img src="@/assets/img/two/sscf_left.png" alt />
        <img @click="goMovie(movieInfos[7])" src="@/assets/img/two/sscf_right.png" alt />
      </div>
      <img src="@/assets/img/two/two5.png" alt />
    </div>

    <img src="@/assets/img/bg/bg5.png" alt />
    <img src="@/assets/img/bg/bg6.png" alt />
  </div>
</template>

<script>
export default {
  name: "two",
  props: ["isHidden"],
  data() {
    return {
      movieInfos: [
        {
          id: "5e3bd0a22a41fbfa531217a3803105b7",
          name: "亡命驾驶"
        },
        {
          id: "5e33e4c21e35c00f9c3fe2d030a8ddcb",
          name: "天使陷落"
        },
        {
          id: "5e48a58710d3793ec4b7408519d25709",
          name: "终结者6"
        },
        {
          id: "5e54a55f20ce61ea3eb16a7aa77a8bf4",
          name: "叶问4"
        },
        {
          id: "5e4be0e7137ab21fdf42fce42a60b6da",
          name: "庆余年"
        },
        {
          id: "5e4374d794be976bc6fab849fb029302",
          name: "媚者无疆"
        },
        {
          id: "5e4cbfbd1a040b8c98f22947d7e90e4b",
          name: "双世宠妃第一季"
        },
        {
          id: "5e4f673820651501da3a37a926a7f3c2",
          name: "鬼吹灯之怒晴湘西"
        }
      ]
    };
  },
  methods: {
    goMovie(item) {
      console.log(1111, item);
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
