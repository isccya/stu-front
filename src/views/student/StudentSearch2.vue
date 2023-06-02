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
      <!-- <el-table-column prop="sports" label="修改" width="200" style="display: flex;justify-content:center">
        <el-button type="primary" icon="el-icon-edit" circle @click="ChangeStudentScore = true"></el-button>
      </el-table-column> -->
    </el-table>
    <el-dialog title="提示" :visible.sync="ChangeStudentScore" width="30%" center>
      <el-form ref="scoreForm" :model="scoreForm" label-width="80px">
        <el-form-item label="数学">
          <el-input v-model="scoreForm.math"></el-input>
        </el-form-item>
        <el-form-item label="java">
          <el-input v-model="scoreForm.java"></el-input>
        </el-form-item>
        <el-form-item label="英语">
          <el-input v-model="scoreForm.english"></el-input>
        </el-form-item>
        <el-form-item label="体育">
          <el-input v-model="scoreForm.sports"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="ChangeStudentScore = false">取 消</el-button>
        <el-button type="primary" @click="changeStudent">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { changeStudentScore, getScoreListByName } from "@/api/axios";

export default {
  name: "StudentSearch",
  data() {
    return {
      name: null,
      scoreList: [],
      show: false,
      ChangeStudentScore: false,
      scoreForm: {
        // "classId":"1",
      },
    }
  },
  methods: {
    getScoreListByName() {
      this.show = false;
      this.scoreList = [];
      getScoreListByName(this.name).then((res) => {
        this.scoreList.push(...res.data);
        if (this.scoreList.length == 0) {
          this.show = true;
        }
      }).catch((error) => {
        this.show = true;
      })
    },
    changeStudent() {
      console.log(this.scoreForm);
      changeStudentScore(this.scoreForm).then(() => {
        this.ChangeStudentScore = false;
        this.$message({
          type: "success",
          message: "修改成功!",
          duration: 1000,
        });
        this.getScoreListByName();
      }).catch(() => {
        this.$message({
          type: "info",
          message: "修改失败!",
        });
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