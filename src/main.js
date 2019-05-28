import Vue from 'vue';
import 'normalize.css';
import '@xiyun/xy-element-ui/lib/index.css';
import '../public/font.css';
import '../public/main.css';

import App from './App.vue';

import router from './router';
import store from './store';
import post from './utils/post';
import './plugins/element';

Vue.config.productionTip = false;

Vue.prototype.$post = post;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
