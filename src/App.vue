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
  html,body,#app{
    height: 100%;
    margin: 0;
    padding: 0;
    min-width: 1168px;
  }
  .topListWarp .el-table th{
    border-left:1px #99a9bf solid ;
    border-bottom: 1px #99a9bf solid;

  }
  .topListWarp .el-table th:first-child{
    border-left:none ;
  }

  #app .el-table thead {
    box-shadow: 15px 20px 5px #1a3888;
  }
#app {
  font-size: 12px;
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-text-size-adjust: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  overflow-x: auto;
  overflow-y: scroll;
  zoom: 1;
}
#app .el-slider__bar{
  background-color: red;
  overflow: scroll;
}
#app .player .el-table thead{
  display: none;
}
#app .player .el-table th,#app .player .el-table tr{
  background: #000000;
}
#app .player .el-table tr:hover,#app .player .el-table--enable-row-hover .el-table__body tr:hover>td {
  background-color:#2c2c2c;
  color: #fff;
}
#app .player .el-table td, #app .player .el-table th.is-leaf{
  border-bottom:none;
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
  #tagContenWarp .el-carousel__indicators--horizontal{
    display: none;
  }
  #app .el-slider.is-vertical .el-slider__runway{
    width: 6px;
    height: 100%;
    margin: 0 20px 0 14px;
  }
  #app .el-carousel__arrow .el-carousel__arrow--right{
    left: -50px;
    background-color: #2c2c2c;
  }
</style>
