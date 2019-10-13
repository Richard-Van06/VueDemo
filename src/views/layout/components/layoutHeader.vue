<template>
  <div class="appHeader">
    <!-- 一行 -->
    <el-row>
      <!-- 列 -->
      <el-col :span="14">
        江苏传智播客教育科技股份有限公司
        </el-col>
      <el-col :span="3" :offset="7">
        <!-- <div class="userInfo">
        <img class="icon" src="" alt="">
        <span class="name">群姐</span>
        </div>-->
        <el-dropdown trigger="click">
          <span class="el-dropdown-link userInfo">
            <img class="icon" src="" alt="">
            <span class="name">群姐</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>git地址</el-dropdown-item>
            <el-dropdown-item divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.userInfo {
  display: flex;
  align-items: center;

  .icon {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
</style>
