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

// 导入 nprogress
import nprogress from 'nprogress'
// 导入样式文件
import 'nprogress/nprogress.css'

// 导入 list
import List from '@/views/article/list'
// 使用路由
Vue.use(Router)

// 导入并到处一个 router 对象

let router = new Router({
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
          component: Home
        },
        {
          // 添加一个 publish子路由
          path: '/publish',
          component: Publish
        },
        {
          path: '/article/list',
          component: List
        }
      ]
    }
  ]
})
// router: 路由对象
// 给路由对象添加导航守卫---> 全局前置导航守卫
// 当由一个路由跳转到另一个路由时执行
router.beforeEach((to, from, next) => {
  // 开启进度条
  nprogress.start()
  // to: 要去的路由 从A到B 中的B
  // from: 发起跳转的路由 从A到B 中的A
  // next: 函数, 是否执行后面的代码
  console.log(to)
  console.log(from)
  // 排除跳转到登录页面
  if (to.path !== '/login') {
    // 得到localstorage 中的userInfo
    let userInfo = window.localStorage.getItem('userInfo')
    // 判断用户是否登录:
    if (!userInfo) {
      // 如果不存在,说明没有登录过,应该跳转到登录页面
      router.push('/login')
    } else {
      next()
    }
  } else {
    // 执行后续代码
    next()
  }
})
// 在全局后置钩子中,关闭 进度条
router.afterEach((to, from) => {
  // 关闭进度条
  nprogress.done()
})
export default router
