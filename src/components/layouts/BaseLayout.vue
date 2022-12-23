<template>
  <el-container>
    <el-aside>
      <SideBar></SideBar>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <el-card>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/student/list' }">学生列表</el-breadcrumb-item>
          </el-breadcrumb>
          <el-divider></el-divider>
          <router-view/>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from '@/components/layouts/Header.vue'
import SideBar from '@/components/layouts/SideBar.vue'
export default {
  name: 'BaseLayout',
  components: {
    Header,
    SideBar
  }
};
</script>

<style scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #304156;
  width: 200px !important;
  min-height: 100vh;
  max-height: 160vh;
}

.el-main {
  background-color: #E9EEF3;

}
</style>
