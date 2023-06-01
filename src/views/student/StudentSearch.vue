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
      </el-table>
    </div>
    <div id="myChart" :style="{ float: 'left', width: '100%', height: '400px' }"></div>
  </div>
</template>

<script>
import { getScoreListById } from "@/api/axios";
import * as echarts from "echarts";
export default {
  name: "StudentSearch",
  data() {
    return {
      id: null,
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
      }
    }
  },
  methods: {
    getScoreListById() {
      this.show = false;
      this.scoreList.pop();
      this.option.series[0].data=[0,0,0,0];
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