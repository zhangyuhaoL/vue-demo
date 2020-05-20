
<!--
 * @Description: 
 * @Author: zhangyuhao
 * @Date: 2020-05-08 11:17:35
 * @LastEditTime: 2020-05-08 11:33:43
 * @LastEdiors: zhangyuhao
 -->
<template>
  <div class="box">
    <Item />
  </div>
</template>

<script>
import Item from "./item";
export default {
  name: "test",
  components: {
    Item
  },
  data() {
    return {
      list: [{}],
      timer: null
    };
  },
  created() {
    this.timer = setInterval(this.createItem, 1000);
  },
  methods: {
    createItem() {}
  }
};
</script>

<style lang="less" scoped>
.box {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>