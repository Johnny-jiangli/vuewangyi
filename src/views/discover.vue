<template>
  <div>
    <!--<header-menu></header-menu>-->
    <div>
      <tag></tag>
      <router-view></router-view>
    </div>
    </div>
</template>

<script>
  import headerMenu from '@/components/headerMenu'
  import tag from '@/components/tag'
  export default {
        name: "discover",
      components:{
          headerMenu,
          tag,
      }
    }
</script>

<style scoped>

</style>
