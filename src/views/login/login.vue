<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container">
      <div class="box">
        <span>姓名：</span>
        <el-input size="medium" v-model="userName" placeholder="用户名"></el-input>
      </div>
      <div class="box">
        <span>密码：</span>
        <el-input type="password" size="medium" v-model="password" placeholder="密码"></el-input>
      </div>
      <div class="box">
        <el-button type="primary" style="margin: 0 auto" @click="loginIn">主要按钮</el-button>
        <el-button type="primary" style="margin: 0 auto" @click="change">主要按3钮</el-button>
      </div>
      <div>
        <el-slider v-model="currentTime" :max="duration" :show-tooltip="false" @change="changeTime"></el-slider>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "login",
  components: {},
  data() {
    return {
      userName: "",
      password: "",
      showInfo: true,
      searchText: "",
      currentTime: 5,
      duration: 10
    };
  },
  methods: {
    loginIn() {
      console.log("321", this.$route);
      console.log("123", this.$router);
      this.$router.push({ name: "option" });
    },
    changeTime(val) {
      console.log(val);
    },
    change() {
      this.currentTime = 0;
      setTimeout(() => {
        this.duration = 0;
      }, 0);
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  .container {
    margin: 50px auto;
    width: 400px;
    .box {
      display: flex;
      margin-bottom: 20px;
      align-items: center;

      text-align: center;
      span {
        flex: 0 0 50px;
      }
    }
  }
}
</style>
