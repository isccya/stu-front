<template>
  <div>
    <el-form :model="rewardForm"  label-width="150px">
      <el-form-item label="学生学号" >
        <el-col :span="4">
          <el-input v-model="rewardForm.studentId"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="奖励等级">
        <el-select v-model="rewardForm.levelCode" placeholder="请选择">
          <el-option
              v-for="rewardCode in rewardCodeList"
              :key="rewardCode.code"
              :label="rewardCode.description"
              :value="rewardCode.code">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="描述内容">
        <el-col :span="4">
          <el-input
              type="textarea"
              :rows="2"
              autosize
              placeholder="非必填项，可忽略"
              v-model="rewardForm.description">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addReward">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {getRewardCodeList, addReward} from "@/api/axios";
export default {
  name: "RewardAdd",
  data() {
    return {
      rewardForm: {},
      rewardCodeList: []
    }
  },
  methods: {
    getRewardCodeList() {
      getRewardCodeList().then((res) => {
        this.rewardCodeList = res.data;
      })
    },
    addReward() {
      addReward(this.rewardForm)
      this.$message({
        message: '添加成功',
        type: 'success'
      })
    }
  },
  created() {
    this.getRewardCodeList();
  }
}
</script>

<style scoped>

</style>