<template>
  <div class="play-content">
    <div class="play-bg"></div>
    <div class="song-wrap">
      <div class="song-disc">
        <div class="bar"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "musicPlay",
  data() {
    return {};
  },
  mounted() {
    console.log(88, this.$route.query);
  }
};
</script>
<style lang="less" scoped>
.play-content {
  width: 100%;
  height: 100%;
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
      }
    }
  }
}
</style>
