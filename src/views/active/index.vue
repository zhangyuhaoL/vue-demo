<template>
  <div class="main-ranking">
    <header>
      <!-- <img src="" alt="" /> -->
    </header>
    <div class="content">
      <div class="role-content">
        <div class="btn" @click="goRule('han')"></div>
        <div class="btn" @click="goRule('wei')"></div>
      </div>
      <div class="info-box">
        <div class="info"></div>
      </div>
      <div class="rank-box">
        <div class="bg"></div>
      </div>
      <div class="time-item">
        <span
          v-for="(item, key) in time"
          :key="key"
          :class="current === key ? 'choosed' : ''"
          @click="handleCurrent(key, item)"
        >{{ getDate(item) }}</span>
      </div>
      <div class="time-line">
        <div class="tips">
          <div
            class="tip"
            v-for="(item, key) in time"
            :key="key"
            :class="key === current ? 'choosed' : ''"
          ></div>
        </div>
        <div class="line"></div>
      </div>
      <div class="infos">
        <div class="head">
          <span>排名</span>
          <span class="user">用户</span>
          <span>人气值</span>
        </div>
        <div class="lines" v-if="rankList.list">
          <div
            class="line"
            v-for="(item, key) in rankList.list"
            :key="key"
            @click="clickLine(item)"
          >
            <div class="rank">
              <span v-if="key > 2">{{key > 8 ? key + 1 : `0${key + 1}`}}</span>
            </div>
            <div class="user">
              <img :src="item.avatar_thumb" alt />
              <span class="name">{{item.user_nicename}}</span>
            </div>
            <div class="number">{{item.value_total}}</div>
          </div>
        </div>
        <div class="lines" v-else></div>
      </div>
      <!-- <div class="desc">
        人气值：主播可通过直播时长、观看人数、
        互动情况和礼物收入来积累人气值哦！
      </div>
      <div
        class="desc first-font"
      >ئالقىشلىق دەرىجە: دېكتورلار كۆرۈرمەن سانى، بىۋاستە كۆرسىتىشنىڭ ۋاقتى، كىرىملاردىن پايدىلىنىپ ئالقىشلىق دەرىجىسىنى ئۆستۈرەلەيدۇ</div>
      <div class="desc second">人气值计算以开播时间为准</div>
      <div class="desc first-font">نەتىجىڭىز بىۋاستە كۆرسىتىشنى باشلىغان كۈنىڭىزگە تەۋە</div>-->
      <!-- <footer>
        <p>پىنتوزىلار، ياقتۇرغان دېكتورغا مەدەت بېرىشنى ئۇنۇتماڭلار جۇمۇ</p>
        <p>亲爱的用户们，快去为自己喜欢的主播增加人气值吧！</p>
      </footer>-->
    </div>
  </div>
</template>

<script>
// import { getRankList } from "@/api";
import { callAppFunc_JumpAnchor } from "@/utils/javascriptAppBridge";
import { baseUrl } from "@/config/config";
import moment from "moment";
export default {
  beforeRouteEnter(to, from, next) {
    document.title = "直播间·狂收礼";
    next();
  },
  data() {
    return {
      time: [
        moment("2020-05-22").valueOf(),
        moment("2020-05-23").valueOf(),
        moment("2020-05-24").valueOf(),
        moment("2020-05-25").valueOf()
      ],
      current: 0,
      starttime: moment(),
      rankList: {}
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      const starttime = parseInt(this.time[this.current].valueOf() / 1000);
      this.$http
        .get(
          `${baseUrl}api/public/?service=Live.getCharmList&starttime=${starttime}`
        )
        .then(res => {
          if (res && res.data) {
            const data = res.data && res.data.info;
            this.rankList = data;
          } else {
            this.rankList = {};
          }
        });
    },
    goRule(type) {
      this.$router.push({
        name: "ruleInfo",
        query: {
          type
        }
      });
    },
    handleCurrent(key, time) {
      if (moment() < moment(time)) {
        return;
      }
      if (this.current !== key) {
        this.current = key;
        this.getList();
      }
    },
    getDate(val) {
      return moment(val).format("MM月DD日");
    },
    clickLine(item) {
      callAppFunc_JumpAnchor(JSON.stringify(item));
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
.main-ranking {
  width: 100%;
  header {
    width: 100%;
    padding-bottom: 70%;
    .bg_image("../../assets/liveActive/h5_toutu_bj");
  }

  .content {
    position: relative;
    width: 100%;
    padding-top: 52px;
    padding-bottom: 50px;
    background-color: #2032bc;
    .role-content {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 52px;
      margin-bottom: 48px;
      .btn {
        &:first-child {
          width: 268px;
          height: 52px;
          margin-right: 40px;
          .bg_image("../../assets/liveActive/guizu_han_btn");
        }
        &:last-child {
          width: 296px;
          height: 80px;
          .bg_image("../../assets/liveActive/guizu_wei_btn");
        }
      }
    }
    .info-box {
      width: 100%;
      margin-bottom: 20px;
      padding: 0 30px;
      box-sizing: border-box;
      .info {
        width: 100%;
        padding-bottom: 57%;
        border-radius: 20px;
        .bg_image("../../assets/liveActive/wanfa");
      }
    }
    .rank-box {
      width: 100%;
      margin-bottom: 38px;
      padding: 0 100px;
      box-sizing: border-box;
      .bg {
        width: 100%;
        padding-bottom: 22%;
        .bg_image("../../assets/liveActive/paihangbang");
      }
    }
    .time-item {
      display: flex;
      justify-content: space-between;
      padding: 0 63px;
      color: rgba(256, 256, 256, 0.5);
      font-size: 30px;
      span {
        flex: 0 0 auto;
        width: 20%;
        text-align: center;
        &.choosed {
          color: rgba(256, 256, 256, 1);
        }
      }
    }
    .time-line {
      width: 100%;
      margin-top: 26px;
      padding: 0 55px;
      box-sizing: border-box;
      .tips {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 30px;
        .tip {
          flex: 0 0 auto;
          width: 20%;
          &.choosed {
            background-image: url(../../assets/ranking/指针.png);
            background-size: 35px 30px;
            background-repeat: no-repeat;
            background-position: 50% 5px;
            @media (-webkit-min-device-pixel-ratio: 2) {
              background-image: url(../../assets/ranking/指针@2x.png);
              background-size: 35px 30px;
              background-repeat: no-repeat;
              background-position: 50% 5px;
            }
          }
        }
      }
      .line {
        width: 100%;
        height: 4px;
        background-color: #feeb3d;
      }
    }
    .infos {
      margin-top: 20px;
      overflow: hidden;
      .head {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        padding: 0 74px;
        color: #fff;
        font-size: 30px;
        span {
          flex: 0 0 auto;
          &:first-child {
            text-align: left;
          }
          &:last-child {
            text-align: right;
          }
          &.user {
            flex: 1;
            text-align: center;
          }
        }
      }
      .lines {
        padding: 0 20px;
        .line {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 90px;
          padding-left: 38px;
          padding-right: 62px;
          margin-bottom: 20px;
          background-color: #fff;
          border-radius: 14px;
          box-sizing: border-box;
          &:last-child {
            margin-bottom: 0;
          }
          .rank {
            flex: 0 0 auto;
            width: 80px;
            height: 80px;
            text-align: center;
            line-height: 80px;
            color: #1b1b1b;
            font-size: 32px;
          }
          .user {
            flex: 1;
            height: 80px;
            text-align: center;
            line-height: 80px;
            img {
              width: 60px;
              height: 60px;
              margin-right: 16px;
              border-radius: 50%;
              vertical-align: middle;
            }
            .name {
              display: inline-block;
              width: 160px;
              color: #1b1b1b;
              font-size: 24px;
              text-align: left;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              vertical-align: middle;
            }
          }
          .number {
            flex: 0 0 auto;
            width: 120px;
            height: 80px;
            font-size: 28px;
            line-height: 80px;
            text-align: right;
          }
          &:nth-child(1) {
            .rank {
              .bg_image("../../assets/ranking/1_huangguan");
            }
          }
          &:nth-child(2) {
            .rank {
              .bg_image("../../assets/ranking/2_huangguan");
            }
          }
          &:nth-child(3) {
            .rank {
              .bg_image("../../assets/ranking/3_huangguan");
            }
          }
        }
      }
    }
    .desc {
      margin-top: 20px;
      padding: 0 90px;
      color: #fff;
      font-size: 26px;
      line-height: 36px;
      text-align: center;
      &.second {
        margin-top: 30px;
      }
    }
    footer {
      margin: 20px;
      margin-bottom: 0;
      padding: 30px 52px;
      border-top: 1px solid #c2c2c2;
      color: #fff;
      font-size: 26px;
      text-align: center;
      p {
        margin-top: 0;
      }
    }
  }
}
</style>
