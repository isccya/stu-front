<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <Left></Left>
      </el-aside>
      <el-container>
        <el-header><Header></Header></el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <router-view></router-view>
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

<style>
</style>