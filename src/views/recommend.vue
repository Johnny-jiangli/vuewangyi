<template>
  <div>
        <music-carousel></music-carousel>
        <div style="width: 986px;margin: 0 auto;">
          <music-index-content></music-index-content>
        </div>
  </div>
</template>
<script>
  import musicCarousel from '../components/musicCarousel'
  import musicIndexContent from '../components/musicIndexContent'
  import tag from '../components/tag'
  export default {
    data(){
      return{}
    },
    components:{
      tag,
      musicIndexContent,
      musicCarousel
    }
  }
</script>

<style scoped>
</style>
