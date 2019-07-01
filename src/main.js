import Vue from 'vue';
import 'normalize.css';
import '@xiyun/element-ui/lib/index.css';
import '../public/font.css';
import '../public/main.css';

import App from './App.vue';

import router from './router';
import store from './store';
import { post, get } from './utils/http';
import './plugins/element';

Vue.config.productionTip = false;

// 设置 http 请求方法
Vue.prototype.$post = post;
Vue.prototype.$get = get;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
