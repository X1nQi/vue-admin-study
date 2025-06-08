import Vue from 'vue'
import App from './App.vue'


import '@/assets/base.css'


Vue.config.productionTip = false; //是否启用生产提示，在生产环境下，很多提示是没有的。







const vm = new Vue({
  render: h => h(App),
})


vm.$mount('#app')//挂载
