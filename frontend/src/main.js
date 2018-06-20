import Vue from 'vue';
import BoostrapVue from 'bootstrap-vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(BoostrapVue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
