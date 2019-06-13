<template>
    <div class="tagContentImg">
      <el-row :gutter="20">
        <el-col :span="6" v-for="(item,key,index) in playList" :key="index">
          <el-image
          style="width: 144px;height: 144px"
          :src="item.picUrl"
          fit="cover"
          @click="testClick(item.id)">
          </el-image>
<!--          <div class="videoPlay">-->
<!--            <span class="float-left" style="color: #fff;font-size: 12px;"><i class="el-icon-headset" style="margin-right: 10px"></i><span>{{playCount(item.playCount)}}</span></span>-->
<!--            <i class="el-icon-video-play float-right" style="color: #91acda;font-size: 20px" ></i>-->
<!--          </div>-->
<!--          <div class="demonstration" style="height: 30px;font-size: 12px" @click="clickPlay(item.id)">{{ item.name }}</div>-->
        </el-col>
      </el-row>
    </div>
</template>
<script>
    export default {
        name: "tagContentBox",
      data() {
        return {
          fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          playList:[],
        }
      },
      methods:{
          getRecommendPlayListData(){
            this.axios.get('personalized').then((res)=>{
              console.log('推荐歌单')
              console.log(res)
              this.playList = res.data.result;
            })
          },
        playCount(count){
          return parseInt(count)
        },
        getAl(){},
        clickPlay(data){
            console.log(data)
          console.log('dianji')
          this.$router.push('playlists/'+id)
        },
        testClick(id){
            console.log('测试')
            this.$router.push('playlists/'+id)
        }
      },
      computed:{

      },
      mounted() {
          this.getRecommendPlayListData()
      }
    }
</script>

<style scoped>
  .tagContentImg{
    display:flex;
    height: auto;
    -ms-flex-direction: row;
    flex-direction: row;
    flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    justify-content: space-around;
  }
  .videoPlay{
    width: 140px;
    background-color: rgba(20, 24, 36, 0.93);
    position: absolute;
    top:158px;
    opacity:0.8;
    padding: 5px 10px;
    height: 30px;
    line-height: 30px;
  }
</style>
