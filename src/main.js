import Vue from 'vue';
import ElementUI from 'element-ui';
import 'normalize.css';
import 'element-ui/lib/theme-chalk/index.css';
import '../public/font.css';
import '../public/main.css';

import App from './App.vue';

import router from './router';
import store from './store';
import post from './utils/post';

Vue.config.productionTip = false;

Vue.prototype.$post = post;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
