<template>
  <div class="song-box">
    <div class="song-item" v-for="(item, index) in radioList" :key="index" @click="listInfos(item)">
      <img :src="item.picUrl" :alt="item.title">
      <p>{{item.title}}</p>
      <span class="listen" v-show="item.listenCount">
        <i class="el-icon-star-on"></i>
        {{item.listenCount | dealNum}}
      </span>
    </div>
  </div>
</template>
<script>
// import { getSongList } from "@/api";
export default {
  name: "songBox",
  props: ["radioList"],
  data() {
    return {};
  },
  filters: {
    dealNum(value) {
      if (!value) return "";
      if (value > 10000) {
        return (value / 10000).toFixed(1) + "万";
      } else {
        return value;
      }
    }
  },
  methods: {
    listInfos(item) {
      console.log("32", item);
      if (item.id) {
        this.$router.push({ name: "musicList", params: { id: item.id } });
        // getSongList(item.id).then(item => {
        //   console.log(9999, item);
        // });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.song-box {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  .song-item {
    position: relative;
    flex: 0 0 auto;
    width: 33.3%;
    padding: 0 1px;
    margin-bottom: 16px;

    box-sizing: border-box;
    img {
      width: 100%;
    }
    p {
      margin: 0;
      padding: 6px 2px 0 6px;

      font-size: 14px;
    }
    .listen {
      position: absolute;
      top: 8px;
      right: 8px;

      color: #fff;
      font-size: 12px;
      line-height: 12px;
    }
  }
}
</style>
