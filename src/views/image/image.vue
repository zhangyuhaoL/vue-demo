<template>
  <div class="container">
    <div class="box">
      <button class="cn-button" @click="handleOpen">{{ open ? '-' : '+' }}</button>
      <div class="cn-wrapper" :class="{'opened-nav': open}">
        <ul>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      open: false
    };
  },
  methods: {
    handleOpen() {
      this.open = !this.open;
    }
  },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container {
  position: relative;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
  }
  .box {
    position: relative;
    .cn-button {
      z-index: 10011;

      position: fixed;
      bottom: -1.75em;

      height: 3.5em;
      width: 3.5em;
      padding-bottom: 1em;
      left: 50%;
      margin-left: -1.75em;

      border: none;
      border-radius: 50%;
      outline: none;
      background: none;
      color: #ffffff;
      text-align: center;
      font-size: 1.8em;

      background-color: #19aeff;
      cursor: pointer;
    }
    .cn-wrapper {
      width: 26em;
      height: 26em;

      position: fixed;
      z-index: 10010;
      bottom: -13em;
      left: 50%;
      border-radius: 50%;
      margin-left: -13em;
      font-size: 1em;
      overflow: hidden;

      -webkit-transform: scale(0.1);
      -ms-transform: scale(0.1);
      -moz-transform: scale(0.1);
      transform: scale(0.1);
      pointer-events: none;

      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      transition: all 0.3s ease;
      li {
        position: absolute;
        left: 50%;
        top: 50%;

        width: 10em;
        height: 10em;
        margin-top: -1.3em;
        margin-left: -10em;

        font-size: 1.5em;

        -webkit-transform-origin: 100% 100%;
        -moz-transform-origin: 100% 100%;
        -ms-transform-origin: 100% 100%;
        transform-origin: 100% 100%;

        overflow: hidden;

        -webkit-transition: border 0.3s ease;
        -moz-transition: border 0.3s ease;
        transition: border 0.3s ease;
        a {
          display: block;
          font-size: 1.1em;
          height: 14.5em;
          width: 14.5em;
          position: absolute;
          bottom: -7.25em;
          right: -7.25em;
          border-radius: 50%;
          text-decoration: none;
          color: #fff;
          padding-top: 1.8em;
          text-align: center;
          -webkit-transform: skew(-50deg) rotate(-70deg) scale(1);
          -ms-transform: skew(-50deg) rotate(-70deg) scale(1);
          -moz-transform: skew(-50deg) rotate(-70deg) scale(1);
          transform: skew(-50deg) rotate(-70deg) scale(1);
          -webkit-backface-visibility: hidden;
          -webkit-transition: opacity 0.3s, color 0.3s;
          -moz-transition: opacity 0.3s, color 0.3s;
          transition: opacity 0.3s, color 0.3s;
        }
        &:nth-child(odd) {
          a {
            background-color: #bbe767;
          }
        }
        &:nth-child(even) {
          a {
            background-color: #afd440;
          }
        }
        &:first-child {
          -webkit-transform: rotate(-10deg) skew(50deg);
          -ms-transform: rotate(-10deg) skew(50deg);
          -moz-transform: rotate(-10deg) skew(50deg);
          transform: rotate(-10deg) skew(50deg);
        }
        &:nth-child(2) {
          -webkit-transform: rotate(30deg) skew(50deg);
          -ms-transform: rotate(30deg) skew(50deg);
          -moz-transform: rotate(30deg) skew(50deg);
          transform: rotate(30deg) skew(50deg);
        }
        &:nth-child(3) {
          -webkit-transform: rotate(70deg) skew(50deg);
          -ms-transform: rotate(70deg) skew(50deg);
          -moz-transform: rotate(70deg) skew(50deg);
          transform: rotate(70deg) skew(50deg);
        }
        &:nth-child(4) {
          -webkit-transform: rotate(110deg) skew(50deg);
          -ms-transform: rotate(110deg) skew(50deg);
          -moz-transform: rotate(110deg) skew(50deg);
          transform: rotate(110deg) skew(50deg);
        }
        &:nth-child(5) {
          -webkit-transform: rotate(150deg) skew(50deg);
          -ms-transform: rotate(150deg) skew(50deg);
          -moz-transform: rotate(150deg) skew(50deg);
          transform: rotate(150deg) skew(50deg);
        }
      }
    }
    .opened-nav {
      border-radius: 50%;
      pointer-events: auto;
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }
  }
}
</style>
