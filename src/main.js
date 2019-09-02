import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.baseURL = "https://wd4782151544jfcwop.wilddogio.com/"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
