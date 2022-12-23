<template>
  <div>
    <el-form :inline="true">
      <el-form-item label="请输入待查询学生的学号">
        <el-input v-model="id"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getChangeListById">查询</el-button>
      </el-form-item>
    </el-form>
    <div style="width: 400px; height: 400px; text-align: left" v-if="changeList != null && changeList.length === 0">
      <el-empty description="系统查询不到该学生的流动记录"></el-empty>
    </div>
    <el-timeline :reverse=true>
      <el-timeline-item
          color="#409eff"
          v-for="(change, id) in changeList"
          :key="id"
          :timestamp="change.recordTime">
        {{change.changeName}}
      </el-timeline-item>
    </el-timeline>

  </div>
</template>

<script>
import {getChangeListById} from "@/api/axios";
export default {
  name: "ChangeSearch",
  data() {
    return {
      id: null,
      changeList: null
    }
  },
  methods: {
    getChangeListById() {
      getChangeListById(this.id).then((res) => {
        this.changeList = res.data;
        console.log(this.changeList)
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