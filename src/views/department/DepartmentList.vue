<template>
  <el-table
      :data="departmentList"
      stripe
      style="width: 100%">
    <el-table-column
        prop="id"
        label="编号"
        width="180">
    </el-table-column>
    <el-table-column
        prop="name"
        label="名称"
        width="180">
    </el-table-column>
  </el-table>
</template>

<script>
import {getDepartmentList} from "@/api/axios";
export default {
  name: "DepartmentList",
  data() {
    return {
      departmentList: []
    }
  },
  created() {
    getDepartmentList().then(res => {
      this.departmentList = res.data
    })
  }
}
</script>

<style scoped>

</style>