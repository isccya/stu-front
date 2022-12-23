<template>
  <el-table
      :data="punishLevelList"
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
import {getPunishLevelList} from "@/api/axios";
export default {
  name: "PunishLevel",
  data() {
    return {
      punishLevelList: []
    }
  },
  created() {
    getPunishLevelList().then(res => {
      this.punishLevelList = res.data
      console.log(this.punishLevelList)
    })
  }
}
</script>

<style scoped>
.el-table {
  margin-left: 15px;
}
</style>