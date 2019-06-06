<template>
  <div class="play-content">
    <div class="play-bg"></div>
    <div class="song-wrap">
      <div class="song-disc">
        <div class="bar" :class="playStatus==='play' ? 'play' : ''"></div>
        <div class="disk">
          <img :class="pause" src="../../assets/singer.jpg" @click="handlePlay">
          <div class="play-btn" v-show="playStatus !== 'play'" @click="handlePlay"></div>
        </div>
      </div>
    </div>
    <div class="controls">
      <div class="process">
        <span class="current">{{current}}</span>
        <el-slider v-model="currentTime" :max="duration" :show-tooltip="false" @change="changeTime"></el-slider>
        <span class="all">{{allTime}}</span>
      </div>
      <div class="btns">
        <span @click="setPlayWay">
          <i class="iconfont" :class="playWayIcon[playWay]"></i>
        </span>
        <span @click="cutMusic(-1)">
          <i class="iconfont icon-yduishangyiqu"></i>
        </span>
        <span @click="handlePlay">
          <i class="iconfont" :class="playStatus === 'play' ? 'icon-zanting' : 'icon-bofang'"></i>
        </span>
        <span @click="cutMusic(1)">
          <i class="iconfont icon-yduixiayiqu"></i>
        </span>
        <span @click="toggleList">
          <i class="iconfont icon-liebiao1"></i>
        </span>
      </div>
    </div>
    <audio
      class="audio"
      ref="audio"
      preload="auto"
      :loop="playWay === 'cycle' ? 'loop': false"
      :src="musicSrc"
      @canplay="initPlay"
      @timeupdate="setNowTime"
      @durationchange="getDuration"
      @ended="musicEnd"
    ></audio>
    <play-list
      :isShow="isShow"
      :currentIndex="currentIndex"
      @chooseSong="listChooseMusic"
      @toggleList="toggleList"
      @getCurList="setSongList"
    ></play-list>
  </div>
</template>
<script>
import { getSongUrl } from "@/api";
import { mapState } from "vuex";
import playList from "@/views/musicList/playList/index";
export default {
  name: "musicPlay",
  components: {
    "play-list": playList
  },
  data() {
    return {
      playStatus: "stop", //播放状态 stop:停止，play:播放,pause:暂停
      musicSrc: "", //播放地址
      currentTime: 0, //当前播放时间长度
      duration: 0, //总时长
      currentIndex: this.$route.query.current, //当前播放音乐index
      isShow: false, //播放列表
      curPlayList: [], //当前播放列表
      playWay: "order", //播放方式order:顺序,random:随机,cycle: 单曲循环
      playWayIcon: {
        order: "icon-xunhuan",
        random: "icon-suijibofang",
        cycle: "icon-danquxunhuan"
      }
    };
  },
  mounted() {
    if (this.$route.query.id) {
      this.getMusics(this.$route.query.id);
    }
  },
  computed: {
    ...mapState({
      // playList: state => state.songModule.playList
    }),
    pause() {
      return this.playStatus === "pause"
        ? "rotate pause"
        : this.playStatus === "play"
        ? "rotate"
        : "";
    },
    current() {
      return (
        ((this.currentTime || this.currentTime === 0) &&
          this.formateTime(this.currentTime)) ||
        "0:0"
      );
    },
    allTime() {
      return (
        ((this.formateTime || this.formateTime === 0) &&
          this.formateTime(this.duration)) ||
        "0:0"
      );
    }
  },
  methods: {
    formateTime(time) {
      if (time >= 60) {
        return `${parseInt(time / 60)}:${parseInt(time % 60)}`;
      } else {
        return "0:" + parseInt(time);
      }
    },
    handlePlay() {
      if (this.curPlayList.length > 0) {
        if (this.playStatus === "play") {
          this.playStatus = "pause";
          this.musicPause();
        } else {
          this.playStatus = "play";
          this.musicPlay();
        }
      } else {
        this.$notify({
          title: "没有更多歌曲了",
          position: "top-right"
        });
      }
    },
    //获取音乐
    getMusics(params) {
      this.musicSrc = "";
      this.playStatus = "stop";
      this.currentTime = 0;
      getSongUrl(params).then(data => {
        if (data && data.data) {
          this.musicSrc = data.data[0];
        } else {
          this.musicSrc = "";
          this.playStatus = "error";
        }
      });
    },
    listChooseMusic(data) {
      if (data) {
        this.currentIndex = data.index;
        this.getMusics(data.songmid);
      } else {
        this.currentIndex = 0;
        this.musicSrc = "";
        this.playStatus = "stop";
      }
    },
    //暂停
    musicPause() {
      this.$refs.audio.pause();
    },
    //播放
    musicPlay() {
      this.$refs.audio.play();
    },
    //获取正在变化的时间
    setNowTime() {
      if (this.$refs.audio) {
        const currentTime = this.$refs.audio.currentTime;
        if (currentTime || currentTime === 0) {
          this.currentTime = currentTime;
        }
      }
    },
    //音频数据足以播放了
    initPlay() {
      this.$refs.audio
        .play()
        .then(() => {
          this.playStatus = "play";
        })
        .catch(() => {
          console.log("自动播放失败，点击重新播放");
        });
    },
    //时间长度拿到了
    getDuration() {
      const duration = this.$refs.audio.duration;
      if (duration) {
        this.duration = duration;
      }
    },
    //拉动滚动条
    changeTime(val) {
      if (val || val === 0) {
        this.$refs.audio.currentTime = val;
      }
    },
    musicEnd() {
      if (this.curPlayList.length > 0) {
        if (this.playWay !== "cycle") {
          //只有不是单曲循环才设置下一首的index
          this.setNextIndex(1);
          this.getMusics(this.curPlayList[this.currentIndex].songmid);
        }
      } else {
        this.musicSrc = "";
        this.playStatus = "stop";
        this.currentTime = 0;
        this.currentIndex = 0;
        setTimeout(() => {
          this.duration = 0;
        }, 0);
      }
    },
    //切换上一曲，下一曲
    cutMusic(index) {
      if (this.curPlayList.length > 1) {
        this.setNextIndex(index);
        this.getMusics(this.curPlayList[this.currentIndex].songmid);
      } else {
        this.$notify({
          title: "没有更多歌曲了",
          position: "top-right"
        });
      }
    },
    toggleList() {
      this.isShow = !this.isShow;
    },
    //因为需要跟子组件的歌曲列表保持同步，所以不能从session取
    setSongList(data) {
      if (data) {
        this.curPlayList = data.list;
        if (data.index) {
          this.currentIndex = data.index;
        }
      } else {
        this.currentTime = 0;
        this.musicSrc = "";
        this.playStatus = "stop";

        this.curPlayList = [];
        this.currentIndex = 0;
        setTimeout(() => {
          this.duration = 0;
        }, 0);
      }
    },
    //设置播放方式
    setPlayWay() {
      if (this.playWay === "order") {
        this.playWay = "random";
      } else if (this.playWay === "random") {
        this.playWay = "cycle";
      } else {
        this.playWay = "order";
      }
    },
    //根据播放方式选择下一首要播放的歌
    setNextIndex(index) {
      if (this.playWay === "random") {
        const length = this.curPlayList.length;
        this.currentIndex = parseInt(Math.random() * length);
      } else {
        if (index > 0) {
          if (this.currentIndex >= this.curPlayList.length - 1) {
            this.currentIndex = 0;
          } else {
            this.currentIndex = parseInt(this.currentIndex) + parseInt(index);
          }
        } else {
          if (this.currentIndex <= 0) {
            this.currentIndex = this.curPlayList.length - 1;
          } else {
            this.currentIndex = parseInt(this.currentIndex) + parseInt(index);
          }
        }
      }
    }
  }
};
</script>
<style lang="less" scoped>
.play-content {
  width: 100%;
  height: 100%;
  .audio {
    width: 0;
    height: 0;
  }
  .play-bg {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;

    transform: scale(1.5);

    background-image: url(https://p3.music.126.net/ZQaLjqxMV8O-bCNWEDyLQA==/17746117672693276.jpg);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: auto 100%;
    transform-origin: center top;

    overflow: hidden;
  }
  .song-wrap {
    padding-top: 80px;
    .song-disc {
      position: relative;
      width: 342px;
      height: 342px;

      margin: 0 auto;
      .bar {
        position: absolute;
        z-index: 5;
        top: -80px;
        left: 150px;
        width: 110px;
        height: 157px;

        background-image: url(../../assets/needle-plus.png);
        background-size: contain;
        transform-origin: left top;
        transform: rotate(-20deg);

        transition: transform 0.6s ease-out;
      }
      .play {
        transform: rotate(0deg);
      }
      .disk {
        position: relative;
        width: 100%;
        height: 100%;

        background-image: url(../../assets/disc-plus.png);
        background-size: cover;
        background-repeat: no-repeat;
        img {
          position: absolute;
          top: 66px;
          left: 66px;

          border-radius: 50%;
          width: 212px;
          height: auto;
        }

        .rotate {
          animation: rotate 20s infinite linear;
        }
        .pause {
          animation-play-state: paused;
        }
        .play-btn {
          position: absolute;
          top: 140px;
          left: 140px;
          width: 65px;
          height: 65px;

          background-image: url(../../assets/play_btn_3x.png);
          background-repeat: no-repeat;
          background-size: cover;
        }
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
    }
  }
  .controls {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    .process {
      display: flex;
      width: 100%;
      .current {
        flex: 0 0 50px;
        color: #fff;
        font-size: 12px;
        text-align: center;
      }
      .all {
        flex: 0 0 50px;
        color: #fff;
        font-size: 12px;
        text-align: center;
      }
      /deep/ .el-slider {
        flex: 1 1 auto;
        .el-slider__runway {
          height: 2px;
          margin: 5px 0;
          border-radius: 2px;
          .el-slider__bar {
            height: 2px;
            background-color: gray;
          }
          .el-slider__button-wrapper {
            top: -9px;
            height: 16px;
            width: 16px;
            .el-slider__button {
              width: 8px;
              height: 8px;
              border: none;
            }
          }
        }
      }
    }
    .btns {
      position: relative;
      width: 400px;
      height: 60px;

      margin: 0 auto;
      margin-top: 20px;
      text-align: center;
      line-height: 60px;
      span {
        display: inline-block;
        width: 50px;
        height: 50px;

        text-align: center;
        line-height: 50px;
        color: #fff;
        vertical-align: middle;
        i {
          font-size: 44px;
        }
        &:nth-child(3) {
          margin: 0 25px;
        }
        &:nth-child(4) {
          margin-right: 25px;
        }
        &:nth-child(5) {
          i {
            font-size: 36px;
          }
        }
        &:nth-child(1) {
          margin-right: 25px;
          i {
            font-size: 38px;
          }
        }
      }
    }
  }
}
</style>

// durationchange： 元信息已载入或已改变，表明媒体的长度发生了改变。例如，在媒体已被加载足够的长度从而得知总长度时会触发这个事件。
//timeupdate： 元素的currentTime属性表示的时间已经改变。
//canplay： 在媒体数据已经有足够的数据（至少播放数帧）可供播放时触发。
//ended: 播放结束时触发。