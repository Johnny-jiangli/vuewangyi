<template>
  <div class="external">
    <div class="innerBox">
      <play-box :title="title"></play-box>
      <play-content-box></play-content-box>
    </div>
  </div>

</template>

<script>
  import playBox from '../components/playBox'
  import playContentBox from '../components/playContentBox'
    export default {
        name: "playlist",
      data(){
          return {
            title:''
          }
      },
      components:{
        playBox,
        playContentBox,
      },
      computed:{
        tit(){

          return this.title === '全部歌单'? '全部': this.$route.params.cat
        }
      },
      methods:{
          getRouteTitleData(){
            console.log('路由信息')
            console.log(this.$route)
            this.title = this.$route.meta.title
          }
      },
      mounted() {
          this.getRouteTitleData()

      }
    }
</script>

<style scoped>
.external{
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: slategray;
}
  .innerBox{
    background-color: #fff;
    min-width: 960px;
    width: 960px;
    /*min-height:1180px ;*/
    padding: 20px 20px;
  }
</style>
