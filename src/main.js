import Vue from 'vue'
import App from './App'
import store from './store.js'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'

Vue.use(ElementUI, axios)
Vue.config.productionTip = false

Vue.directive('document-click', {
  // 当被绑定的元素插入到 DOM 中时……
  bind: (el, binding, vnode) => {
    document.addEventListener('click', binding.value, false)
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  create(){
    console.log(123);
  }
})
