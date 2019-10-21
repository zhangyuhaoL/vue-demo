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
        <el-button type="primary" style="margin: 0 auto" @click="loginIn">听听音乐</el-button>
        <el-button type="primary" style="margin: 0 auto" @click="change">下五子棋</el-button>
      </div>
      <div>
        <el-slider v-model="currentTime" :max="duration" :show-tooltip="false" @change="changeTime"></el-slider>
      </div>
    </div>
    <div class="photo">
      <div class="photo-container">
        <video ref="video" width="400" height="400" autoplay></video>
        <canvas ref="canvas" width="400" height="300"></canvas>
      </div>
      <el-button type="primary" style="margin: 0 auto" @click="takePhoto">拍照</el-button>
      <el-button type="primary" style="margin: 0 auto" @click="openCamara">打开</el-button>
      <el-button type="primary" style="margin: 0 auto" @click="saveImg">保存</el-button>
    </div>
    <div class="img">
      <img ref="imgFile" v-if="photoUrl" :src="photoUrl" alt />
      <input type="file" @change="getFile" />
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
      duration: 10,
      number: 10,
      photoUrl: ""
    };
  },
  methods: {
    loginIn() {
      this.$router.push({ name: "music" });
    },
    changeTime(val) {
      console.log(val);
    },
    change() {
      this.currentTime = 0;
      setTimeout(() => {
        this.duration = 0;
      }, 0);
      // console.log(this.$route);
      this.$router.push({ name: "gobang" });
    },
    saveImg() {
      let url = this.$refs.canvas.toDataURL("image/png");
      this.photoUrl = url;
      setTimeout(() => {
        let img = this.$refs.imgFile;
        console.log("文件", img.files);
      }, 10);
    },
    takePhoto() {
      console.log(9999);
      const canvas = this.$refs.canvas;
      let context = canvas.getContext("2d");
      context.drawImage(this.$refs.video, 0, 0, 200, 150);
    },
    getFile(e) {
      console.log("eeee", e.target.files[0]);
    },
    openCamara() {
      // const canvas = this.$refs.canvas;
      // const context = canvas.getContext("2d");
      let video = this.$refs.video;

      console.log(33333, navigator);
      console.log(444444, navigator.getUserMedia);

      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
      }
      // 一些浏览器实现了部分mediaDevices，我们不能只分配一个对象
      // 使用getUserMedia，因为它会覆盖现有的属性。
      // 这里，如果缺少getUserMedia属性，就添加它。
      if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function(constraints) {
          // 首先获取现存的getUserMedia(如果存在)
          var getUserMedia =
            navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
          // 有些浏览器不支持，会返回错误信息
          // 保持接口一致
          if (!getUserMedia) {
            return Promise.reject(
              new Error("getUserMedia is not implemented in this browser")
            );
          }
          //否则，使用Promise将调用包装到旧的navigator.getUserMedia
          return new Promise(function(resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject);
          });
        };
      }
      let constraints = { audio: false, video: true };
      console.log("video", video);
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
          console.log("then", video);
          // var video = document.querySelector('video');
          // 旧的浏览器可能没有srcObject
          if ("srcObject" in video) {
            video.srcObject = stream;
          } else {
            //避免在新的浏览器中使用它，因为它正在被弃用。
            video.src = window.URL.createObjectURL(stream);
          }
          video.onloadedmetadata = function() {
            console.log(81111);
            video.play();
          };
        })
        .catch(function(err) {
          console.log(err.name + ": " + err.message);
          console.log("dddf");
        });
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
  .boxes {
    width: 700px;

    background: yellowgreen;
    overflow: auto;
    .content {
      display: flex;
      .item {
        flex: 0 0 100px;
      }
    }
  }
}
</style>
