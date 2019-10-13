<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        <layoutaside></layoutaside>
      </el-aside>
      <el-container>
        <el-header>
          <layoutheader></layoutheader>
        </el-header>
        <el-main>
          <!-- 将来请求 home,index,publish...路径时,优先加载layout
          加载完layout后,再加载对应的内容(home,index,publish...) -->
          <router-view></router-view>
        </el-main>
      </el-container>
  </el-container>
  </div>
</template>

<script>
// 导入两个布局组件---侧边导航和头部
import layoutheader from '@/views/layout/components/layoutHeader.vue'
import layoutaside from '@/views/layout/components/layoutAside.vue'

export default {
  // 注册组件(注册后才能使用)
  components: {
    layoutheader,
    layoutaside
  }

}
</script>

<style lang="less" scoped>
  .layout {
    height: 100%;

    &>.el-container {
      height:100%
    }
  }
  .el-header {
    background-color: #fff;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    background-color: #323745;
    color: #333;
  }
  .el-main {
    background-color: #eee;
    color: #333;
  }
</style>
