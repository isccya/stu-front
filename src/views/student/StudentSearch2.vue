<template>
  <div>
    <el-form :inline="true">
      <el-form-item label="请输入待查询学生的姓名">
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getScoreListByName()">查询</el-button>
      </el-form-item>
    </el-form>
    <div style="width: 400px; height: 400px; text-align: left" v-if="show">
      <el-empty description="系统查询不到该学生的成绩"></el-empty>
    </div>
    <el-table :data="scoreList" style="width: 100%" v-if="scoreList.length !== 0">
      <el-table-column prop="id" label="学号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="math" label="数学" width="180">
      </el-table-column>
      <el-table-column prop="java" label="Java" width="180">
      </el-table-column>
      <el-table-column prop="english" label="英语" width="180">
      </el-table-column>
      <el-table-column prop="sports" label="体育" width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getScoreListByName } from "@/api/axios";

export default {
  name: "StudentSearch",
  data() {
    return {
      name: null,
      scoreList: [],
      show: false
    }
  },
  methods: {
    getScoreListByName() {
      this.show = false;
      this.scoreList = [];
      getScoreListByName(this.name).then((res) => {
        this.scoreList.push(...res.data);
        if(this.scoreList.length==0){
          this.show = true;
        }
      }).catch((error) => {
        this.show = true;
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