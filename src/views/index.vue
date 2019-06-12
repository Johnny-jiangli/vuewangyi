<template>
  <el-container>
        <el-header height="70">
          <header-menu></header-menu>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>

        </el-footer>
      </el-container>
</template>

<script>
  import headerMenu from '@/components/headerMenu'
  export default {
        name: "index",
        components:{
          headerMenu
        },
      methods:{}
    }
</script>

<style scoped>

.el-header,.el-main,.el-footer{
  padding: 0;
}
</style>
