<template>
  <div id="app">
    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </el-row>
    <el-switch
      v-model="value"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>
    <div class="block">
      <el-slider
        v-model="slider"
        show-input>
      </el-slider>
  </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: true,
      slider: 0
    }
  }
}
</script>

<style lang="less">
</style>
