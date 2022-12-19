import Vue from 'vue'
import App from './App.vue'

import router from './router'//引入路由
import store from './store/index'//引入vuex
import ElementUI from 'element-ui';//全局引入ui组件库
import 'element-ui/lib/theme-chalk/index.css';//全局引入ui组件样式
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router: router,
  store:store,
}).$mount('#app')
