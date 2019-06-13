<template>
    <div>
      <el-container>
        <el-header height="70">
          <index-header></index-header>
        </el-header>
        <el-main style="overflow-y: scroll;height: 1500px">
          <tag></tag>
          <recommend></recommend>
          <div style="width: 986px;margin: 0 auto;background-color: #91acda">
            <div style="width: 500px;height: 500px" v-for="(item,index) in 6">
<!--              <tag-content-box ></tag-content-box>-->
              <div>{{item ,index}}</div>
            </div>
          </div>
        </el-main>
        <el-footer>
          <player></player>
        </el-footer>
      </el-container>
    </div>
</template>
<script>
  import tagContentBox from '../components/tagContentBox'

  import Player from '../components/player/Player'
  import indexHeader from '../components/layout/indexHeader'
  import recommend from './recommend'
  import tag from '../components/tag'
    export default {
        name: "musicIndex",
      data(){
          return{}
      },
      components:{
          indexHeader,
          Player,
          recommend,
         tag,
        tagContentBox
      }
    }
</script>

<style scoped>
  .el-header,.el-main,.el-footer{
    padding: 0 0;
    margin: 0 0;
  }
</style>
