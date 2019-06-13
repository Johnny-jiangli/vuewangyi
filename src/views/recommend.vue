<template>
<div class="recommendMainBox">
  <div class="carousel carouselBackgroun" v-bind:style="carouselBackgroun" >
    <div class="carouselItem">
      <div class="bfc">
        <el-carousel :interval="2000" arrow="always" @change="test">
          <el-carousel-item v-for="(item,index) in dataList" :key="index">
            <img :src="item.picUrl" @click="clickImg(item)"/>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
  <div class="carousel">
    <div class="carouselItem recommendStyle">
          <el-row type="flex" class="">
            <el-col :span="18">
<!--              <div class="recommendMain">-->
<!--              <recommend-title-box></recommend-title-box>-->
              <tag-content-box ></tag-content-box>
              <!--<recommend-title-box></recommend-title-box>-->
              <!--<tag-content-box></tag-content-box>-->
              <!--<recommend-title-box></recommend-title-box>-->
              <!--<tag-content-box></tag-content-box>-->
<!--            </div>-->
            </el-col>
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
        return {
          carouselBackgroun:{
            backgroundImage: 'http://p1.music.126.net/XL883PoZ7LuOafyZ9bixrw==/109951164138100218.jpg',
            backgroundRepeat: 'repeat-x'
          },

          dataList:[
            {
              picUrl : "http://p1.music.126.net/ftH-xPfuregxpeM-Ns-ZXA==/109951164138092434.jpg",
              url : "/song?id=1370897787",
              targetId : "1370897787",
              backgroundUrl : "http://p1.music.126.net/XL883PoZ7LuOafyZ9bixrw==/109951164138100218.jpg",
              targetType : "1",
              monitorType: "",
              monitorImpress: "",
              monitorClick: ""
            },
            {
              picUrl : "http://p1.music.126.net/9j1WIDsg6Iffm4PEh5zaLA==/109951164138101416.jpg",
              url : "/playlist?id=2832903555",
              targetId : "2832903555",
              backgroundUrl : "http://p1.music.126.net/_V9qbqoJoqkQfjs267qg6Q==/109951164138105604.jpg",
              targetType : "1000",
              monitorType: "",
              monitorImpress: "",
              monitorClick: ""
            },
            {
              picUrl : "http://p1.music.126.net/jqLRnokuYNIeatGmXtxsow==/109951164138668142.jpg",
              url : "/mv?id=10871560",
              targetId : "10871560",
              backgroundUrl : "http://p1.music.126.net/0xFfQlbKmbXyZR6dkkUe3g==/109951164138665687.jpg",
              targetType : "1004",
              monitorType: "",
              monitorImpress: "",
              monitorClick: ""
            },
            {
              picUrl : "http://p1.music.126.net/6KW3ek-RNagXdPh-caxlOQ==/109951164138118639.jpg",
              url : "https://music.163.com/store/newalbum/detail?id=79630616",
              targetId : "0",
              backgroundUrl : "http://p1.music.126.net/AcWrtMC-2Sh1OnbPJvw1dw==/109951164138278241.jpg",
              targetType : "3000",
              monitorType: "",
              monitorImpress: "",
              monitorClick: ""
            },
            {
              picUrl : "http://p1.music.126.net/s5cRdCPRCEiwF_GSjzdxkA==/109951164139354144.jpg",
              url : "/album?id=79695997",
              targetId : "79695997",
              backgroundUrl : "http://p1.music.126.net/m5O6PAHcI0mXKlqFLICJ3g==/109951164138196134.jpg",
              targetType : "10",
              monitorType: "",
              monitorImpress: "",
              monitorClick: ""
            },
            {
              picUrl : "http://p1.music.126.net/q2B8r5WeRFf8RwdyjrwGKw==/109951164138123358.jpg",
              url : "/album?id=79638731",
              targetId : "79638731",
              backgroundUrl : "http://p1.music.126.net/Zz3PD87A69J0Lbzt7Kqdmw==/109951164138121403.jpg",
              targetType : "10",
              monitorType: "",
              monitorImpress: "",
              monitorClick: ""
            },
            {
              picUrl : "http://p1.music.126.net/AsVX1ylvYGDGP1lsSDRKBw==/109951164139338375.jpg",
              url : "/album?id=79696039",
              targetId : "79696039",
              backgroundUrl : "http://p1.music.126.net/KRyuYnme-qMDt7Repnh65w==/109951164138183949.jpg",
              targetType : "10",
              monitorType: "",
              monitorImpress: "",
              monitorClick: ""
            },
            {
              picUrl : "http://p1.music.126.net/PxrSnAf8BmbrGp-M7rTrjw==/109951164138132820.jpg",
              url : "/playlist?id=2837141097",
              targetId : "2837141097",
              backgroundUrl : "http://p1.music.126.net/miCj-2zGY_JfGEcfCadH9w==/109951164138132317.jpg",
              targetType : "1000",
              monitorType: "",
              monitorImpress: "",
              monitorClick: ""
            },
            {
              picUrl : "http://p1.music.126.net/SoSfDCBTdQUBtBwaIZeFgw==/109951164138138245.jpg",
              url : "https://music.163.com/m/at/5cf8d6fff2124523cc129e60",
              targetId : "0",
              backgroundUrl : "http://p1.music.126.net/uUSCRA9sTJmaNYurEcKZkA==/109951164138134389.jpg",
              targetType : "3000",
              monitorType: "",
              monitorImpress: "",
              monitorClick: ""
            }
          ],
        }
      },
      methods:{
        getData(){
          this.axios.get('/playlist/catlist').then(res=>{
            console.log(res)
          })
        },
        test(name,label){
          console.log('切换')
          console.log(name)
          console.log(label)
          // this.$set(this.carouselBackgroun,{backgroundImage:this.dataList[name].backgroundUrl,backgroundRepeat:'repeat-y'})
          this.$set(this.carouselBackgroun = {backgroundImage:'url('+this.dataList[name].backgroundUrl+')',backgroundRepeat:'repeat-x'})
          console.log(this.carouselBackgroun)

        },
        clickImg(item){
          console.log(item)
          this.$router.push('playlists/'+item.targetId)
        },

      },
      mounted() {
          console.log('recommend')
          this.getData();
      }
    }
</script>
<style scoped>
  .recommendMainBox{
    width: 100%;
    height: 100%;
  }
  .carouselBackgroun{
    /*background-color:#42b983;*/
    /*background: url("http://p1.music.126.net/uUSCRA9sTJmaNYurEcKZkA==/109951164138134389.jpg") repeat-x;*/
    /*background: url(../assets/uU.jpg) repeat-x;*/

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
