<template>
    <div>
      <el-container>
        <el-header height="70">
          <index-header></index-header>
        </el-header>
        <el-main style="overflow-y: scroll;overflow-x:scroll;height: auto;min-width: 1120px">
<!--          <index-layout></index-layout>-->
          <router-view></router-view>
        </el-main>
        <el-footer>
          <player></player>
        </el-footer>
      </el-container>
    </div>
</template>
<script>
  import Player from '../components/player/Player'
  import indexHeader from '../components/layout/indexHeader'
  import indexLayout from './indexLayout'
    export default {
        name: "musicIndex",
      data(){
          return{}
      },
      components:{
          indexHeader,
          Player,
          indexLayout
      }
    }
</script>

<style scoped>
  .el-header,.el-main,.el-footer{
    padding: 0 0;
    margin: 0 0;
  }
</style>
