<template>
    <div>
      <el-container>
        <el-header height="70">
          <header-menu></header-menu>
        </el-header>
        <el-main style="height: 1500px">
          <router-view></router-view>
        </el-main>
        <el-footer height="300px">Footer</el-footer>
      </el-container>
    </div>
</template>

<script>
  import headerMenu from '@/components/headerMenu'
  export default {
        name: "index",
        components:{
          headerMenu
        }
    }
</script>

<style scoped>

.el-header,.el-main,.el-footer{
  padding: 0;
}
</style>
