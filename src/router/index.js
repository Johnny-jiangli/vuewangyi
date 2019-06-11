import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store'
import * as types from '../store/types'
// import discover from '../views/discover'
// const HelloWorld = r => require.ensure([], () => r(require('@/components/headerMenu')), 'HelloWorld')
Vue.use(VueRouter)

const routes= [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index'),
      redirect:to=>{
        return '/discover/recommend'
      },
      title: '发现音乐',
      children: [
        {path:'/my',title:'我的音乐',component:()=> import('@/views/my')},
        {path:'/store/product',title:'商城',component:()=> import('@/views/store')},
        {path:'/nmusician/web/index#/',title:'音乐人',component:()=> import('@/views/nmusician')},
        {path:'/download',title:'下载客户端',component:()=> import('@/views/download')},
        {
          path:'/discover',
          title:'发现音乐',
          component:()=> import('@/views/discover'),
          children:[
            {path:'recommend',title:'推荐',component:()=> import('@/views/recommend')},
            {path:'toplist',title:'排行榜',component:()=> import('@/views/toplist')},
            {path:'playlist', title:'歌单',component:()=> import('@/views/playlist')},
            {path:'djradio',title:'主播电台',component:()=>import('@/views/djradio')}
          ]
        },
      ]
    },

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

