<template>
    <div>
      <tag></tag>
      <router-view></router-view>
</div>
</template>

<script>
  import tag from '@/components/tag'
  export default {
        name: "discover",
      components:{
          tag,
      }
    }
</script>

<style scoped>

</style>
