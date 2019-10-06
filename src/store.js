import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  position: {},
  userName: '',
  cookieObj: {}
};
const mutations = {
  setPosition(state, val) {
    state.position = val;
  },
  setUserName(state, userInfo) {
    state.userName = userInfo.userName;
    const expires = 30 * 24 * 60 * 60;
    document.cookie = 'login=true';
    document.cookie = 'userName=' + userInfo.userName;
    document.cookie =  'password=' + userInfo.password;
    document.cookie =  'expires=' + new Date(+new Date() + expires);
  },
  getUser(state) {
    const cookieList = document.cookie.split('; ');
    let cookieObj = {};
    cookieList.forEach(item => {
      const cookies = item.split('=');
      cookieObj[cookies[0]] = cookies[1];
    })
    state.cookieObj = cookieObj;
  }
};
const actions = {
  setPosition(state, val) {
    //异步请求后端获取当前位置
    state.commit('setPosition',val);
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
