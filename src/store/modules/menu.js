const ADD_MENU = 'ADD_MENU';
const ADD_MENU_IFRAME_FLAG = 'ADD_MENU_IFRAME_FLAG';
const ADD_MENU_IFRAMES = 'ADD_MENU_IFRAMES';
const menu = {
  state: {
    // 保存菜单数据
    menuData: [],
    // iFrame 标识
    iframeFlag: null,
    // 保存iframe数据
    iframs: {},
  },
  getters: {},
  mutations: {
    // 设置菜单
    [ADD_MENU]: (state, data) => {
      state.menuData = data;
    },
    // 设置菜单
    [ADD_MENU_IFRAME_FLAG]: (state, data) => {
      state.iframeFlag = data;
    },
    // iframe内容的添加
    [ADD_MENU_IFRAMES]: (state, data) => {
      state.iframs = data;
    },
  },
  actions: {},
};

export default menu;
