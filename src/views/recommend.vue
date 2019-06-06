<template>
<div>
  <div class="carousel carouselBackgroun">
    <div class="carouselItem">
      <div class="bfc">
        <el-carousel :interval="2000" arrow="always">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
  <div class="carousel">
    <div class="carouselItem recommendStyle" style="height:900px">
          <el-row type="flex" class="">
            <el-col :span="18"><div class="recommendMain">
              <recommend-title-box></recommend-title-box>
              <tag-content-box ></tag-content-box>
              <recommend-title-box></recommend-title-box>
              <tag-content-box></tag-content-box>
              <recommend-title-box></recommend-title-box>
              <tag-content-box></tag-content-box>
            </div></el-col>
            <el-col :span="6">
              <div class="recommendAside">
                <login-box></login-box>
                <aside-sub></aside-sub>
                <aside-sub></aside-sub>
                <aside-sub></aside-sub>
                <aside-sub></aside-sub>
                <aside-sub></aside-sub>
                <aside-sub></aside-sub>
                <aside-sub></aside-sub>
            </div>
            </el-col>
          </el-row>
    </div>
  </div>
</div>
</template>
<script>
  import tagContentBox from '../components/tagContentBox'
  import recommendTitleBox from '../components/recommendTitleBox'
  import loginBox from '../components/loginBox'
  import asideSub from '../components/asideSub'
    export default {
      name: "recommend",
      components:{
        recommendTitleBox,
        tagContentBox,
        loginBox,
        asideSub
      },
      data(){
        return {}
      },
      mounted() {
          console.log('recommend')
      }
    }
</script>
<style scoped>
  .carouselBackgroun{
    background-color:#42b983;
  }
  .carousel{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .recommendStyle,.recommendAside{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-top:none;
    border-bottom: none;
  }
  .recommendAside{
    border-right: none;
    height: 1500px;

    overflow: hidden;
  }
  .recommendMain{
    padding: 20px 20px;
  }
  .carouselItem{
    width: 960px;
    min-width: 960px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .aside{
    border:1px solid #ccc;
    overflow:hidden;
  }
</style>
