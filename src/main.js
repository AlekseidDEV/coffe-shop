import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Toast from 'vue-toastification'
import store from './store'

import './assets/scss/style.scss'
import "vue-toastification/dist/index.css";

Vue.config.productionTip = false

Vue.use(Toast, {
  timeout: 5000,
  position: 'top-center',
  draggable: true,
  icon: true,
  closeButton: "button",
  transition: "Vue-Toastification__fade",
})

new Vue({
  router,
  store,
  render: h => h(App),
})
    .$mount('#app')
