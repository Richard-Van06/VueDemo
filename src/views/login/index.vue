<template>
<!-- 登录页面 -->
<div class="login">
  <div class="login-warp">
    <!-- logo -->
    <div class="logo">
      <img src="../../assets/logo_index.png" alt="">
    </div>
    <!-- el-form: 管理所有表单元素的父容器  ref: vue中提供操作dom的方式
    model: 表单元素的数据源  -->
    <!-- Form 组件提供了表单验证的功能，只需要通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可 -->
    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item prop="mobile">
        <el-input v-model="form.mobile" placeholder="请输入手机号码"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-row>
          <el-col :span="14">
            <el-input v-model="form.code" placeholder="请输入密码"></el-input>
          </el-col>
          <el-col :span="8" :offset="2">
            <!-- :offset : 栅格左侧的间隔格数, 默认为0 -->
            <el-button class="col-btn">获取验证码</el-button>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login" :loading="loginloading" class="login-btn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
// 导入 axios
import axios from 'axios'
export default {
  data () {
    return {
      // 表单参数
      form: {
        mobile: '13911111111',
        code: '246810'
      },
      // 控制登录按钮 登录时的加载状态
      loginloading: false,
      // 定义规则
      rules: {
        mobile: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入正确的手机号码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'blur' },
          { min: 6, max: 6, message: '请输入正确的验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 用户登录
    login () {
      // 获取el-from元素
      // 用this.$refs["from"] / this.$refs.from也可以
      // validate 用于验证所有表单元素中的规则
      this.$refs.form.validate(valid => {
        // console.log(valid)
        // 如果结果为 true, 说明验证通过
        if (valid === true) {
          console.log('验证通过')
          // 将数据提交到服务器
          this.submitData()
        } else {
          console.log('验证不通过!')
          // return
          this.$message.error('手机号码或验证码错误!')
        }
      })
    },
    // 数据提交
    submitData () {
      // 将加载状态设置为true
      this.loginloading = true
      // 发送请求
      axios({
        url: 'http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
        method: 'POST',
        data: this.form
      }).then(res => {
        console.log(res)
        // 只要进入这个方法中, 说明登录成功
        this.$message({
          message: '登录成功!',
          type: 'success'
        })
        // 将加载状态改成false
        this.loginloading = false
        // 跳转到主页
        this.$router.push('/')
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang='less' scoped>
.login {
  height: 100%;
  // 使用弹性布局
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../../assets/login_bg.jpg") 100%;

  .login-warp {
    background-color: #fff;
    padding: 30px;
    min-width: 300px;

    .logo {
      text-align: center;
      margin-bottom: 20px;

      img {
      width: 150px;
      }
    }

    .col-btn {
      width: 100%;
    }

    .login-btn {
      width: 100%;
    }
  }
}
</style>
