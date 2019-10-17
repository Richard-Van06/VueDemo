<template>
  <div>
    <!-- 顶部的搜索选项区域 -->
    <!-- el-card: 卡片 -->
    <el-card class="box-card">
      <!-- 卡片头部 -->
      <div slot="header" class="clearfix">
        <span>全部图文</span>
      </div>
      <!-- 添加 form表单 -->
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="文章状态">
          <el-radio-group v-model="form.resource">
            <el-radio label="全部"></el-radio>
            <el-radio label="草稿"></el-radio>
            <el-radio label="待审核"></el-radio>
            <el-radio label="审核通过"></el-radio>
            <el-radio label="审核失败"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道列表">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="时间选择">
          <el-date-picker
            v-model="value2"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 下面是文章显示区域 -->
    <el-card class="box-card mycard">
      <div slot="header" class="clearfix">
        <span>共找到{{total_count}}条符合条件的内容</span>
      </div>
      <!-- 表格内容区域 -->
      <!-- 查询ele-ui可以知道 :data是数据源 -->
      <el-table v-loading="tableLoading" :stripe="true" :data="dataList" style="width: 100%">
        <!-- el-table-column 表格组件中的每一列 -->
        <!-- prop 当前行显示的数据(res)的属性 -->
        <!-- 图片的prop 不能直接用cover.images[0]
        这样出来的只是图片的路径地址-->
        <el-table-column label="图片" width="180">
          <!-- 通过查找ele-ui自定义表格可知:
          这里添加了tamplate标签后,可以在这里自定义添加内容 还要添加slot-scope="scope"属性
          这里不是显示prop属性对应的数据, 而是显示tamplate 中的内容-->
          <!-- 如果在tamplate中使用数据的话,必须通过scope.row 属性使用-->
          <!-- scope.row是当前行的数据源 -->
          <template slot-scope="scope">
            <!-- {{scope.row}} -->
            <img class="myImg" :src="scope.row.cover.images[0]" alt />
          </template>
        </el-table-column>
        <el-table-column prop="title" label="标题" width="180"></el-table-column>
        <el-table-column prop="status" label="状态" width="180">
          <tamplate slot-scope="scope">
            <span v-if="scope.row.status === 0">草稿</span>
            <span v-if="scope.row.status === 1">待审核</span>
            <span v-if="scope.row.status === 2">审核通过</span>
            <span v-if="scope.row.status === 3">审核失败</span>
            <span v-if="scope.row.status === 4">已删除</span>
          </tamplate>
        </el-table-column>
        <el-table-column prop="pubdate" label="发布日期" width="180"></el-table-column>
        <!-- 操作是两个按钮, 不用prop -->
        <el-table-column label="操作">
          <template>
            <el-button size="mini" type="primary">
              <i class="el-icon-edit"></i>修改
            </el-button>
            <el-button size="mini" type="danger">
              <i class="el-icon-delete"></i>删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页栏 -->
      <!-- el-pagination: 分页组件 background: 背景颜色(boolean)
      :total: 显示的总页数(内部根据页容量自动换算,只需输入总内容条数)-->
      <el-pagination
        @current-change="pageChange"
        @next-click="nextClick"
        @prev-click="prevClick"
        background
        layout="prev, pager, next"
        :total="total_count"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
// 得到 token
// let userInfo = (window.localStorage.getItem('userInfo')
// 以上获取的是字符串,需要转换对象, 方便使用对象里的属性token
// let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
// 在main.js 中添加拦截器,在请求拦截器里面添加token, 这里的就去掉

export default {
  data () {
    return {
      form: {
        region: '',
        resource: ''
      },
      value2: '',
      // 文章列表保存在 datalist 默认为空
      dataList: [],
      // 文章总条数 默认为0
      total_count: 0,
      // 分页设置
      page: 1, // 默认为第一页
      // 每页的条数
      per_page: 10, // 每页显示的内容20条
      // 加载进度条
      tableLoading: true
    }
  },
  methods: {
    // 打开页面时, 需要请求文章列表的数据
    // 什么时候打开页面? 回忆生命周期的钩子函数--> created () {}
    getArtcleList () {
      // 发送请求前(获取数据前), 加载进度开启
      this.tableLoading = true
      setTimeout(() => {
        // 之前已经把axios设置为vue的原型属性, 所以这里用 this.$http
        // 发送请求后出现401 因为没有携带 token
        // token要写在请求头中, 以键值对的方式携带  Authorization: token
        this.$http({
          url: '/articles',
          method: 'GET',
          params: {
            page: this.page,
            per_page: this.per_page
          }
          // headers: {
          //   // 模板字符串 `${}`
          //   Authorization: `Bearer ${userInfo.token}`
          // }
        }).then(res => {
          console.log(res)
          // 获取响应的数据后, 将数据源保存到datalist 中
          // this.dataList = res.data.data.results
          // 通过响应拦截器中的 return设置 简化了数据
          this.dataList = res.results
          // 保存数据总条数
          // this.total_count = res.data.data.total_count
          // 数据简化, 同上
          this.total_count = res.total_count
          // 发送请求后(获取数据后), 加载进度结束
          this.tableLoading = false
        })
      }, 2000)
    },
    // 点击上一页
    prevClick () {
      // console.log('上一页')
      // 先将当前页减1
      this.page = this.page - 1
      // 点击后,重新请求当前页的数据
      this.getArtcleList()
    },
    // 点击下一页
    nextClick () {
      // console.log('下一页')
      // 先将当前页加1
      this.page = this.page + 1
      // 重新请求当前页
      this.getArtcleList()
    },
    // 具体的页面跳转
    // 要获取点击时的页码, 把页码当做参数传入
    // 如果没有page参数, 即使点击了页码, 也不知道是第几页的.
    pageChange (page) {
      console.log('点击了页码' + page)
      // 将点击的页码赋值给 this.page
      this.page = page
      this.getArtcleList()
    }
  },
  // 打开页时,执行 所以在这里调用文章列表的 方法getArtcleList()
  created () {
    this.getArtcleList()
  }
}
</script>

<style lang="less" scoped>
.mycard {
  margin-top: 20px;
}
.myImg {
  width: 150px;
  height: 100px;
}
</style>
