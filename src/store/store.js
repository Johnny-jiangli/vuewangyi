import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex);
export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })],
  state: {
    user: {},
    token: null,
    title: '',
    count:0,
    playList:[]

  },
  mutations: {
    increment (state) {
      state.count++
    },
    [types.LOGIN]: (state, data) => {
      localStorage.token = data;
      state.token = data;
    },
    [types.LOGOUT]: (state) => {
      localStorage.removeItem('token');
      state.token = null
    },
    [types.TITLE]: (state, data) => {
      state.title = data;
    },
    pushPlayList:(state ,data)=>{
      data = JSON.parse(data);
      state.playList.push(data)
      // localStorage.setItem('playList',JSON.stringify(this.state.playList))
    },
    playListData:(s,data)=>{
      s.playList = data
    },
    delPlayList:(state,data)=>{
      state.playList.splice(data,1)
    }
  },
  actions:{
    increment (context) {
      context.commit('increment')
    },
    pushPlayList({commit},obj){
      commit('pushPlayList',obj)
    },
    delPlayList({commit},data){
      commit('delPlayList',data)
    },
    playListData(c,data){
      c.commit(c,data)
    }
  }
})
