<!--
 * @Description: 
 * @Author: zhangyuhao
 * @Date: 2020-05-20 17:27:49
 * @LastEditTime: 2020-05-20 18:25:52
 * @LastEdiors: zhangyuhao
--> 

<template>
  <div class="container">
    <div class="main-box han" v-if="ruleType === 'han'"></div>
    <div class="main-box wei" v-else></div>
  </div>
</template>

<script>
export default {
  name: "ruleInfo",
  data() {
    return {
      ruleType: this.$route.query.type
    };
  }
};
</script>

<style lang="less" scoped>
.bg_image(@url) {
  background-image: url("@{url}.png");
  background-size: contain;
  background-repeat: no-repeat;
  @media (-webkit-min-device-pixel-ratio: 2) {
    background-image: url("@{url}@2x.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
}
.container {
  min-height: 100%;
  background-color: #2032bc;
}
.main-box {
  width: 100%;
  padding-bottom: 203%;
  &.han {
    .bg_image("../../../assets/liveActive/guize_han");
  }
  &.wei {
    .bg_image("../../../assets/liveActive/guize_wei");
  }
}
</style>