import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store'
import * as types from '../store/types'
// import discover from '../views/discover'
// const HelloWorld = r => require.ensure([], () => r(require('@/components/headerMenu')), 'HelloWorld')
Vue.use(VueRouter)

const routes= [
  {
    path:'/',
    name:'musicIndex',
    component:()=>import('@/views/musicIndex'),
    redirect:to=>{
      return '/discover'
    },
    title: '发现音乐',
    children: [
      {path:'/my',title:'我的音乐',component:()=> import('@/views/my')},
      {path:'/friend',title:'朋友',component:()=> import('@/views/friend')},
      {path:'/store/product',title:'商城',component:()=> import('@/views/store')},
      {path:'/nmusician/web/index',title:'音乐人',component:()=> import('@/views/nmusician'),redirect:to=>{return 'www.baidu.com'}},
      {path:'/download',title:'下载客户端',component:()=> import('@/views/download')},
      {path:'/test',title:'test',component:()=> import('@/views/indexLayout')},
      {
        path:'/discover',
        title:'发现音乐',
        component:()=> import('@/views/discover'),
        redirect:to=>{
          return '/discover/recommend'
        },
        children:[
          {path:'recommend',title:'推荐',component:()=> import('@/views/indexLayout')},
          {path:'toplist',title:'排行榜',component:()=> import('@/views/toplist')},
          {path:'playlist/:cat',meta:{title:'获取精准分类歌单',code:100}, title:'歌单',component:()=> import('@/views/playlist')},
          {path:'playlist', meta:{ title:'全部歌单',code:200},component:()=> import('@/views/playlist')},
          {path:'playlists/:id', title:'歌单',component:()=> import('@/views/playLists')},
          {path:'djradio',title:'主播电台',component:()=>import('@/views/djradio')}
        ]
      },
    ]
  }
  ]


// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}
const router = new VueRouter({
  mode: 'history',
  routes
});
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(r => r.meta.requireAuth)) {
//     if (store.state.token) {
//       next();
//     }
//     else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}
//       })
//     }
//   }
//   else {
//     next();
//   }
// })
export default router;

