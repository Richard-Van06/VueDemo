// 导入 vue
import Vue from 'vue'

// 导入组件app.vue --- 根组件
import App from './App.vue'
// 导入路由
import router from './router'
// 导入 vuex
import store from './store'
// 导入 Element-ui 组件
import ElementUI from 'element-ui'
// 导入 ele样式
import 'element-ui/lib/theme-chalk/index.css'
// 导入全局css样式
import '@/styles/index.less'

// 导入axios
import axios from 'axios'

// 将axios挂在到 vue 原型中
// 可以通过this.$fuck 来使用
//  .vue是 vue中的 组件
// 所有的组件都是 vue 的实例
// 在所有的 vue 实例中, 都可以使用 $http
// 一般将 axios 挂在为实例属性是, 他有一个固定的名称--->$http
// $http: $ 区别组件中的属性 与 实例中的属性
// http: 致敬老一辈的框架---> vue全家桶
// 全家桶: vue
//        vue-cli
//        vue-router
//        dev-tool
//        vue-resource: 官方提供的发送请求的第三方包
//            this.$http
//        axios: 发送异步请求
//          挂载为统一时, 设置$http
Vue.prototype.$http = axios

// 使用ele
Vue.use(ElementUI)

// 设置当前项目的模式: 上线模式(true)/开发模式(false)
Vue.config.productionTip = false

// 创建一个 vue 实例
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
