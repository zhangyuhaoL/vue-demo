<template>
  <div class="mask-container" :class="isShow ? 'go-in' : ''">
    <div class="top-none" @click="toggleList"></div>
    <div class="list-container">
      <div class="header">
        <span>歌曲列表</span>
        <span>
          <i class="iconfont icon-shanchu"></i>
        </span>
      </div>
      <div class="song-box">
        <div
          class="line"
          v-for="(item, index) in playList"
          :key="index"
          :class="index.toString() === currentIndex.toString()  ? 'current' : ''"
          @click="chooseSong(item, index)"
        >
          <div class="song-info">
            <span>{{item.songname}}&nbsp;</span>
            <span>- {{item.singer}}</span>
          </div>
          <div class="delete">×</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["currentIndex", "isShow"],
  data() {
    return {
      playList: []
    };
  },
  mounted() {
    console.log("333", this.currentIndex);
    if (sessionStorage.playList) {
      this.playList = JSON.parse(sessionStorage.playList);
    }
  },
  methods: {
    chooseSong(item = {}, index) {
      if (item.songmid) {
        this.$emit("chooseSong", { songmid: item.songmid, index });
      }
    },
    toggleList() {
      this.$emit("toggleList");
    }
  }
};
</script>
<style lang="less" scoped>
.mask-container {
  z-index: 20;
  position: fixed;
  left: 0;
  top: 100%;
  width: 100%;
  height: 100%;

  background-color: rgba(rgb(0, 0, 0), 0);
  transition: all 0.3s ease;
  .top-none {
    width: 100%;
    height: 33%;

    background-color: rgba(rgb(0, 0, 0), 0.1);
  }
  .list-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 67%;
    background-color: #fff;
    border-radius: 20px 20px 0 0;
    .header {
      display: flex;
      flex: 0 0 auto;

      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 40px;
      padding: 0 20px;
      border-bottom: 1px solid #f5f5f5;

      font-size: 14px;

      border-radius: 20px 20px 0 0;
      box-sizing: border-box;
    }
    .song-box {
      flex: 0 0 auto;
      padding: 0 20px;
      max-height: calc(~"100% - 40px");
      overflow: hidden;
      overflow-y: scroll;
      .line {
        display: flex;
        justify-content: space-between;
        padding: 8px 0;
        .song-info {
          span {
            vertical-align: bottom;
            &:first-child {
              font-size: 16px;
            }
            &:nth-child(2) {
              font-size: 12px;
              color: #888686;
            }
          }
        }
      }
      .current {
        span {
          color: #d44a4a !important;
        }
      }
    }
  }
}
.go-in {
  top: 0;
}
</style>
