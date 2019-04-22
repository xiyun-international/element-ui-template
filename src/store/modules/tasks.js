const ADD_TASK = 'ADD_TASK';
const tasks = {
  state: {
    list: [],
  },
  mutations: {
    // 设置菜单
    [ADD_TASK]: (state, data) => {
      state.task = data;
    },
  },
};

export default tasks;
