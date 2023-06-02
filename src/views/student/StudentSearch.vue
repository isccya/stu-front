<template>
  <div>
    <el-form :inline="true">
      <el-form-item label="请输入待查询学生的学号">
        <el-input v-model="id"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getScoreListById">查询</el-button>
      </el-form-item>
    </el-form>
    <div style="width: 400px; height: 400px; text-align: left" v-if="scoreList.length === 0 && show">
      <el-empty description="系统查询不到该学生的成绩"></el-empty>
    </div>
    <div v-if="scoreList.length !== 0">
      <el-table :data="scoreList" style="width: 100%">
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
        <el-table-column prop="sports" label="修改" width="200" style="display: flex;justify-content:center">
          <el-button type="primary" icon="el-icon-edit" circle @click="ChangeStudentScore = true"></el-button>
        </el-table-column>
      </el-table>
    </div>
    <!-- 修改学生成绩弹出框 -->
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
    <div id="myChart" :style="{ float: 'left', width: '100%', height: '400px' }"></div>
  </div>
</template>

<script>
import { getScoreListById, changeStudentScore } from "@/api/axios";
import * as echarts from "echarts";
export default {
  name: "StudentSearch",
  data() {
    return {
      id: null,//查询的学号
      scoreList: [],
      show: false,
      option: {
        xAxis: {
          type: 'category',
          data: ['数学', 'java', '英语', '体育']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [0, 0, 0, 0],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      },
      ChangeStudentScore: false,
      scoreForm: {
        // "classId":"1",
      },
    }
  },
  methods: {
    getScoreListById() {
      this.show = false;
      this.scoreForm.studentId = this.id;
      this.scoreList.pop();
      this.option.series[0].data = [0, 0, 0, 0];
      this.drawLine();
      getScoreListById(this.id).then((res) => {
        this.scoreList.push(res.data);
        this.option.series[0].data[0] = this.scoreList[0].java;
        this.option.series[0].data[1] = this.scoreList[0].math;
        this.option.series[0].data[2] = this.scoreList[0].english;
        this.option.series[0].data[3] = this.scoreList[0].sports;
        this.drawLine();
      }).catch((error) => {
        this.show = true;
      })
    },
    drawLine() {
      let myChart = echarts.init(document.getElementById("myChart"));
      myChart.setOption(this.option);
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
        this.getScoreListById();
      }).catch(() => {
        this.$message({
          type: "info",
          message: "修改失败!",
        });
      })
    }
  },
  mounted() {
    this.drawLine();
  }
}
</script>

<style scoped>
.el-form {
  margin-bottom: 20px;
}
</style>