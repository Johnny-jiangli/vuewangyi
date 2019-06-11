<template>
  <div class="external">
    <div class="innerBox">
      <play-box></play-box>
      <play-content-box></play-content-box>
    </div>
  </div>

</template>

<script>
  import playBox from '../components/playBox'
  import playContentBox from '../components/playContentBox'
    export default {
        name: "playlist",
      components:{
        playBox,
        playContentBox,
      }
    }
</script>

<style scoped>
.external{
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: slategray;
  overflow-y: scroll;
  height: 2000px;
}
  .innerBox{
    background-color: #fff;
    min-width: 960px;
    width: 960px;
    min-height:1180px ;
    padding: 20px 20px;
  }
</style>
