import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Select } from 'element-ui';
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Select)
new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
