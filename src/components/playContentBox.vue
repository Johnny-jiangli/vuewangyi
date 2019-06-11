<template>
  <div>
    <div class="tagContentImg">
      <div class="tagContentBox">
        <div v-for="(item,key,index) in playList" :key="key" style="position: relative;padding: 20px">
          <el-image
            style="width: 140px; height: 188px"
            :src="item.coverImgUrl"
            fit="cover"></el-image>
          <div class="videoPlay">
            <span class="float-left" style="color: #fff;font-size: 16px;"><i class="el-icon-headset" style="margin-right: 10px"></i><span>{{item.playCount}}</span></span>
            <i class="el-icon-video-play float-right" style="color: #91acda;font-size: 20px" ></i>
          </div>
          <div class="demonstration" style="height: 50px;width: 140px;" >{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        playList:[],
      }
    },
    methods:{
      getPlayListData(){
        this.axios.get('/top/playlist?limit=35').then(res=>{
          console.log(res)
          this.playList = res.data.playlists;
        })
      },

    },
    mounted(){
      this.getPlayListData()
    }
  }
</script>

<style scoped>
  .videoPlay{
    width: 140px;
    background-color: rgba(20, 24, 36, 0.93);
    position: absolute;
    top:178px;
    opacity:0.8;
    padding: 5px 10px;
    height: 30px;
    line-height: 30px;

  }
  .tagContentBox{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
