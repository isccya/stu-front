<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      @click="clickMenu(index)"
    >
      <h3>学生信息管理系统</h3>
      <router-link to="/reward">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">学生奖励</span>
        </el-menu-item>
      </router-link>
      <router-link to="/punish">
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">学生惩罚</span>
        </el-menu-item>
      </router-link>
      <router-link to="/showPerson">
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">学生信息</span>
        </el-menu-item>
      </router-link>
      <router-link to="/Change">
        <el-menu-item index="4">
          <i class="el-icon-menu"></i>
          <span slot="title">学生流动</span>
        </el-menu-item>
      </router-link>

      <el-submenu index="5">
        <template slot="title">
          <span slot="title">其它</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false, //是否水平折叠收起菜单
    };
  },
  methods: {},
};
</script>

<style scoped>
.el-menu {
  height: 100vh;
  border-right: none;/*除去默认的1px边界宽度*/
  overflow: hidden;/*避免出现滚动条*/

}
.el-menu h3 {
  color: #fff;
  text-align: center;
  line-height: 48px;
  font-size: 16px;
  font-weight: 400;
}
</style>