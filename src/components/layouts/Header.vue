<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-if="$route.name !== 'Home'">{{ $route.meta.module }}</el-breadcrumb-item>
    <el-breadcrumb-item v-if="$route.name !== 'Home'">{{ $route.meta.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
</script>

<style scoped>
.el-breadcrumb {
  line-height: 60px;
  font-size: 16px;
}
</style>