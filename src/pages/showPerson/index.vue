<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true">+ 新增</el-button>
    <el-dialog
      title="新增学生信息"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <!-- before-close即为弹窗关闭时候 -->
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
        <el-form-item label="籍贯" prop="nativePlace">
          <el-input v-model="form.nativePlace" placeholder="请输入籍贯"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </span>
    </el-dialog>
    <!-- <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="学号" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="name" label="性别" width="180"> </el-table-column>

      <el-table-column prop="address" label="班级" width="180"> </el-table-column>
      <el-table-column prop="name" label="生日" width="180"> </el-table-column>

    </el-table> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      //是否显示新增内容的组件
      dialogVisible: false,
      //新增的表单里面数据
      form: {
        id: "",
        name: "",
        sex: 0,
        birthday: "",
        nativePlace: "",
      },
      //rules限制添加信息
      rules: {
        id: [{ required: true, message: "请输入学号" }],
        name: [{ required: true, message: "请输入姓名" }],
        sex: [{ required: true, message: "请选择性别" }],
        birthday: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
          },
        ],
        nativePlace: [{ required: true, message: "请输入籍贯" }],
      },
      tableData:{

      }
    };
  },
  methods: {
    ...mapActions('showPerson',["addStudentList",'StudentList']),
   
    //单击弹窗对话(dialog)右上角关闭时候触发
    handleClose(done) {
      this.$refs.form.resetFields();
      this.dialogVisible = false;
    },
    // 点击取消时候触发
    cancel() {
      this.handleClose();
    },
    // 点击提交时候触发
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert("提交成功");
        this.addStudentList(this.form);
          this.$refs.form.resetFields();
          this.dialogVisible = false;
        }
        if (!valid) {
          alert("提交失败!");
        }
      });
    },
  },
  mounted(){
    this.StudentList({current:1,size:5});
  }
};
</script>

<style>
</style>