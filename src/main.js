// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'keen-ui/dist/keen-ui.css';

import Vue from 'vue';
import KeenUI from 'keen-ui';

import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(KeenUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
