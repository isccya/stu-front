<template>
  <div>
    <el-form :model="punishForm"  label-width="150px">
      <el-form-item label="学生学号" >
        <el-col :span="4">
          <el-input v-model="punishForm.studentId"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="处罚等级">
        <el-select v-model="punishForm.levelCode" placeholder="请选择">
          <el-option
              v-for="punishCode in punishCodeList"
              :key="punishCode.code"
              :label="punishCode.description"
              :value="punishCode.code">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否生效">
        <el-select v-model="punishForm.enabled" placeholder="请选择">
          <el-option label="是" value="1"></el-option>
          <el-option label="否" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="描述内容">
        <el-col :span="4">
          <el-input
              type="textarea"
              :rows="2"
              autosize
              placeholder="非必填项，可忽略"
              v-model="punishForm.description">
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addPunish">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {getPunishLevelList, addPunish} from "@/api/axios";
export default {
  name: "PunishAdd",
  data() {
    return {
      punishForm: {},
      punishCodeList: []
    }
  },
  methods: {
    getPunishCodeList() {
      getPunishLevelList().then((res) => {
        this.punishCodeList = res.data;
      })
    },
    addPunish() {
      addPunish(this.punishForm)
      this.$message({
        message: '添加成功',
        type: 'success'
      })
    }
  },
  created() {
    this.getPunishCodeList();
  }
}
</script>

<style scoped>

</style>