/**
 * Created by ZhaoLiang on 2017/10/31.
 */

const types = {
  ADD_USER: 'ADD_USER',
  ADD_USER_TYPE: 'ADD_USER_TYPE',
  ADD_ORG: 'ADD_ORG',
};

const users = {
  state: {
    // 关联人员对话框数据更新状态
    info: {
      userName: '',
      realName: '',
      // 是否显示今日运营数据
      todayOperationShow: 0,

      // userid
      encryptUserId: '',
    },
    // 用户分类
    userType: {},
    // 组织架构
    org: {},
  },
  getters: {},
  mutations: {
    // 设置菜单
    [types.ADD_USER]: (state, data) => {
      state.info = data;
    },
    [types.ADD_USER_TYPE]: (state, data) => {
      state.userType = data;
    },
    [types.ADD_ORG]: (state, data) => {
      state.org = data;
    },
  },
  actions: {},
};

export default users;
