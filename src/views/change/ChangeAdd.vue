<template>
  <div>
    <el-form :model="changeForm"  label-width="150px">
      <el-form-item label="学生学号" >
        <el-col :span="4">
          <el-input v-model="changeForm.studentId"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="流动类别">
        <el-select v-model="changeForm.changeCode" placeholder="请选择">
          <el-option
              v-for="changeCode in changeCodeList"
              :key="changeCode.code"
              :label="changeCode.description"
              :value="changeCode.code">
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
              v-model="changeForm.description">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addChange">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {getChangeCodeList, addChange} from "@/api/axios";
export default {
  name: "ChangeAdd",
  data() {
    return {
      changeForm: {},
      changeCodeList: []
    }
  },
  methods: {
    getChangeCodeList() {
      getChangeCodeList().then((res) => {
        this.changeCodeList = res.data;
      })
    },
    addChange() {
      addChange(this.changeForm)
      this.$message({
        message: '添加成功',
        type: 'success'
      })
    }
  },
  created() {
    this.getChangeCodeList();
  }
}
</script>

<style scoped>

</style>