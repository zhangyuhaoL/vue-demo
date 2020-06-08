<!--
 * @Description: 
 * @Author: zhangyuhao
 * @Date: 2020-06-05 17:50:44
 * @LastEditTime: 2020-06-08 11:08:41
 * @LastEdiors: zhangyuhao
--> 
<template>
  <div class="main">
    <div class="box">
      <div class="mask" v-if="isHidden">
        <p>6-ئاينىڭ 14-كۈنى نادىر فىلىملەرنى كۆرۈڭ</p>
      </div>
      <img src="@/assets/img/three/three1.png" alt />
      <img @click="goMovie(movieInfos[0])" src="@/assets/img/three/ygzyx.png" alt />
      <img src="@/assets/img/three/three2.png" alt />
      <div class="line">
        <img src="@/assets/img/three/ndzjxs_left.png" alt />
        <img @click="goMovie(movieInfos[2])" src="@/assets/img/three/ndzjxs_right.png" alt />
      </div>
      <div class="line">
        <img @click="goMovie(movieInfos[3])" src="@/assets/img/three/mn_left.png" alt />
        <img src="@/assets/img/three/mn_right.png" alt />
      </div>
      <div class="line">
        <img src="@/assets/img/three/pxtx_left.png" alt />
        <img @click="goMovie(movieInfos[1])" src="@/assets/img/three/pxtx_right.png" alt />
      </div>
      <img src="@/assets/img/three/three3.png" alt />
      <img @click="goMovie(movieInfos[4])" src="@/assets/img/three/cqz.png" alt />
      <img src="@/assets/img/three/three4.png" alt />
      <div class="line">
        <img src="@/assets/img/three/qhd1988_left.png" alt />
        <img @click="goMovie(movieInfos[6])" src="@/assets/img/three/qhd1988_right.png" alt />
      </div>
      <div class="line">
        <img @click="goMovie(movieInfos[7])" src="@/assets/img/three/txl_left.png" alt />
        <img src="@/assets/img/three/txl_right.png" alt />
      </div>
      <div class="line">
        <img src="@/assets/img/three/fhjr_left.png" alt />
        <img @click="goMovie(movieInfos[5])" src="@/assets/img/three/fhjr_right.png" alt />
      </div>
      <img src="@/assets/img/three/three5.png" alt />
    </div>

    <img src="@/assets/img/bg/bg5.png" alt />
    <img src="@/assets/img/bg/bg6.png" alt />
  </div>
</template>

<script>
export default {
  name: "three",
  props: ["isHidden"],
  data() {
    return {
      movieInfos: [
        {
          id: "5e611bf410600bc44ec736a274127941",
          name: "勇敢者游戏2：再战巅峰"
        },
        {
          id: "5e588b11591bbdc34c90648afe56915d",
          name: "骗行天下"
        },
        {
          id: "5e588a697d7c4002ef5f8ce2b4a60cf8",
          name: "年度最佳学生2"
        },
        {
          id: "5e6060aa108533917ff99f86cd5173f5",
          name: "魔女"
        },
        {
          id: "5de8e12d26b5041b6acc2f607bc2ec39",
          name: "楚乔传"
        },
        {
          id: "5e566524bc85d169dc7ca37ccad2538f",
          name: "烽火佳人"
        },
        {
          id: "5b51bad6390ef4102cbaaf98a90615ea",
          name: "请回答1988"
        },
        {
          id: "5e34e5332b6dbc35d288f751a8ba092e",
          name: "听雪楼"
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