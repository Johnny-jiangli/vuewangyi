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
    playList:[],
    index:0,
    currentPlay:{},
  },
  mutations: {
    currentPlay(state,data){
      state.currentPlay = JSON.parse(data)
    },
    increment (state) {
      if(state.index  === state.playList.length-1){
        state.index = 0
      }else {
        state.index++
      }
    },
    playPrv(state){
      if(state.index === 0){
        state.index = state.playList.length-1
      }else {
        state.index--;
      }
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
      let len = state.playList.length;
      for (let i = 0; i < len ;i++){
        if(state.playList[i].id === data.id){
          return false
        }
      }
      state.playList.push(data)
    },
    playListData:(s,data)=>{
      s.playList = data
    },
    delPlayList:(state,data)=>{
      state.playList.splice(data,1)
    },
    delAllPlayList:(state)=>{
      state.playList = [];
    }
  },
  actions:{
    playPrv:({commit})=>{
      commit('playPrv')
    },
    currentPlay({commit},data){
      commit('currentPlay',data)
    },
    increment (context) {
      context.commit('increment')
    },
    delAllPlayList({commit}){
      commit('delAllPlayList')
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
