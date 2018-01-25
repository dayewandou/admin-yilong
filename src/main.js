// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import BaiduMap from 'vue-baidu-map'
Vue.use(Element);
Vue.prototype.$http=axios;
Vue.config.productionTip = false

Vue.use(BaiduMap,{
  ak:'Gjx0K7WDXzhRviZa16yitEdeHcmwlsVI'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  render:h=>h(App)
})
