<template>
  <el-table
      :data="classList"
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
import {getClassList} from "@/api/axios";
export default {
  name: "ClassList",
  data() {
    return {
      classList: []
    }
  },
  created() {
    getClassList().then(res => {
      this.classList = res.data
    })
  }
}
</script>

<style scoped>

</style>