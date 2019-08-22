import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'

import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import BootstrapVue from 'bootstrap-vue'
// @ts-ignore
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';

Vue.use(VueAxios,axios)
Vue.config.productionTip = false;
Vue.use(BootstrapVue)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
