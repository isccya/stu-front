<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <Left></Left>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Left from "@/components/Left";
import Header from "@/components/Header";
export default {
  components: {
    Left,
    Header,
  },
};
</script>

<style scoped>
.el-header {
  padding: 0px;
}
</style>