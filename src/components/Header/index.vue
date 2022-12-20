<template>
  <div class="head-container">
    <div class="l-container">
      <el-button icon="el-icon-menu" size="mini" style="margin-right:20px"></el-button>
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          :to="{ path: tabsList[index].path }"
          v-for="(value, index) in tabsList"
          :key="value.name"
        >
          {{ tabsList[index].name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-container"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("Tap", ["tabsList"]),
  },
};
</script>

<style scoped>
.head-container {
  background-color: rgb(66, 65, 65);
  height: 60px;
  display: flex; /*弹性布局*/
  justify-content: space-between;
  align-items: center;
}
.l-container {
  margin-left: 20px;
  display: flex;
  align-items: center;
}
.el-breadcrumb__item >>> .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link {
  color: white;
  font-size: 123px;
}
</style>