<template>
  <div class="home-content">
    <div class="slider">
      <el-carousel arrow="never" :autoplay="true" height="200px">
        <el-carousel-item v-for="(item, index) in slider" :key="index">
          <img :src="item" alt="封面">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="song-list">
      <h2>推荐歌单</h2>
      <song-box :radioList="radioList"></song-box>
    </div>
  </div>
</template>
<script>
import { getHomeInfo } from "@/api";
import songBox from "../songBox/index";

export default {
  name: "music-home",
  components: {
    "song-box": songBox
  },
  data() {
    return {
      slider: [],
      radioList: []
    };
  },
  mounted() {
    this.getHomeInfo();
  },
  methods: {
    getHomeInfo() {
      getHomeInfo().then(data => {
        if (data && data.data) {
          this.slider = data.data.slider;
          this.radioList = data.data.radioList;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.home-content {
  width: 100%;
  .slider {
    width: 100%;
    height: 200px;

    margin-bottom: 20px;
    img {
      width: 100%;
      height: 200px;
    }
  }
  .song-list {
    width: 100%;
    h2 {
      position: relative;
      height: 20px;
      padding-left: 9px;
      margin-bottom: 14px;
      border-left: 2px solid #d33a31;

      font-size: 17px;
      line-height: 20px;
    }
  }
}
</style>
