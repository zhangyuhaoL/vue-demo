<template>
  <div class="box">
    <h2>option</h2>
    <div class="num-box">
      <el-input-number v-model="num" :min="1" :max="10"></el-input-number>
    </div>
    <el-button :loading="loading" type="primary" round @click="wait(num)">加</el-button>
    <el-button :loading="loading" type="success" round @click="wait(-num)">减</el-button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "options",
  data() {
    return {
      num: 1,
      loading: false
    };
  },
  methods: {
    wait(num) {
      this.loading = true;
      this.add(num).then(() => {
        this.loading = false;
      });
    },
    ...mapActions({
      add: "incrementAsync" // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    })
  }
};
</script>
<style lang="less" scoped>
.box {
  .num-box {
    margin-bottom: 20px;
  }
}
</style>
