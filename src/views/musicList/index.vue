<template>
  <div class="song-list">
    <div class="list-header">
      <div class="header-bg" ref="headerBg"></div>
      <div class="header-wrap">
        <div class="img-card">
          <img :src="topInfo.pic_album" :alt="topInfo.ListName">
        </div>
        <div class="header-info">
          <h2>{{topInfo.ListName}}</h2>
        </div>
      </div>
    </div>
    <div class="list-box">
      <span class="title">歌曲列表</span>
      <div class="content" v-for="(item, key) in songList" :key="key">
        <song-item :songInfo="item" :keys="key"></song-item>
      </div>
    </div>
  </div>
</template>
<script>
import { getSongList } from "@/api";
import songItem from "@/components/music/songItem";
export default {
  components: {
    "song-item": songItem
  },
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
      if (this.$route.query.id) {
        getSongList(this.$route.query.id).then(data => {
          if (data && data.data) {
            this.songList = data.data.songlist;
            this.topInfo = data.data.topinfo;
            this.totalNum = data.data.total_song_num;
            this.updateTime = data.data.update_time;
            if (this.topInfo.pic_album) {
              this.setBackground(this.topInfo.pic_album);
            }
          }
        });
      }
    },
    setBackground(data) {
      this.$refs.headerBg.style.backgroundImage = `url(${data})`;
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
    }
    .header-wrap {
      display: flex;
      position: relative;
      z-index: 2;
      .img-card {
        width: 145px;
        height: 145px;
        img {
          width: 100%;
          vertical-align: middle;
        }
      }
      .header-info {
        margin-left: 16px;
        h2 {
          font-size: 18px;
          color: #fefefe;
          font-weight: normal;
        }
      }
    }
  }
  .list-box {
    background-color: #eeeff0;
    .title {
      padding-left: 10px;
      line-height: 24px;
      font-size: 12px;
      color: #666;
    }
  }
}
</style>

