<template>
  <el-container class="layout-container">
    <el-row type="flex" style="width: 100%">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :router="true"
        @open="handleOpen"
        @close="handleClose"
        @select="selectMenu"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="width: 200px; height: 100%"
      >
        <el-menu-item index="1" :route="{name: 'charts'}">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </el-menu-item>
        <el-menu-item index="2" :route="{name: 'default'}">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <!-- <el-menu-item index="3" :route="{name: 'default'}">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4" :route="{name: 'default'}">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>-->
      </el-menu>
      <el-container class="layout-right">
        <el-header class="layout-header">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span class="user" @click="goToLogin">王小虎</span>
        </el-header>

        <el-main>
          <transition name="cont-transition">
            <router-view class="child-view"></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-row>
  </el-container>
</template>
<script>
export default {
  props: [],
  data() {
    return {
      myname: "哈哈哈"
    };
  },
  // inheritAttrs: false,   //这个模式允许你在使用基础组件的时候更像是使用原始的 HTML 元素，而不会担心哪个元素是真正的根元素
  beforeUpdate() {
    console.log("55555");
  },
  mounted() {
    console.log(1111, this.myname);
    console.log(33322222);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    selectMenu(key) {
      console.log(933, key);
    },
    goToLogin() {
      this.$router.push({ name: "login" });
    }
  }
};
</script>
<style lang="less" scoped>
.layout-container {
  height: 100%;
  .layout-right {
    flex: 1;
    .layout-header {
      width: 100%;
      border-bottom: 1px solid #545c64;

      text-align: right;
      font-size: 12px;
      line-height: 60px;
      background-color: #ffffff;
      color: #000;
    }
    .user {
      cursor: pointer;
    }
    .cont-transition-enter-active {
      transition: all 0.3s ease;
    }
    .cont-transition-leave-active {
      transition: all 0.3s ease;
    }
    .cont-transition-enter,
    .cont-transition-leave {
      opacity: 0;
    }
  }
}
</style>
