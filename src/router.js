// 导入 vue
import Vue from 'vue'
// 导入第三方包 vue-router
import Router from 'vue-router'
// 导入组件  导入后要在路由选项中填写对应的属性
// 使用@/+地址 特指src文件中的文件
import Home from '@/views/home'
import Login from '@/views/login'
// 导入layout 路由
import Layout from '@/views/layout'
// 导入publish 路由
import Publish from '@/views/publish/'
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
      // 登录路由
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      // 布局路由
      path: '/layout',
      name: 'layout',
      component: Layout,
      // 添加子路由:
      children: [
        // 将 home 作为layout的子路由存在
        { path: '/home',
          name: 'home',
          component: Home
        },
        {
          // 添加一个 publish子路由
          path: '/publish',
          component: Publish,
          name: 'publish'
        }
      ]
    }
  ]
})
