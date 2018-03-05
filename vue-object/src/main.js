import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routeConfig.js'

import axios from 'axios'

Vue.use(Vuex);

axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';           //配置请求头

Vue.prototype.$http = axios;


Vue.use(VueRouter);
Vue.use(ElementUI);

const router=new VueRouter({
  // mode: 'history', //切换路径模式，变成history模式
  routes
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

