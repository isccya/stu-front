<template>
  <div>
    <el-form :inline="true">
      <el-form-item label="请输入待查询学生的学号">
        <el-input v-model="id"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getRewardListById">查询</el-button>
      </el-form-item>
    </el-form>
    <div style="width: 400px; height: 400px; text-align: left" v-if="rewardList != null && rewardList.length === 0">
      <el-empty description="系统查询不到该学生的奖励记录"></el-empty>
    </div>
    <el-timeline :reverse=true>
      <el-timeline-item
          color="#409eff"
          v-for="(reward, id) in rewardList"
          :key="id"
          :timestamp="reward.recordTime">
        {{ reward.rewardName }}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import {getRewardListById} from "@/api/axios";

export default {
  name: "RewardSearch",
  data() {
    return {
      id: null,
      rewardList: null
    }
  },
  methods: {
    getRewardListById() {
      getRewardListById(this.id).then((res) => {
        this.rewardList = res.data;
        console.log(this.rewardList)
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