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
