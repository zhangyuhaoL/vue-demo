<template>
  <div class="song-list">
    <div class="list-header">
      <div class="header-bg" ref="header-bg"></div>
      <div class="header-wrap"></div>
    </div>
  </div>
</template>
<script>
import { getSongList } from "@/api";
export default {
  data() {
    return {
      topInfo: {},
      songList: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      if (this.$route.params.id)
        getSongList(this.$route.params.id).then(data => {
          if (data) {
            this.songList = data.songlist;
            this.topinfo = data.topinfo;
            this.totalNum = data.total_song_num;
            this.updateTime = data.update_time;
          }
        });
    }
  }
};
</script>
<style lang="less" scoped>
.song-list {
  width: 100%;
  .list-header {
    position: relative;

    padding: 30px 10px 30px 15px;
    overflow: hidden;
    &:after {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.25);
    }
    .header-bg {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      -webkit-filter: blur(20px);
      filter: blur(20px);
      -webkit-transform: scale(1.5);
      -ms-transform: scale(1.5);
      transform: scale(1.5);
    }
  }
}
</style>

