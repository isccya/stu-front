<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <Left></Left>
        </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <router-view></router-view>
  </div>
</template>

<script>
import Left from "@/components/Left";
export default {
  components: {
    Left,
  },
};
</script>

<style>
</style>