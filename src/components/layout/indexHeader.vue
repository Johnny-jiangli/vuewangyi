<template>
  <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#242424"
      text-color="#ccc"
      router
      active-text-color="#fff">
      <h1 class="logo" @click="clickGoIndexPath">
      </h1>
      <el-menu-item index="1">
        发现音乐
      </el-menu-item>
      <el-menu-item index="/my" >我的音乐</el-menu-item>
      <el-menu-item index="/friend" >朋友</el-menu-item>
      <el-menu-item index="/store/product" >商城</el-menu-item>
      <el-menu-item index="/nmusician/web/index" >音乐人</el-menu-item>
        <el-menu-item index="/download" >
          下载客户端
          <el-badge value="HOT" class="headerBadge">
          </el-badge>
        </el-menu-item>
      <div style="" class="flexSty">
        <el-input v-model="input" placeholder="音乐/视频/用户" size="mini">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <div class="flexSty">
        <el-button round size="mini" id="author">
          <router-link to="/download" >创作者中心</router-link>
        </el-button>
      </div>
      <el-submenu index="7">
        <template slot="title">登录</template>
        <el-menu-item index="7-1">手机登录</el-menu-item>
        <el-menu-item index="7-2">邮箱登录</el-menu-item>
        <el-menu-item index="7-3">0000</el-menu-item>
      </el-submenu>
    </el-menu>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        input:''
      };
    },
    methods: {
      clickGoIndexPath(){
        this.$router.push('/')
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .el-menu.el-menu--horizontal{
    border-bottom:none;
  }
  .el-menu-demo{
    display: flex;
    justify-items: center;
    justify-content: center;
    z-index: 1000;
    height: 70px;
  }
  .el-menu--horizontal .el-menu-item,.el-menu--horizontal>.el-submenu .el-submenu__title{
    height: 70px;
    line-height: 70px;
    overflow: hidden;
  }
  .el-menu.el-menu--horizontal{
    min-width: 960px;
  }
  .flexSty{
    display: flex;justify-content:center;flex-direction: column
  }
  #headerMenu .el-input__inner{
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
  }
  .headerBadge{
    margin-top: -30px;
    margin-right: 40px;
  }
  #headerMenu .el-badge__content.is-fixed{
    position: absolute;
    top: 17px;
  }
  .logo{
    background: url(../../assets/topbar.png) no-repeat 0 9999px;
    float: left;
    width: 176px;
    min-width: 176px;
    height: 69px;
  }
  .logo{
    background-position: 0px 0px;
  }
  #author{
    background-color:transparent;
    border:1px solid #cc9c90;
    margin-left: 10px;
    margin-right: 10px;
  }
  #author:hover{
    border:1px solid white;
  }
  #author a{
    color:#99a9bf;
  }
  #author a:hover{
    color: white;
    text-decoration: none;
  }
</style>
