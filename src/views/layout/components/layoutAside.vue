<template>
  <div class="appAside">
    <!-- logo -->
    <div class="logo">
    <img src="./logo_admin.png" alt="">
    </div>
    <!-- 导航栏 -->
    <!-- el-menu: 管理所有菜单栏选项  default-active: 默认选中的导航
    @open: 展开导航事件 @close: 关闭导航事件 -->
    <!-- 暂时删除 @open="handleOpen"
      @close="handleClose" -->
      <!-- :unique-opened 前面加:号, 转换后面的字符串成为布尔值 -->
      <!-- :router 可以开启vue-router, 以index为path 作为跳转 -->
    <el-menu
      :router="true"
      :unique-opened="true"
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#353b4e"
      text-color="#ccc"
      active-text-color="#409eff">
      <!-- el-menu-item: 直接添加导航,但是没有二级导航
      index: 唯一标示, 与上面的default-active相对应 -->
      <!-- *************** -->
      <!-- <el-menu-item index="2"> -->
        <!-- 图标 -->
        <!-- <i class="el-icon-menu"></i>
        <span slot="title">首页</span> -->
      <!-- </el-menu-item> -->
      <!-- el-submenu: 一级下面还有二级 -->
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>内容管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template> -->
          <!-- 二级菜单 -->
          <!-- <el-menu-item index="1-1">发布文章</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu> -->
      <!-- *************** -->
      <el-menu-item index="/home">
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <tamplate slot="title">
          <span>内容管理</span>
        </tamplate>
        <el-menu-item index="/publish">
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="2-2">
          <span slot="title">内容列表</span>
        </el-menu-item>
        <el-menu-item index="2-3">
          <span slot="title">评论列表</span>
        </el-menu-item>
        <el-menu-item index="2-4">
          <span slot="title">素材管理</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <tamplate slot="title">
          <span>粉丝管理</span>
        </tamplate>
        <el-menu-item index="3-1">
          <span slot="title">图文数据</span>
        </el-menu-item>
        <el-menu-item index="3-2">
          <span slot="title">粉丝概况</span>
        </el-menu-item>
        <el-menu-item index="3-3">
          <span slot="title">粉丝画像</span>
        </el-menu-item>
        <el-menu-item index="3-4">
          <span slot="title">粉丝列表</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="4">
        <span slot="title">账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    // handleOpen () {
    //   console.log('被展开了!')
    // },
    // handleClose () {
    //   console.log('被关闭了!')
    // }
  }
}
</script>

<style lang="less" scoped>
 .logo {
   height: 60px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #333;
   img {
     width: 120px;
   }
 }
</style>
