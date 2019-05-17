<template>
  <div class="hello">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button type="primary" v-on:click="pushArr">主要按钮</el-button>
    <ul>
      <li v-for="(item) in items" :key="item.id">{{item.msg}}</li>
    </ul>
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
      input: "",
      items: [{ id: 0, msg: "这是啥" }]
    };
  },
  methods: {
    reverse() {
      this.input =
        this.input &&
        this.input
          .split("")
          .reverse()
          .join("");
    },
    pushArr() {
      const msg = this.input;
      const length = this.items.length;
      if (msg) {
        const item = { id: length, msg };
        this.items.push(item);
        this.input = "";
      }
    }
  },
  created() {
    console.log("666666666666", this.$http);
    this.$http.get("raicois/api/v2/Hospital", {}).then(item => {
      console.log(999999, item);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
