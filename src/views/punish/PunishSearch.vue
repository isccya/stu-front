<template>
  <div>
    <el-form :inline="true">
      <el-form-item label="请输入待查询学生的学号">
        <el-input v-model="id"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getPunishListById">查询</el-button>
      </el-form-item>
    </el-form>
    <div style="width: 400px; height: 400px; text-align: left" v-if="punishList != null && punishList.length === 0">
      <el-empty description="系统查询不到该学生的流动记录"></el-empty>
    </div>
    <el-timeline :reverse=true>
      <el-timeline-item
          color="#409eff"
          v-for="(punish, id) in punishList"
          :key="id"
          :timestamp="punish.recordTime">
        {{punish.punishmentName}}
      </el-timeline-item>
    </el-timeline>

  </div>
</template>

<script>
import {getPunishListById} from "@/api/axios";
export default {
  name: "PunishSearch",
  data() {
    return {
      id: null,
      punishList: null
    }
  },
  methods: {
    getPunishListById() {
      getPunishListById(this.id).then((res) => {
        this.punishList = res.data;
        console.log(this.punishList)
      })
    }
  }
}
</script>

<style scoped>
.el-form {
  margin-bottom: 20px;
}

</style>