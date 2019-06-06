<template>
    <div>
      <header-menu></header-menu>
      <router-view></router-view>
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

</style>
