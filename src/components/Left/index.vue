<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
    >
      <h3>学生信息管理系统</h3>
      <div @click="addList($route)">
        <router-link to="/showPerson">
          <el-menu-item index="0">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ menuList[0] }}</span>
          </el-menu-item>
        </router-link>
        <router-link to="/reward">
          <el-menu-item index="1" :nuList="1">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ menuList[1] }}</span>
          </el-menu-item>
        </router-link>
        <router-link to="/punish">
          <el-menu-item index="2" :nuList="2">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ menuList[2] }}</span>
          </el-menu-item>
        </router-link>
        <router-link to="/Change">
          <el-menu-item index="3" :nuList="3">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ menuList[3] }}</span>
          </el-menu-item>
        </router-link>
      </div>
      <!-- 有二级菜单的导航条
        <el-submenu index="5">
        <template slot="title">
          <span slot="title">其它</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
    </el-menu>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      isCollapse: false, //是否水平折叠收起菜单
      menuList: ["学生信息", "学生奖励", "学生惩罚", "学生流动"],
    };
  },
  methods: {
    ...mapMutations("Tap", ["addList"]),
  },
};
</script>

<style scoped>
.el-menu {
  height: 100vh;
  border-right: none; /*除去默认的1px边界宽度*/
  overflow: hidden; /*避免出现滚动条*/
}
.el-menu h3 {
  color: #fff;
  text-align: center;
  line-height: 48px;
  font-size: 16px;
  font-weight: 400;
}
</style>