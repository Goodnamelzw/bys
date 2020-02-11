<template>
  <div id="userTable">
    <el-table :data="tableData"
              border
              style="width: 100%"
              :row-style="{height:'80px'}">
      <el-table-column prop="createTime"
                       label="创建日期"
                       width="180">
      </el-table-column>
      <el-table-column prop="username"
                       label="用户名"
                       width="180">
      </el-table-column>
      <el-table-column prop="password"
                       label="密码"
                       width="180">
      </el-table-column>
      <el-table-column prop="email"
                       label="邮箱"
                       width="200">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini"
                     @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini"
                     type="danger"
                     @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>

      </el-table-column>
    </el-table>
    <div>
      <div class="pageMsg">
        <el-pagination background
                       layout="prev, pager, next"
                       :total="total"
                       :pageSize=5
                       :current-page.sync="currentPage">
        </el-pagination>
      </div>

      <el-dialog title="编辑用户信息"
                 width="30%"
                 :visible.sync="dialogFormVisible">
        <el-form :model="editForm"
                 status-icon
                 ref="editForm"
                 :rules="rulesEdit"
                 label-width="100px"
                 class="editForm">
          <el-form-item label="账户"
                        prop="username">
            <el-input type="text"
                      v-model="editForm.username"
                      autocomplete="off"
                      disabled></el-input>
          </el-form-item>
          <el-form-item label="密码"
                        prop="password">
            <el-input type="text"
                      v-model="editForm.password"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱"
                        prop="email">
            <el-input v-model="editForm.email"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer"
             class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary"
                     @click="submitEdit('editForm')">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>

</template>

<script>
export default {
  name: 'User',
  created () {
    this.$axios.get('/selectAllUser')
      .then(successResponse => {
        this.tableData = successResponse.data.list
        // console.log(successResponse.data.pages)
        this.total = successResponse.data.total
        // this.total = 10
      })
  },
  data () {
    // 验证Username规则
    var validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('账户不能为空'))
      } else {
        callback()
      }
    }
    // 验证Password规则
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'))
      } else {
        callback()
      }
    }

    return {
      tableData: [],
      total: 1,
      currentPage: 1,
      dialogFormVisible: false,
      editForm: {
        username: this,
        password: '',
        email: ''
      },
      rulesEdit: {
        username: [
          { validator: validateUser, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        email: [
          // element自带的邮箱检测
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]

      }

      // tableData: [{
      //   date: '2016-05-02',
      //   username: 'admin',
      //   password: '123456',
      //   email: '123456@qq.com'
      // }]
    }
  },
  watch: {
    currentPage (newPage, oldPage) {
      console.log(newPage)
      this.exchangeCurrentPage(newPage)
    }
  },
  methods: {
    exchangeCurrentPage (newPage) {
      this.$axios.get('/selectAllUser', {
        params: {
          pageNum: newPage
        }
      })
        .then(successResponse => {
          this.tableData = successResponse.data.list
          // console.log(successResponse.data.pages)
          // this.total = successResponse.data.total
        // this.total = 10
        })
    },
    handleEdit (index, row) {
      this.dialogFormVisible = true
      this.editForm = Object.assign({}, row)
      console.log(this.editForm.username)
      // (console.log'index==' + index + '  row=' + row)
    },
    handleDelete (index, row) {
      // console.log(row.username)
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.get('/deleteUser', {
          params: {
            username: row.username
          }
        }).then(successResponse => {
          if (successResponse.data.code === 200) {
            this.exchangeCurrentPage(this.currentPage)
          }
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    submitEdit (Form) {
      this.$refs[Form].validate((valid) => {
        if (valid) {
          this.$axios
            .post('/updateUser', {
              username: this.editForm.username,
              password: this.editForm.password,
              email: this.editForm.email
            })
            .then(successResponse => {
              if (successResponse.data.code === 200) {
                console.log('更新成功')
                this.dialogFormVisible = false
                this.exchangeCurrentPage(this.currentPage)
              } else if (successResponse.data.code === 404) {
                console.log('更新失败')
              }
            })
            .catch(failResponse => {
            })
        }
      })
      // console.log(this.editForm.password)
    }

  }
}
</script>

<style scoped>
.pageMsg {
  margin-top: 15px;
}
</style>
