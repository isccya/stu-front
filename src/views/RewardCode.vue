<template>
  <el-table
      :data="rewardCodeList"
      stripe
      style="width: 100%">
    <el-table-column
        prop="code"
        label="代码"
        width="180">
    </el-table-column>
    <el-table-column
        prop="description"
        label="含义"
        width="180">
    </el-table-column>
  </el-table>
</template>

<script>
import {getRewardCodeList} from "@/api/axios";
export default {
  name: "RewardCode",
  data() {
    return {
      rewardCodeList: []
    }
  },
  created() {
    getRewardCodeList().then(res => {
      this.rewardCodeList = res.data
      console.log(this.rewardCodeList)
    })
  }
}
</script>

<style scoped>
.el-table {
  margin-left: 15px;
}
</style>