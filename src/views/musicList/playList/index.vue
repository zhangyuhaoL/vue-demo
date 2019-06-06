<template>
  <transition name="go-in">
    <div class="mask-container" v-if="isShow">
      <div class="top-none" @click="toggleList"></div>
      <div class="list-container">
        <div class="header">
          <span>歌曲列表</span>
          <span>
            <i class="iconfont icon-shanchu" @click="clearList"></i>
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
            <div class="delete" @click.stop="deleteSong(index)">×</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
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
    if (sessionStorage.playList) {
      this.playList = JSON.parse(sessionStorage.playList);
      this.$emit("getCurList", { list: this.playList });
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
    },
    deleteSong(index) {
      //删除列表后的播放列表不跟session中的一样
      //因为从路由传到播放处的index是永远不会变的，当页面刷新后会重置到初始化，删除的数据又会恢复
      this.playList.splice(index, 1);
      if (index.toString() === this.currentIndex.toString()) {
        if (this.playList.length > 0) {
          if (index >= this.playList.length) {
            this.$emit("chooseSong", {
              songmid: this.playList[index - 1].songmid,
              index: index - 1
            });
          } else {
            this.$emit("chooseSong", {
              songmid: this.playList[index].songmid,
              index
            });
          }
          this.$emit("getCurList", { list: this.playList });
        } else {
          this.$emit("chooseSong", null);
        }
      } else {
        if (index > this.currentIndex) {
          this.$emit("getCurList", { list: this.playList });
        } else {
          this.$emit("getCurList", {
            list: this.playList,
            index: this.currentIndex - 1
          });
        }
      }
    },
    //删除全部
    clearList() {
      this.playList = [];
      this.$emit("getCurList", null);
    }
  }
};
</script>
<style lang="less" scoped>
.go-in-enter-active,
.go-in-leave-active {
  transition: all 0.3s;
}
.go-in-enter, .go-in-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(100%);
}
.mask-container {
  z-index: 20;
  position: fixed;
  left: 0;
  top: 0;
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
        vertical-align: middle;
        .song-info {
          span {
            vertical-align: bottom;
            &:first-child {
              display: inline-block;
              font-size: 16px;
            }
            &:nth-child(2) {
              font-size: 12px;
              color: #888686;
            }
          }
        }
        .delete {
          font-size: 18px;
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
</style>
