<template>
  <div id="all">
    <div id="login"
         v-if="loginFlag">
      <h2>登录</h2>
      <div class="formdiv">
        <el-form :model="loginForm"
                 status-icon
                 :rules="rulesLogin"
                 ref="loginForm"
                 label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="账号"
                        prop="username">
            <el-input type="text"
                      v-model="loginForm.username"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码"
                        prop="password">
            <el-input type="password"
                      v-model="loginForm.password"
                      autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary"
                       @click="submitLoginForm('loginForm')">登录</el-button>
            <el-button type="primary"
                       @click="reg">注册</el-button>
            <el-button @click="resetForm('loginForm')">重置</el-button>

          </el-form-item>
        </el-form>
      </div>
    </div>
    <div id="reg"
         v-if="regFlag">
      <h2>注册</h2>
      <div class="formdiv">
        <el-form :model="regForm"
                 status-icon
                 :rules="rulesReg"
                 ref="regForm"
                 label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="账号"
                        prop="username">
            <el-input v-model="regForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码"
                        prop="password">
            <el-input type="password"
                      v-model="regForm.password"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码"
                        prop="checkPass">
            <el-input type="password"
                      v-model="regForm.checkPass"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱"
                        prop="email">
            <el-input v-model="regForm.email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
                       @click="submitRegForm('regForm')">提交</el-button>
            <el-button type="primary"
                       @click="login()">返回</el-button>
            <el-button @click="resetForm('regForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    // 验证Username规则
    var validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账户'))
      } else {
        callback()
      }
    }
    // 验证Password规则
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }

    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.regForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      loginFlag: true,
      regFlag: false,
      loginForm: {
        username: '',
        password: ''

      },
      regForm: {
        username: '',
        password: '',
        checkPass: '',
        email: ''
      },
      rulesLogin: {
        username: [
          { validator: validateUser, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ]

      },
      rulesReg: {
        username: [
          { validator: validateUser, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        email: [
          // element自带的邮箱检测
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]

      }
    }
  },
  computed: {

  },
  methods: {
    submitLoginForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post('/login', {
              username: this.loginForm.username,
              password: this.loginForm.password
            })
            .then(successResponse => {
              if (successResponse.data.code === 200) {
                console.log('密码正确，跳转成功')
                this.$router.replace({ path: '/first' })
              } else if (successResponse.data.code === 404) {
                console.log('账户或密码不正确')
              }
            })
            .catch(failResponse => {
            })
          console.log('success submit!!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    submitRegForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post('/reg', {
              username: this.regForm.username,
              password: this.regForm.password,
              email: this.regForm.email
            })
            .then(successResponse => {
              if (successResponse.data.code === 200) {
                // this.$router.replace({ path: '/index' })
                console.log('注册成功')
                alert('注册成功，前往登录吧')
                this.loginFlag = true
                this.regFlag = false
              } else if (successResponse.data.code === 404) {
                console.log('注册失败')
              }
            })
            .catch(failResponse => {
            })
          console.log('success submit!!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    resetForm (formName) {
      this.$refs[formName].resetFields() // 重置表单
    },
    reg () {
      // 切换至注册表单
      this.loginFlag = false
      this.regFlag = true
    },
    login () {
      this.loginFlag = true
      this.regFlag = false
    }

  }
}
</script>

<style>
#all {
  width: 100%;
  height: 100%;
  /*下面3行实现垂直居中效果*/
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/images/bgcar.jpg");
}
#login {
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  width: 500px;
  height: 300px;
  margin: 0 auto; /* 水平居中 */
}
#reg {
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  width: 500px;
  height: 350px;
  margin: 0 auto; /* 水平居中 */
  /* margin-top: 180px; 垂直居中先直接用距顶部180px代替 */
}
.formdiv {
  width: 90%;
  height: 80%;
  margin: 0 auto; /* 水平居中 */
}
</style>
