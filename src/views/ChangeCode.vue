<template>
  <el-table
      :data="changeCodeList"
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
import {getChangeCodeList} from "@/api/axios";
export default {
  name: "ChangeCode",
  data() {
    return {
      changeCodeList: []
    }
  },
  created() {
    getChangeCodeList().then(res => {
        this.changeCodeList = res.data
        console.log(this.changeCodeList)
    })
  }
}
</script>

<style scoped>
.el-table {
  margin-left: 15px;
}
</style>