import Vue from 'vue'
import App from './App.vue'
import rootRouter from './routes/root.router.js';

Vue.config.productionTip = false

// Vue.use(VueRouter)

new Vue({
  router: rootRouter,
  render: h => h(App)
}).$mount('#app')
