<template>
  <div id="app">
    <transition name="transBox">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {};
</script>


<style lang="less">
// @import "./assets/css/common.css";
html {
  width: 100%;
  height: 100%;
  body {
    width: 100%;
    height: 100%;
  }
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  color: #2c3e50;
  .transBox-enter-active {
    transition: all 0.3s ease;
  }
  .transBox-leave-active {
    transition: all 0.3s ease;
  }
  .transBox-enter,
  .transBox-leave {
    opacity: 0;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
