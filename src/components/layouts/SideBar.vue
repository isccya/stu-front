<template>
  <div>
    <div class="title">
      学生信息管理系统
    </div>
    <el-menu
        :router=true
        default-active="/student/list"
        background-color="#304156"
        text-color="#ffffff"
        active-text-color="#409eff">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>学生管理</span>
        </template>
        <el-menu-item index="/student/list">
          <i class="el-icon-user-solid"></i>
          <span slot="title">学生列表</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>奖励管理</span>
        </template>
        <el-menu-item index="/student/reward/code">
          <i class="el-icon-mobile"></i>
          <span slot="title">奖励代码表</span>
        </el-menu-item>
        <el-menu-item index="/student/reward/search">
          <i class="el-icon-search"></i>
          <span slot="title">查询奖励记录</span>
        </el-menu-item>
        <el-menu-item index="/student/reward/add">
          <i class="el-icon-circle-plus"></i>
          <span slot="title">添加奖励记录</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>处分管理</span>
        </template>
        <el-menu-item index="/student/punish/code">
          <i class="el-icon-mobile"></i>
          <span slot="title">处分代码表</span>
        </el-menu-item>
        <el-menu-item index="/student/punish/search">
          <i class="el-icon-search"></i>
          <span slot="title">查询处分记录</span>
        </el-menu-item>
        <el-menu-item index="/student/punish/add">
          <i class="el-icon-circle-plus"></i>
          <span slot="title">添加处分记录</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>流动管理</span>
        </template>
        <el-menu-item index="/student/change/code">
          <i class="el-icon-mobile"></i>
          <span slot="title">流动代码表</span>
        </el-menu-item>
        <el-menu-item index="/student/change/search">
          <i class="el-icon-search"></i>
          <span slot="title">查询流动记录</span>
        </el-menu-item>
        <el-menu-item index="/student/change/add">
          <i class="el-icon-circle-plus"></i>
          <span slot="title">添加流动记录</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>

</script>
<style scoped>
.title {
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: medium;
  color: #ffffff;
}
</style>