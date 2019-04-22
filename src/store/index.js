/**
 * Created by ZhaoLiang on 2017/7/19.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import menu from './modules/menu';
import tasks from './modules/tasks';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    tasks,
    menu,
    user,
  },
});

export default store;
