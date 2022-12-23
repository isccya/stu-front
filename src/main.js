import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from './router'
// 引入vuex
import store from './store/index'
// 全局引入element-ui组件库
import ElementUI from 'element-ui'
// 全局引入element-ui组件样式
import 'element-ui/lib/theme-chalk/index.css';

// Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
    render: h => h(App),
    router: router,
    store: store
}).$mount('#app')
