import Vue from 'vue'
import App from './App.vue'


import '@/assets/base.css'
import store from '@/store/home.js'//导入vuex实例
import router from '@/router/index.js'//导入路由实例
import ElementUI from 'element-ui'; //导入全部的element-ui组件
import 'element-ui/lib/theme-chalk/index.css'; //导入element-ui样式

Vue.config.productionTip = false; //是否启用生产提示，在生产环境下，很多提示是没有的。

Vue.use(ElementUI); //注册element-ui插件





const vm = new Vue({
  router,//传如路由器实例到vue实例
  store,//注册vuex
  render: h => h(App),
})


vm.$mount('#app')//挂载
