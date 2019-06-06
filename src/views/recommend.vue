<template>
<div class="recommendMainBox">
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
                <div style="padding:5px 15px;">
                  <div style="border-bottom: 2px solid #ccc;height:35px">
                    <div class="float-left"><h5>入驻歌手</h5></div>
                    <div class="float-right">更多 <i class="el-icon-d-arrow-right" style="color: red"></i></div>
                  </div>
                </div>
                <div class="clearfix"></div>
                <aside-sub></aside-sub>
                <aside-sub></aside-sub>
                <aside-sub></aside-sub>
                <aside-sub></aside-sub>
                <aside-sub></aside-sub>
                <aside-sub></aside-sub>
                <aside-sub></aside-sub>
                <div class="yinyueren">
                  <el-button size="mini">申请成为音乐人</el-button>
                </div>
                <div style="padding:5px 15px;">
                  <div style="border-bottom: 2px solid #ccc;height:35px">
                    <div class="float-left"><h5>热门主播</h5></div>
                    <div class="float-right">更多 <i class="el-icon-d-arrow-right" style="color: red"></i></div>
                  </div>
                </div>
                <div class="clearfix"></div>
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
  .recommendMainBox{
    width: 100%;
  }
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
  .yinyueren{
    display: flex;
    flex-direction: row;
    justify-items: center;
    justify-content: center;
  }
</style>
