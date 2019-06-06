<template>
  <div style="height: 100%;width: 100%;overflow-x:hidden;-ms-overflow-y:scroll;overflow-y:scroll;overscroll-behavior-y: auto">
    <header-menu></header-menu>
      <tag></tag>
      <router-view></router-view>
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
