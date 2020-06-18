import Vue from 'vue'
import VueRouter from 'vue-router';
/* PAGES */
import App from './App'
import Home from './Home'
import Portfolio from './pages/Portfolio'
import Contacts from './pages/Contacts'
/* PORTFOLIO */
import CurriculumVitae from './portfolio/CurriculumVitae/CurriculumVitae'
import WebApp from './portfolio/WebApp/WebApp'
import Whereabouts from './portfolio/Whereabouts/Whereabouts'

Vue.config.productionTip = false
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: [
    { name: 'home', path: '/', component: Home },
    { name: 'contacts', path: '/contacts', component: Contacts },
    { name: 'portfolio', path: '/portfolio', component: Portfolio },
    { name: 'curriculumvitae', path: '/portfolio/curriculumVitae', component: CurriculumVitae },
    { name: 'webapp', path: '/portfolio/contacts', component: WebApp },
    { name: 'whereabouts', path: '/portfolio/whereabouts', component: Whereabouts }
  ],
  base: '/',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
