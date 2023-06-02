<template>
  <div>
    <el-form :model="scoreForm" label-width="150px">
      <el-form-item label="学生学号">
        <el-col :span="4">
          <el-input v-model="scoreForm.studentId"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="数学">
        <el-col :span="4">
          <el-input v-model="scoreForm.math"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="Java">
        <el-col :span="4">
          <el-input v-model="scoreForm.java"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="英语">
        <el-col :span="4">
          <el-input v-model="scoreForm.english"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="体育">
        <el-col :span="4">
          <el-input v-model="scoreForm.sports"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="AddStudentScore()">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addStudentScore } from "@/api/axios";
export default {
  name: "RewardAdd",
  data() {
    return {
      scoreForm: {
        classId:1,
      },
    }
  },
  methods: {
    AddStudentScore() {
      console.log(this.scoreForm);
      addStudentScore(this.scoreForm).then(() => {
        this.$message({
          message: '添加成功',
          type: 'success'
        }).catch(()=>{
          this.$message({
          message: '添加失败',
          type: 'success'
        })
        })
      })
    }
  },
}
</script>

<style scoped></style>