<template>
  <div class="ranking-box">
    <div class="header-bg">
      <div class="header-info">
        <h2>小铃铛排行</h2>
      </div>
    </div>
    <div class="ranking-item">
      <song-box :radioList="radioList"></song-box>
    </div>
  </div>
</template>
<script>
import { getRanking } from "@/api";
import songBox from "../songBox/index";

export default {
  name: "ranking",
  components: {
    "song-box": songBox
  },
  data() {
    return {
      radioList: []
    };
  },
  mounted() {
    this.getRanking();
  },
  methods: {
    getRanking() {
      getRanking().then(data => {
        console.log("234", data);
        if (data && data.data) {
          this.radioList = data.data;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.ranking-box {
  width: 100%;
  .header-bg {
    position: relative;
    width: 100%;
    padding-top: 38.9%;
    margin-bottom: 20px;

    background-image: url(../../../assets/hot_music_bg_2x.jpg);
    background-repeat: no-repeat;
    background-size: contain;
    .header-info {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      flex-direction: column;
      justify-content: center;

      padding-left: 20px;
      h2 {
        color: #fff;
      }
    }
  }
  .ranking-item {
    width: 100%;
  }
}
</style>
