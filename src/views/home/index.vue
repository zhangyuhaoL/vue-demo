<template>
  <div class="home" :style="{backgroundColor: '#f2dabe'}">
    <div class="share"></div>
    <header class="header">
      <img src="../../assets/home/头图.png" alt />
    </header>
    <div class="main">
      <div class="banner">
        <img src="../../assets/home/暂停按钮.png" alt />
      </div>
      <p class="center-title">
        <img src="../../assets/home/点.png" alt />
        春节会员活动套餐
        <img src="../../assets/home/点.png" alt />
      </p>
      <div class="price" :class="packageWay === 0 ? 'choosed': ''" @click="changePackage(0)">
        <span class="desc">
          <span class="word">KIXMIX套餐一行上下居中</span>
        </span>
        <span class="right">
          <span class="cont">
            <span class="symbol">¥</span>
            <span class="now">9.9</span>
            <span class="before">19.9</span>
          </span>
        </span>
      </div>
      <div class="price last" :class="packageWay === 1 ? 'choosed': ''" @click="changePackage(1)">
        <span class="desc">
          <span class="word">
            KIXMIX月套餐超过一行显示
            转到第二行超过第二行省略...
          </span>
        </span>
        <span class="right">
          <span class="cont">
            <span class="symbol">¥</span>
            <span class="now">9.9</span>
            <span class="before">19.9</span>
          </span>
        </span>
      </div>
      <div class="pay">
        <div class="line" @click="changePayWay(0)">
          <img class="icon" src="../../assets/home/微信支付.png" alt />
          <span class="pay-way">微信支付</span>
          <span class="btn" :class="payWay === 0 ? 'choosed' : ''"></span>
        </div>
        <div class="line" @click="changePayWay(1)">
          <img class="icon" src="../../assets/home/支付宝支付.png" alt />
          <span class="pay-way">支付宝支付</span>
          <span class="btn" :class="payWay === 1 ? 'choosed' : ''"></span>
        </div>
      </div>
      <div class="video-box" v-for="(item, key) in datas" :key="key">
        <h4>
          <span>{{relation[item].title}}</span>
          <img :src="relation[item].url" alt />
        </h4>
        <div class="flex-line" v-for="(item, key) in relation[item].videos" :key="key">
          <div class="item" v-for="(item) in item" :key="item">
            <div class="img-wrap"></div>
            <p class="title">影片名称维语居中显示</p>
          </div>
        </div>
      </div>
    </div>
    <div class="pay-fixed">
      <div class="pay-btn">
        <span class="info">支付</span>
        <span class="sym">¥</span>
        <span class="money">9.9</span>
      </div>
    </div>
    <div class="back-fixed"></div>
  </div>
</template>

<script>
import one from "../../assets/home/除夕看什么.png";
import two from "../../assets/home/初一看什么.png";
import three from "../../assets/home/初二看什么.png";
import four from "../../assets/home/初三看什么.png";
import five from "../../assets/home/初四看什么.png";
import six from "../../assets/home/初五看什么.png";
import seven from "../../assets/home/初六看什么.png";
export default {
  name: "home",
  components: {},
  data() {
    return {
      now: 2,
      datas: [1, 2, 3, 4, 5, 6, 7],
      packageWay: 0,
      payWay: 0,
      relation: {
        1: {
          title: "除夕看什么",
          url: one,
          videos: [
            [1, 2],
            [3, 4]
          ]
        },
        2: {
          title: "初一看什么",
          url: two,
          videos: [
            [1, 2],
            [3, 4]
          ]
        },
        3: {
          title: "初二看什么",
          url: three,
          videos: [
            [1, 2],
            [3, 4]
          ]
        },
        4: {
          title: "初三看什么",
          url: four,
          videos: [
            [1, 2],
            [3, 4]
          ]
        },
        5: {
          title: "初四看什么",
          url: five,
          videos: [
            [1, 2],
            [3, 4]
          ]
        },
        6: {
          title: "初五看什么",
          url: six,
          videos: [
            [1, 2],
            [3, 4]
          ]
        },
        7: {
          title: "初六看什么",
          url: seven,
          videos: [
            [1, 2],
            [3, 4]
          ]
        }
      }
    };
  },
  created() {
    this.calcDate();
  },
  computed: {
    priceChoosed() {
      return {};
    }
  },
  methods: {
    changePackage(key) {
      if (key !== this.packageWay) {
        this.packageWay = key;
      }
    },
    changePayWay(key) {
      if (key !== this.payWay) {
        this.payWay = key;
      }
    },
    calcDate() {
      if (this.now !== 1) {
        const curIndex = this.datas.findIndex(item => item === this.now);
        if (curIndex > -1) {
          const delArr = this.datas.splice(0, curIndex);
          this.datas.splice(this.datas.length, 0, ...delArr);
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.bg_image(@url) {
  background-image: url("@{url}.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  @media (-webkit-min-device-pixel-ratio: 2) {
    background-image: url("@{url}@2x.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
.home {
  position: relative;
  width: 100%;
  color: #140c01;
  .share {
    z-index: 2;
    position: fixed;
    top: 30px;
    right: 30px;
    width: 64px;
    height: 64px;
    .bg_image("../../assets/home/分享按钮");
  }
  .pay-fixed {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 86px;
    line-height: 86px;
    padding: 0 15px;
    box-sizing: border-box;
    .pay-btn {
      display: flex;
      justify-content: center;
      align-self: center;
      width: 100%;
      height: 100%;
      text-align: center;
      .bg_image("../../assets/home/支付按钮");
      .info {
        margin-right: 18px;
        font-size: 30px;
        font-weight: 600;
      }
      .sym {
        margin-right: 10px;
        font-weight: 600;
        font-size: 40px;
      }
      .money {
        font-size: 54px;
        font-weight: 600;
      }
    }
  }
  .back-fixed {
    position: fixed;
    right: 26px;
    bottom: 160px;
    width: 100px;
    height: 100px;
    background-image: url(../../assets/home/回到VIP.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .header {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .main {
    position: relative;
    width: 100%;
    top: -158px;
    padding: 0 28px;
    box-sizing: border-box;
    .banner {
      display: flex;
      width: 100%;
      height: 390px;
      justify-content: center;
      align-items: center;
      background-color: yellowgreen;
    }
    .center-title {
      margin: 30px 0;
      color: #140c01;
      text-align: center;
      font-size: 40px;
      font-weight: 600;
      line-height: 46px;
      img {
        vertical-align: middle;
      }
    }
    .price {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 120px;
      padding-left: 87px;
      padding-right: 32px;
      margin-bottom: 20px;
      color: #fddd9f;
      background-image: url(../../assets/home/VIP套餐未选中.png);
      background-size: 100% 100%;
      box-sizing: border-box;
      transition: all 0.2s ease;
      &.last {
        margin-bottom: 40px;
      }
      &.choosed {
        color: #140c01;
        background-image: url(../../assets/home/VIP套餐选中.png);
      }
      .desc {
        position: relative;
        width: 355px;
        font-size: 30px;
        .word {
          position: absolute;
          top: 50%;
          display: -webkit-box;
          transform: translate(0, -50%);
          overflow: hidden;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
        }
      }
      .right {
        .cont {
          display: block;
          margin-top: 30px;
          .symbol {
            margin-left: 40px;
            margin-right: 12px;
          }
          .now {
            margin-right: 18px;
            font-size: 60px;
          }
          .before {
            font-size: 24px;
            text-decoration: line-through;
          }
        }
      }
    }
    .pay {
      margin-bottom: 45px;
      .line {
        display: flex;
        justify-content: space-between;
        height: 50px;
        margin-bottom: 30px;
        line-height: 50px;
        &:last-child {
          margin-bottom: 0;
        }
        .icon {
          margin-right: 14px;
        }
        .pay-way {
          flex: 1;
          font-size: 28px;
          font-weight: 600;
        }
        .btn {
          flex: 0 0 30px;
          background-image: url(../../assets/home/未选中.png);
          background-position: 0 10px;
          background-size: 100% 30px;
          background-repeat: no-repeat;
          height: 100%;
          &.choosed {
            background-image: url(../../assets/home/选中.png);
          }
        }
      }
    }
    .video-box {
      h4 {
        margin: 0;
        margin-bottom: 30px;
        text-align: right;
        font-size: 40px;
        font-weight: 600;
        img {
          vertical-align: bottom;
        }
      }
      .flex-line {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        margin-bottom: 14px;
        .item {
          flex: 0 0 auto;
          width: calc(~"(100% - 28px) / 2");
          margin-right: 28px;
          .img-wrap {
            width: 100%;
            height: 166px;
            border-radius: 15px;
            background-color: salmon;
          }
          .title {
            width: 100%;
            margin: 0;
            margin-top: 17px;
            text-align: center;
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>