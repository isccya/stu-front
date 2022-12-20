<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true">+ 新增</el-button>
    <el-dialog
      title="新增学生信息"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        :inline="true"
        :rules="rules"
      >
        <el-form-item label="学号" prop="id">
          <el-input v-model="form.id" placeholder="请输入学号"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.sex" placeholder="请选择性别">
            <el-option label="男" :value="0"></el-option>
            <el-option label="女" :value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="生日" prop="birthday">
          <el-date-picker
            v-model="form.birthday"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="籍贯" prop="addr">
          <el-input
            v-model="form.addr"
            placeholder="请输入籍贯"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false, //显示新增内容的组件
      //新增的表单里面数据
      form: {
        id: "",
        name: "",
        sex: 0,
        birthday: "",
        addr: "",
      },
      //rules限制添加信息
      rules: {
        id: [
          { required: true, message: "请输入学号" },
          { type:'integer' ,message: '请输入整数', trigger: 'blur' }
        ],
        name: [
          { required: true, message: "请输入姓名" },
        ],
        sex: [
          { required: true, message: "请选择性别" },
        ],
        birthday: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
          },
        ],
        addr: [
          { required: true, message: "请输入籍贯" },
        ],
      },
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    
  },
};
</script>

<style>
</style>