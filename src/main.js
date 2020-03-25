import Vue from 'vue';
import 'normalize.css';
import '@xiyun/element-ui/lib/index.css';
import XyUI from '@xiyun/element-ui';
import '../public/font.css';
import '../public/main.css';
import './plugins/element';
import router from './router';
import store from './store';
import { post, get } from './utils/http';

import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(XyUI);

// 设置 http 请求方法
Vue.prototype.$post = post;
Vue.prototype.$get = get;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
