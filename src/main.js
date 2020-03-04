import Vue from 'vue'
import App from './App.vue'
import '../public/UEditor/ueditor.parse.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
