import Vue from 'vue'
import VueRouter from 'vue-router';
/* PAGES */
import App from './App'
import Home from './Home'
import Portfolio from './pages/Portfolio'
/* PORTFOLIO */


Vue.config.productionTip = false
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: [
    { name: 'home', path: '/', component: Home },
    { name: 'portfolio', path: '/portfolio', component: Portfolio }
  ],
  base: '/',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
