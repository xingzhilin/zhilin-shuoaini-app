import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/common_view.css'
import jQuery from 'jquery'
import { store } from './store/store.js'

import { AlertPlugin, ToastPlugin } from 'vux'
axios.defaults.baseURI = 'https://wd7552920655trwouc.wilddogio.com/'

Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

