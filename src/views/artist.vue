<template>
    <div>{{this.$route.query}}</div>
</template>

<script>
    export default {
        name: "artist",
      mounted() {
          console.log(this.$route.query)
      }
    }
</script>

<style scoped>

</style>
