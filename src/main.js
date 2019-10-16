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

// 给 axios 设置基准地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

// 设置 axios 拦截器
// 请求拦截器: 发送请求之前执行
axios.interceptors.request.use(function (config) {
  console.log('我是请求拦截器')
  console.log(config)
  // 请求正常时的逻辑
  // config: axios 请求服务器的相关信息 如下:
  // url: 请求的接口地址
  // method: 请求的方式
  // baseUrl: 请求的基准地址
  // headers: Authorization: token
  // 在请求拦截器中, 执行完逻辑代码之后, 一定要return config
  // 否则, 请求无法发送(获取不到后台信息)

  // 在请求头中添加token
  let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
  // 判断 只有userInfo 存在时, 才需要添加token
  if (userInfo) {
    config.headers.Authorization = `Bearer ${userInfo.token}`
  }
  return config
}, function (error) {
  // 请求异常时的逻辑
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  // 当服务器响应信息回来时 执行
  // 响应拦截器如果要返回信息  必须要有 return response
  console.log('我是响应拦截器')
  console.log(response)
  // 这个response的内容就是axios请求的数据结果, 即res
  // 通过axios获得的数据, 可以通过响应拦截器 设置return的内容 如下方:
  // return {
  //   name: 'fzp',
  //   age: 2000
  // }  // 这个return就是新的获取的数据,是自己设定的. 可以通过axios的返回数据中 获得
  return response.data.data
}, function (error) {
  // 当响应的状态码为400以后时 执行
  return Promise.reject(error)
})

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
