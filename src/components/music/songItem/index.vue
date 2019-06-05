<template>
  <div class="song-item" @click="playMusic()">
    <div class="num">{{(keys || keys === 0) && keys + 1}}</div>
    <div class="item-info">
      <p class="song-name">{{songInfo.songname || '--'}}</p>
      <p class="author">{{songInfo.singer || '--'}}</p>
    </div>
    <div class="play">
      <span class="circle">
        <i class="el-icon-caret-right"></i>
      </span>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "songItem",
  props: ["songInfo", "keys", "list"],
  data() {
    return {};
  },
  methods: {
    playMusic() {
      this.changeList(this.list || []);
      this.$router.push({
        name: "musicPlay",
        query: { id: this.songInfo.songmid }
      });
    },
    ...mapActions({
      changeList: "changeList"
    })
  }
};
</script>
<style lang="less" scoped>
.song-item {
  display: flex;

  background-color: #fff;
  .num {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    color: #999;
  }
  .item-info {
    flex: 1 1 auto;
    padding: 6px 0;

    border-bottom: 1px solid #f5f5f5;
    p {
      margin: 0;
    }
    .song-name {
      font-size: 18px;
      color: #333;
      line-height: 25px;
    }
    .author {
      color: #888;
      font-size: 12px;
      line-height: 18px;
    }
  }
  .play {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    border-bottom: 1px solid #f5f5f5;
    .circle {
      display: inline-block;
      width: 22px;
      height: 22px;

      border: 1px solid #999;
      border-radius: 50%;
      text-align: center;
      i {
        line-height: 22px;

        color: #999;
      }
    }
  }
}
</style>
