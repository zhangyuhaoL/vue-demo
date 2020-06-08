<template>
  <div class="main-box">
    <header>
      <img src="@/assets/img/bg/bg1.png" alt />
      <img src="@/assets/img/bg/bg2.png" alt />
      <img src="@/assets/img/bg/bg3.png" alt />
      <div class="btn-box">
        <div
          v-for="item in timeData"
          :key="item.name"
          class="btn"
          :class="[
            item.name,
            now - item.time >= 0 ? 'locked' : '',
            item.name === current ? 'choosed' : '',
          ]"
          @click="handleCurrent(item.name)"
        ></div>
      </div>
    </header>
    <transition name="transBox" mode="out-in">
      <keep-alive>
        <component :is="current" :isHidden="isHidden"></component>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
import moment from "moment";
import one from "@/components/active/one";
import two from "@/components/active/two";
import three from "@/components/active/three";
import four from "@/components/active/four";
import five from "@/components/active/five";

export default {
  name: "default",
  components: {
    one,
    two,
    three,
    four,
    five
  },
  data() {
    return {
      now: moment(),
      timeData: [
        {
          time: moment("2020-06-07"),
          name: "one"
        },
        {
          time: moment("2020-06-08"),
          name: "two"
        },
        {
          time: moment("2020-06-09"),
          name: "three"
        },
        {
          time: moment("2020-06-10"),
          name: "four"
        },
        {
          time: moment("2020-06-11"),
          name: "five"
        }
      ],
      current: null
    };
  },
  computed: {
    /**
     * @description: 判断当前日期下的内容是否被阴影遮挡
     * @param {type}
     * @return: true: 在当前日期之后，要被遮挡；false: 在当前日期之前，不被遮挡
     */
    isHidden() {
      if (this.current) {
        const data = this.timeData.find(item => item.name === this.current);
        if (data) {
          return !(this.now - data.time > 0);
        }
        return true;
      }
      return true;
    }
  },
  mounted() {
    this.initToday();
  },
  methods: {
    /**
     * @description: 初始化当天时间，如果找到当天，将当天高亮
     * @param {type}
     * @return:
     */
    initToday() {
      const { timeData } = this;
      const now = moment().format("YYYY-MM-DD");
      let current = null;
      for (let i = 0; i < timeData.length; i += 1) {
        if (timeData[i].time.format("YYYY-MM-DD") === now) {
          current = timeData[i].name;
          break;
        }
      }
      this.current = current;
    },
    /**
     * @description: 切换日期
     * @param {String}
     * @return:
     */
    handleCurrent(item) {
      this.current = item;
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
.transBox-enter-active {
  transition: all 0.6s ease;
}
.transBox-leave-active {
  transition: all 0.6s ease;
}
.transBox-enter,
.transBox-leave {
  opacity: 0;
  // transform: translateX(10px);
}
.main-box {
  width: 100%;
  header {
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
      margin: 0;
      vertical-align: middle;
    }
    .btn-box {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 0.82rem;
      box-sizing: border-box;
      .bg_image("../../assets/img/bg/bg4");
      .btn {
        width: 1.44rem;
        height: 0.82rem;
        transition: all ease 0.4s;
        &.one {
          .bg_image("../../assets/img/btn/un-lock1");
          &.locked {
            .bg_image("../../assets/img/btn/locked1");
          }
          &.choosed {
            .bg_image("../../assets/img/btn/choosed1");
          }
        }
        &.two {
          .bg_image("../../assets/img/btn/un-lock2");
          &.locked {
            .bg_image("../../assets/img/btn/locked2");
          }
          &.choosed {
            .bg_image("../../assets/img/btn/choosed2");
          }
        }
        &.three {
          .bg_image("../../assets/img/btn/un-lock3");
          &.locked {
            .bg_image("../../assets/img/btn/locked3");
          }
          &.choosed {
            .bg_image("../../assets/img/btn/choosed3");
          }
        }
        &.four {
          .bg_image("../../assets/img/btn/un-lock4");
          &.locked {
            .bg_image("../../assets/img/btn/locked4");
          }
          &.choosed {
            .bg_image("../../assets/img/btn/choosed4");
          }
        }
        &.five {
          .bg_image("../../assets/img/btn/un-lock5");
          &.locked {
            .bg_image("../../assets/img/btn/locked5");
          }
          &.choosed {
            .bg_image("../../assets/img/btn/choosed5");
          }
        }
      }
    }
  }
}
</style>
