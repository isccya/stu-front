<template>
  <div>
    <div class="title">
      学生信息管理系统
    </div>
    <el-menu
        :router=true
        default-active="2"
        background-color="#304156"
        text-color="#ffffff"
        active-text-color="#409eff">
      <el-menu-item index="/student/list">
        <i class="el-icon-user-solid"></i>
        <span slot="title">学生列表</span>
      </el-menu-item>
      <el-menu-item index="/student/reward">
        <i class="el-icon-takeaway-box"></i>
        <span slot="title">学生奖励</span>
      </el-menu-item>
      <el-menu-item index="/student/punishment">
        <i class="el-icon-mobile"></i>
        <span slot="title">学生惩罚</span>
      </el-menu-item>
      <el-menu-item index="/student/change">
        <i class="el-icon-coordinate"></i>
        <span slot="title">学生流动</span>
      </el-menu-item>
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