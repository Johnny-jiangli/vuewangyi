<template>
    <div class="">
      <div>
        <div style="padding:10px 20px">
          <div class="v-hd2">
            <a href="/discover/playlist/" class="tit f-ff2 f-tdn">热门推荐</a>
            <div class="tab">
              <a href="/discover/playlist/?cat=%E5%8D%8E%E8%AF%AD" class="s-fc3">华语</a>
              <span class="line">|</span>
              <a href="/discover/playlist/?cat=%E6%B5%81%E8%A1%8C" class="s-fc3">流行</a>
              <span class="line">|</span>
              <a href="/discover/playlist/?cat=%E6%91%87%E6%BB%9A" class="s-fc3">摇滚</a>
              <span class="line">|</span>
              <a href="/discover/playlist/?cat=%E6%B0%91%E8%B0%A3" class="s-fc3">民谣</a>
              <span class="line">|</span>
              <a href="/discover/playlist/?cat=%E7%94%B5%E5%AD%90" class="s-fc3">电子</a>
            </div>
            <span class="more"><a href="/discover/playlist/" class="s-fc3">更多</a><i class="cor s-bg s-bg-6">&nbsp;</i></span>
          </div>
        </div>
        <el-row :gutter="20" class="tagContentImg">
          <el-col :span="6" v-for="(item,key,index) in playList" :key="index" style="position: relative;margin-bottom: 50px">
            <el-image
              style="width: 144px;height: 144px"
              :src="item.picUrl"
              fit="cover"
              @click="testClick(item.id)">
            </el-image>
            <div class="videoPlay">
            <span style="color: #fff;font-size: 12px;display: flex;flex-direction: row;justify-content: space-between;align-items: baseline">
              <div style="font-size: 12px">
                <i class="el-icon-headset" style="margin-left: 10px"></i>
                <span>{{playCount(item.playCount)}}</span>
              </div>
              <i class="el-icon-video-play" style="color: #91acda;margin-right: 10px;font-size: 20px" ></i>
            </span>

            </div>
            <a href="javascript:;" class="demonstration" style="height: 30px;font-size: 14px;color: #000;cursor: pointer;" @click="clickPlay(item.id)">{{ item.name }}</a>
          </el-col>
        </el-row>
      </div>
      <div>
        <div  style="padding:10px 20px" >
          <div class="v-hd2">
            <a href="/discover/album/" class="tit f-ff2 f-tdn">新碟上架</a>
            <span class="more"><a href="/discover/album/" class="s-fc3">更多</a><i class="cor s-bg s-bg-6">&nbsp;</i></span>
          </div>
        </div>
        <el-row :gutter="20" class="tagContentImg">
          <el-col :span="6" v-for="(item,key,index) in playList" :key="index" style="position: relative;margin-bottom: 50px">
            <el-image
              style="width: 144px;height: 144px"
              :src="item.picUrl"
              fit="cover"
              @click="testClick(item.id)">
            </el-image>
            <div class="videoPlay">
            <span style="color: #fff;font-size: 12px;display: flex;flex-direction: row;justify-content: space-between;align-items: baseline">
              <div style="font-size: 12px">
                <i class="el-icon-headset" style="margin-left: 10px"></i>
                <span>{{playCount(item.playCount)}}</span>
              </div>
              <i class="el-icon-video-play" style="color: #91acda;margin-right: 10px;font-size: 20px" ></i>
            </span>

            </div>
            <a href="javascript:;" class="demonstration" style="height: 30px;font-size: 14px;color: #000;cursor: pointer;" @click="clickPlay(item.id)">{{ item.name }}</a>
          </el-col>
        </el-row>
      </div>
      <div>
        <div style="padding:10px 20px">
          <div class="v-hd2">
            <a href="/discover/toplist" class="tit f-ff2 f-tdn">榜单</a>
            <span class="more"><a href="/discover/toplist" class="s-fc3">更多</a><i class="cor s-bg s-bg-6">&nbsp;</i></span>
          </div>
        </div>
        <el-row :gutter="20" class="tagContentImg">
          <el-col :span="6" v-for="(item,key,index) in playList" :key="index" style="position: relative;margin-bottom: 50px">
            <el-image
              style="width: 144px;height: 144px"
              :src="item.picUrl"
              fit="cover"
              @click="testClick(item.id)">
            </el-image>
            <div class="videoPlay">
            <span style="color: #fff;font-size: 12px;display: flex;flex-direction: row;justify-content: space-between;align-items: baseline">
              <div style="font-size: 12px">
                <i class="el-icon-headset" style="margin-left: 10px"></i>
                <span>{{playCount(item.playCount)}}</span>
              </div>
              <i class="el-icon-video-play" style="color: #91acda;margin-right: 10px;font-size: 20px" ></i>
            </span>

            </div>
            <a href="javascript:;" class="demonstration" style="height: 30px;font-size: 14px;color: #000;cursor: pointer;" @click="clickPlay(item.id)">{{ item.name }}</a>
          </el-col>
        </el-row>
      </div>
    </div>
</template>
<script>
    export default {
        name: "tagContentBox",
      props:{
        title: {
          type:String,
          default:()=>{
            return 'test'
          }
        },
        items:{
          type:Array,
          default:()=>{
            return [{id:0,title:'华语',label:'1'},{id:1,title:'华语',label:'1'},{id:2,title:'华语',label:'1'}]
          }
        }
      },
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
              this.playList = res.data.result.slice(0,8);
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
      computed:{},
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
    padding: 20px 20px 20px 20px;
  }
  .videoPlay{
    width: 144px;
    background-color: rgba(20, 24, 36, 0.93);
    position: absolute;
    top:115px;
    opacity:0.8;
    height: 30px;
    line-height: 30px;
  }
  .v-hd2 {
    height: 33px;
    padding: 0 10px 0 34px;
    border-bottom: 2px solid #C10D0C;
    background: url("../assets/index.png") -225px -156px no-repeat;
  }
  .v-hd2 .tit {
    float: left;
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
  }
  .f-tdn, .f-tdn:hover {
    text-decoration: none;
  }
  .f-ff2 {
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  }
  a, a *, .f-hand, .f-hand * {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: #333;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-text-size-adjust: none;
  }
  .v-hd2 .tab {
    float: left;
    margin: 7px 0 0 20px;
  }
  .v-hd2 .more {
    float: right;
    margin-top: 9px;
    _margin-top: 11px;
  }
  .v-hd2 .more .cor, .v-hd3 .more .cor {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 4px;
    vertical-align: middle;
  }

  .s-bg-6 {
    background: url("../assets/index.png") 0 -240px no-repeat;
  }
  .s-bg, .v-hd2, .n-disk li {
    /*background: url(../assets/index.png) 0 -240px no-repeat;*/
  }
</style>
