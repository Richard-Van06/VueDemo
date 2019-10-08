// 导入 vue
import Vue from 'vue'
// 导入第三方包 vue-router
import Router from 'vue-router'
// 导入组件  导入后要在路由选项中填写对应的属性
// 使用@/+地址 特指src文件中的文件
import Home from '@/views/home'
import Login from '@/views/login'
// 使用路由
Vue.use(Router)

// 导入并到处一个 router 对象
export default new Router({
  // 设置路由选项
  routes: [
    {
      // 重定向 使显示的主页为--home
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
