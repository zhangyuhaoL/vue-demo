<template>
  <div class="music-home">
    <el-tabs v-model="activeName" :stretch="true" @tab-click="handleClick">
      <el-tab-pane label="推荐音乐" name="first">
        <music-home></music-home>
      </el-tab-pane>
      <el-tab-pane label="排行榜" name="second">
        <ranking-comp></ranking-comp>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import MusicHome from "./home/index";
import Ranking from "./ranking/index";

export default {
  components: {
    "music-home": MusicHome,
    "ranking-comp": Ranking
  },
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(val) {
      console.log(val);
    }
  }
};
</script>
<style lang="less" scoped>
.music-home {
  width: 100%;
  height: 100%;
  /deep/ .el-tabs {
    .el-tabs__header {
      margin: 0;
      .el-tabs__active-bar {
        background-color: #dd001b;
      }
      .el-tabs__item {
        &:hover {
          color: #dd001b;
        }
      }
      .is-active {
        color: #dd001b;
      }
    }
  }
}
</style>
