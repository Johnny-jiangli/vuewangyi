import Vue from 'vue'
import Router from 'vue-router'
// import discover from '../views/discover'
// const HelloWorld = r => require.ensure([], () => r(require('@/components/headerMenu')), 'HelloWorld')
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: ()=> import('@/views/index'),
      title:'发现音乐',
      children: [
        {
          path:'/discover',
          title:'发现音乐',
          component:()=> import('@/views/discover'),
          children:[
            {path:'/recommend',title:'推荐',component:()=> import('@/views/recommend')},
            {path:'/toplist',title:'排行榜',component:()=> import('@/views/toplist')},
            {path:'/playlist', title:'歌单',component:()=> import('@/views/playlist')},
            {path:'/djradio',title:'主播电台',component:()=>import('@/views/djradio')}
          ]
        },
        {path:'/my',title:'我的音乐',component:()=> import('@/views/my')},
        {path:'/store/product',title:'商城',component:()=> import('@/views/store')},
        {path:'/nmusician/web/index#/',title:'音乐人',component:()=> import('@/views/nmusician')},
        {path:'/download',title:'下载客户端',component:()=> import('@/views/download')},
      ]
    },
    {path:'*',redirect:'/'}
  ]
})
