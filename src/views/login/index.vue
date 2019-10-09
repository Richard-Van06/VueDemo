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
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-input v-model="form.mobile" placeholder="请输入手机号码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-row>
          <el-col :span="14"><el-input v-model="form.code" placeholder="请输入密码"></el-input></el-col>
          <el-col :span="6"><el-button>获取验证码</el-button></el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-btn">登录</el-button>
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
        name: '',
        code: ''
      }
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
