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
          <el-col :span="14"><el-input v-model="form.code" placeholder="请输入密码"></el-input></el-col>
          <el-col :span="6"><el-button>获取验证码</el-button></el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login" class="login-btn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        mobile: '',
        code: ''
      },
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
    login () {
      // 获取el-from元素
      // 用this.$refs["from"] / this.$refs.from也可以
      // validate 用于验证所有表单元素中的规则
      this.$refs.form.validate(valid => {
        // console.log(valid)
        // 如果结果为 true, 说明验证通过
        if (valid === true) {
          console.log('验证通过')
        } else {
          console.log('验证不通过!')
          // return
        }
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

    .login-btn {
      width: 100%;
    }
  }
}
</style>
