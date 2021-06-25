import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

//导入全局样式表
import './assets/css/global.css'

//导入jQuery
import $ from 'jquery'

/*
//很重要的头部配置携带token
*/
import axios from 'axios'
//配置请求根路径，跨域在vue.config.js中
axios.defaults.baseURL = '/api';
Vue.config.productionTip = false

/*
 *原型链挂载
 *@type {AxiosStatic}
 */
Vue.prototype.$http = axios;
Vue.prototype.$ = $;


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')