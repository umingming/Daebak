import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js';
import excel from 'vue-excel-export'

Vue.use(excel)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
