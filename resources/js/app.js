require('./bootstrap');

import Vue from 'vue'
import App from './App.vue'
import router from './router';
import components from './components';
import store from './store'
import './antd'
import NProgress from 'vue-nprogress'
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);
Vue.use(NProgress);
const nprogress = new NProgress({ parent: 'body', router: true })

Vue.use(components);
new Vue({
    router,
    store,
    nprogress,
    render: h => h(App)
  }).$mount('#app')