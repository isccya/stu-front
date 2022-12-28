<template>
  <el-container>
    <el-aside>
      <SideBar></SideBar>
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <el-card>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item>
          </el-breadcrumb>
          <el-divider></el-divider><!-- 一行分割线 -->
          <router-view/><!-- 路由展示位置 -->
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
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #304156;
  width: 200px !important;
  min-height: 100vh;
  max-height: 160vh;
  overflow: none;
}

.el-main {
  background-color: #E9EEF3;

}
</style>
