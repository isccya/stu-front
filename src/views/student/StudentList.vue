<template>
  <div>
    <el-button type="primary" @click="isAddStudentDialogVisible = true">录入学生信息</el-button>
    <el-button type="success" @click="isExportdialogVisible = true">一键导出成绩</el-button>
    <!-- <el-button type="success" @click="exportScoreByclassId(2)">一键导出二班成绩</el-button> -->

    <el-table :data="studentList" stripe style="width: 100%">
      <el-table-column prop="id" label="学号" align="center" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" align="center" width="180">
      </el-table-column>
      <el-table-column prop="sex" label="性别" align="center" :formatter="sexFormatter">
      </el-table-column>
      <el-table-column prop="classId" align="center" label="班级">
        <template slot-scope="scope">
          <div v-if="scope.row.classId !== null">
            {{ classOptions[scope.row.classId].label }}
          </div>
          <div v-else>-</div>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="birthday" label="生日">
        <template slot-scope="scope">
          <div v-if="scope.row.birthday !== null">
            {{ scope.row.birthday }}
          </div>
          <div v-else>-</div>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="nativePlace" label="籍贯">
        <template slot-scope="scope">
          <div v-if="scope.row.nativePlace !== null">
            {{ scope.row.nativePlace }}
          </div>
          <div v-else>-</div>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="更新" placement="top-start">
            <el-button el-button type="success" icon="el-icon-edit" circle
              @click="openUpdateStudentDialog(scope.row)"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="删除" placement="top-end">
            <el-button type="danger" icon="el-icon-delete" circle @click="deleteStudent(scope.row.id)"></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="current"
      :page-sizes="[5, 10]" :page-size="size" layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>
    <!-- 录入学生信息对话框 -->
    <el-dialog title="录入学生信息" :visible.sync="isAddStudentDialogVisible" width="30%" center :before-close="handleClose">
      <template>
        <el-form ref="form" label-width="80px" :model="studentAddForm">

          <el-form-item label="姓名" :required="true" prop="name">
            <el-input v-model="studentAddForm.name"></el-input>
          </el-form-item>

          <el-form-item label="性别" :required="true" prop="sex">
            <template>
              <el-select v-model="studentAddForm.sex" placeholder="请选择">
                <el-option v-for="option in sexOptions" :key="option.value" :label="option.label" :value="option.value">
                </el-option>
              </el-select>
            </template>
          </el-form-item>

          <el-form-item label="班级" prop="class">
            <template>
              <el-select v-model="studentAddForm.classId" placeholder="请选择">
                <el-option v-for="option in classOptions" :key="option.value" :label="option.label" :value="option.value">
                </el-option>
              </el-select>
            </template>
          </el-form-item>

          <el-form-item label="生日">
            <template>
              <el-date-picker v-model="studentAddForm.birthday" type="date" value-format="yyyy-MM-dd" placeholder="选择日期">
              </el-date-picker>
            </template>
          </el-form-item>

          <el-form-item label="籍贯">
            <el-input v-model="studentAddForm.nativePlace"></el-input>
          </el-form-item>

        </el-form>
      </template>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="addStudentSubmit">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 更新学生信息对话框 -->
    <el-dialog title="更新学生信息" :visible.sync="isUpdateStudentDialogVisible" width="30%" center>
      <template>
        <el-form label-width="80px" :model="studentUpdateForm">
          <el-form-item label="学号" :required="true">
            <el-input v-model="studentUpdateForm.id"></el-input>
          </el-form-item>
          <el-form-item label="姓名" :required="true">
            <el-input v-model="studentUpdateForm.name"></el-input>
          </el-form-item>
          <el-form-item label="性别" :required="true">
            <template>
              <el-select v-model="studentUpdateForm.sex" placeholder="请选择">
                <el-option v-for="option in sexOptions" :key="option.value" :label="option.label" :value="option.value">
                </el-option>
              </el-select>
            </template>
          </el-form-item>
          <el-form-item label="生日">
            <template>
              <el-date-picker v-model="studentUpdateForm.birthday" type="date" value-format="yyyy-MM-dd"
                placeholder="选择日期">
              </el-date-picker>
            </template>
          </el-form-item>
          <el-form-item label="籍贯">
            <el-input v-model="studentUpdateForm.nativePlace"></el-input>
          </el-form-item>
        </el-form>
      </template>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isUpdateStudentDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateStudent">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 一键导出对话框 -->
    <el-dialog title="选择导出的班级" :visible.sync="isExportdialogVisible" width="30%" :before-close="handleClose" center>
      <el-radio v-model="classID" label="1">1班</el-radio>
      <el-radio v-model="classID" label="2">2班</el-radio>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isExportdialogVisible = false">取 消</el-button>
        <el-button type="primary" @click=" exportScoreByclassId(classID)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  getStudentListByPage,
  addStudent,
  deleteStudentById,
  updateStudent,
  exportScore,
} from "@/api/axios";
export default {
  name: "StudentList",
  data() {
    return {
      classID: '0',
      current: 1,
      size: 5,
      total: 0,
      studentList: [],
      isAddStudentDialogVisible: false,
      isUpdateStudentDialogVisible: false,
      isExportdialogVisible: false,
      studentAddForm: {},
      studentUpdateForm: {},
      sexOptions: [
        { label: "男", value: 0 },
        { label: "女", value: 1 },
      ],
      classOptions: [
        { label: "-", value: 0 },
        { label: "1班", value: 1 },
        { label: "2班", value: 2 },

      ],
    };
  },
  mounted() {
    this.getPage(this.current, this.size);
  },
  methods: {
    exportScoreByclassId(classId) {
      window.location.href = `http://120.79.92.244:8081/scores/exportScoresContent/${classId}`
      window.open(`http://120.79.92.244:8081/scores/exportScoresContent/${classId}`)
      this.isExportdialogVisible = false;
    },
    //判断性别
    sexFormatter(row) {
      if (row.sex === 0) {
        return "男";
      } else if (row.sex === 1) {
        return "女";
      }
    },
    // 获取学生信息
    getPage(current, size) {
      getStudentListByPage(current, size).then((res) => {
        const data = res.data;
        this.current = data.current;
        this.total = data.total;
        this.size = data.size;
        this.studentList = data.studentList;
      });
    },
    handleCurrentChange(current) {
      this.getPage(current, this.size);
    },
    handleSizeChange(size) {
      this.getPage(this.current, size);
    },

    // 添加学生信息 取消按钮
    cancel() {
      this.isAddStudentDialogVisible = false;
      this.$refs.form.resetFields();
    },
    // 右上角 关闭按钮
    handleClose() {
      this.cancel();
    },
    // 添加学生信息 确定按钮
    addStudentSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          addStudent(this.studentAddForm);
          this.$message({
            type: "success",
            message: "添加成功!",
          });
          this.$refs.form.resetFields();
          this.isAddStudentDialogVisible = false;
          this.$router.go(0);
        } else if (!valid) {
          this.$message({
            type: "info",
            message: "添加失败!",
          });
        }
      });
    },
    deleteStudent(id) {
      this.$confirm("此操作将永久删除该学生信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        deleteStudentById(id).then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
            duration: 1000,
          });
          this.$router.go(0);
        })
      })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    loadStudentInfo(row) {
      this.studentUpdateForm = { ...row };
    },
    openUpdateStudentDialog(row) {
      this.loadStudentInfo(row);
      this.isUpdateStudentDialogVisible = true;
    },
    updateStudent() {
      updateStudent(this.studentUpdateForm).then(() => {
        this.$message({
          message: "更新成功",
          type: "success",
        });
        this.$router.go(0);
      })
    },
  },
};
</script>

<style scoped>
.el-card {
  min-height: 500px;
}

.el-table {
  margin-bottom: 20px;
}

.el-button {
  margin-bottom: 15px;
}
</style>