import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
App.mpType = 'app'
const youyoy = 123;
const app = new Vue({
    ...App
})
app.$mount()