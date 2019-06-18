<template>
    <el-container style="min-width: 1160px">
      <el-header height="70">
        <index-header></index-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <player></player>
      </el-footer>
    </el-container>
</template>

<script>
  import IndexHeader from '../components/layout/indexHeader'
  import Player from '../components/player/Player'
  export default {
        name: "musicIndexLayout",
      components:{
          IndexHeader,
          Player,
      }
    }
</script>

<style scoped>
  .el-header,.el-main,.el-footer{
    padding: 0 0;
    margin: 0 0;
  }
</style>
