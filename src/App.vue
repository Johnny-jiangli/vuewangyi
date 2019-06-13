<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*margin-top: 60px;*/
  /*background-color:#42b983;*/
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
}
#app .el-slider__bar{
  background-color: red;
}
  #app .el-slider__button {
    width: 16px;
    height: 16px;
    border: 5px solid #ffffff;
    background-color: red;
    border-radius: 50%;
    -webkit-transition: .2s;
    transition: .2s;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  #app .el-slider.is-vertical .el-slider__runway{
    width: 6px;
    height: 100%;
    margin: 0 20px 0 14px;
  }
</style>
