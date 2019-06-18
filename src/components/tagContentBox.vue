<template>
    <div id="tagContenWarp">
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
        <el-row>
          <el-carousel :interval="50000" arrow="always" height="180px" >
            <el-carousel-item v-for="carouselItem in 2" :key="carouselItem">
              <div v-if="carouselItem === 1" style="display: flex;flex-direction: row;align-items: center;">
                <div class="mCarouselItem">
                    <img :src="albums[0].picUrl" alt="" >
                    <a :title="albums[0].name"  :href="formatUrl(albums[0].id)" class="msk"></a>
                  <p style="font-size: 16px;height:20px;line-height: 20px;color: #99a9bf;margin: 0 ;padding: 0 "><a href="javascript:;" >{{albums[0].name}}</a></p>
                  <p style="font-size: 16px;height: 20px;line-height: 20px;color: #99a9bf;margin: 0 0;padding: 0 0"><a href="javascript:;">{{albums[0].artist.name}}</a></p>
                </div>
                <div class="mCarouselItem">
                  <img :src="albums[1].picUrl" alt="" >
                  <a :title="albums[1].name"  :href="formatUrl(albums[1].id)" class="msk"></a>
                  <p style="font-size: 16px;height:20px;line-height: 20px;color: #99a9bf;margin: 0 ;padding: 0 "><a href="javascript:;" >{{albums[1].name}}</a></p>
                  <p style="font-size: 16px;height: 20px;line-height: 20px;color: #99a9bf;margin: 0 0;padding: 0 0"><a href="javascript:;">{{albums[1].artist.name}}</a></p>
                </div>
                <div class="mCarouselItem">
                  <img :src="albums[2].picUrl" alt="">
                  <a :title="albums[2].name"  :href="formatUrl(albums[2].id)" class="msk"></a>
                  <p style="font-size: 16px;height:20px;line-height: 20px;color: #99a9bf;margin: 0 ;padding: 0 "><a href="javascript:;" >{{albums[2].name}}</a></p>
                  <p style="font-size: 16px;height: 20px;line-height: 20px;color: #99a9bf;margin: 0 0;padding: 0 0"><a href="javascript:;">{{albums[2].artist.name}}</a></p>
                </div >
                <div class="mCarouselItem">
                  <img :src="albums[3].picUrl" alt="" >
                  <a :title="albums[3].name"  :href="formatUrl(albums[3].id)" class="msk"></a>
                  <p style="font-size: 16px;height:20px;line-height: 20px;color: #99a9bf;margin: 0 ;padding: 0 "><a href="javascript:;" >{{albums[3].name}}</a></p>
                  <p style="font-size: 16px;height: 20px;line-height: 20px;color: #99a9bf;margin: 0 0;padding: 0 0"><a href="javascript:;">{{albums[3].artist.name}}</a></p>
                </div>
                <div class="mCarouselItem">
                  <img :src="albums[4].picUrl" alt="" >
                  <a :title="albums[4].name"  :href="formatUrl(albums[4].id)" class="msk"></a>
                  <p style="font-size: 16px;height:20px;line-height: 20px;color: #99a9bf;margin: 0 ;padding: 0 "><a href="javascript:;" >{{albums[4].name}}</a></p>
                  <p style="font-size: 16px;height: 20px;line-height: 20px;color: #99a9bf;margin: 0 0;padding: 0 0"><a href="javascript:;">{{albums[4].artist.name}}</a></p>
                </div>
              </div>
              <div v-else-if="carouselItem === 2" style="display: flex;flex-direction: row;align-items: center">
                <div class="mCarouselItem">
                  <img :src="albums[5].picUrl" alt="" >
                  <a :title="albums[5].name"  :href="formatUrl(albums[5].id)" class="msk"></a>
                  <p style="font-size: 16px;height:20px;line-height: 20px;color: #99a9bf;margin: 0 ;padding: 0 "><a href="javascript:;" >{{albums[5].name}}</a></p>
                  <p style="font-size: 16px;height: 20px;line-height: 20px;color: #99a9bf;margin: 0 0;padding: 0 0"><a href="javascript:;">{{albums[5].artist.name}}</a></p>
                </div>
                <div class="mCarouselItem">
                  <img :src="albums[6].picUrl" alt="" >
                  <a :title="albums[6].name"  :href="formatUrl(albums[6].id)"class="msk"></a>
                  <p style="font-size: 16px;height:20px;line-height: 20px;color: #99a9bf;margin: 0 ;padding: 0 "><a href="javascript:;" >{{albums[6].name}}</a></p>
                  <p style="font-size: 16px;height: 20px;line-height: 20px;color: #99a9bf;margin: 0 0;padding: 0 0"><a href="javascript:;">{{albums[6].artist.name}}</a></p>
                </div>
                <div class="mCarouselItem">
                  <img :src="albums[7].picUrl" alt="">
                  <a :title="albums[7].name"  :href="formatUrl(albums[7].id)" class="msk"></a>
                  <p style="font-size: 16px;height:20px;line-height: 20px;color: #99a9bf;margin: 0 ;padding: 0 "><a href="javascript:;" >{{albums[7].name}}</a></p>
                  <p style="font-size: 16px;height: 20px;line-height: 20px;color: #99a9bf;margin: 0 0;padding: 0 0"><a href="javascript:;">{{albums[7].artist.name}}</a></p>
                </div >
                <div class="mCarouselItem">
                  <img :src="albums[8].picUrl" alt="" >
                  <a :title="albums[8].name"  :href="formatUrl(albums[8].id)" class="msk"></a>
                  <p style="font-size: 16px;height:20px;line-height: 20px;color: #99a9bf;margin: 0 ;padding: 0 "><a href="javascript:;" >{{albums[8].name}}</a></p>
                  <p style="font-size: 16px;height: 20px;line-height: 20px;color: #99a9bf;margin: 0 0;padding: 0 0"><a href="javascript:;">{{albums[8].artist.name}}</a></p>
                </div>
                <div class="mCarouselItem">
                  <img :src="albums[9].picUrl" alt="" >
                  <a :title="albums[9].name" :href="formatUrl(albums[9].id)" class="msk"></a>
                  <p style="font-size: 16px;height:20px;line-height: 20px;color: #99a9bf;margin: 0 ;padding: 0 "><a href="javascript:;" >{{albums[9].name}}</a></p>
                  <p style="font-size: 16px;height: 20px;line-height: 20px;color: #99a9bf;margin: 0 0;padding: 0 0"><a href="javascript:;">{{albums[9].artist.name}}</a></p>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </el-row>
      </div>
      <div>
        <div style="padding:10px 20px">
          <div class="v-hd2">
            <a href="/discover/toplist" class="tit f-ff2 f-tdn">榜单</a>
            <span class="more"><a href="/discover/toplist" class="s-fc3">更多</a><i class="cor s-bg s-bg-6">&nbsp;</i></span>
          </div>
        </div>
        <el-row :gutter="20" class="tagContentImg" style="border:1px #99a9bf solid;padding:10px 10px;margin: 0 20px">
          <el-col :span="8" style="background-color: #99a9bf">
              <dl>
                <dt>
                  <h3>
                    {{listOneName}}
                  </h3>
                </dt>
                <dd>
                  <ol>
                    <li v-for="listOneItem in listOne">
                      <a href="">
                        {{listOneItem.name}}
                      </a>
                      <div class="oper">
                        <a href="#" class="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1371516984" data-res-action="play" data-res-from="31" data-res-data="3779629"></a>
                        <a href="#" class="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1371516984" data-res-action="addto" data-res-from="31" data-res-data="3779629"></a>
                        <a href="#" class="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1371516984" data-res-action="subscribe"></a>
                      </div>
                    </li>
                  </ol>
                </dd>
                <dd style="text-align: right">更多</dd>
              </dl>
          </el-col>
          <el-col :span="8" style="background-color: #91acda">
            <dl>
              <dt>
                <h3>{{listTwoName}}</h3>
              </dt>
              <dd>
                <ol>
                  <li v-for="listTwoItem in listTwo">
                    <a href="">
                      {{listTwoItem.name}}
                    </a>
                    <div class="oper">
                      <a href="#" class="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1371516984" data-res-action="play" data-res-from="31" data-res-data="3779629"></a>
                      <a href="#" class="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1371516984" data-res-action="addto" data-res-from="31" data-res-data="3779629"></a>
                      <a href="#" class="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1371516984" data-res-action="subscribe"></a>
                    </div>
                  </li>
                </ol>
              </dd>
              <dd style="text-align: right">更多</dd>
            </dl>
          </el-col>
          <el-col :span="8">
            <dl>
              <dt>
                <h3>{{listThereName}}</h3>
              </dt>
              <dd>
                <ol>
                  <li v-for="listThereItem in listThere">
                    <a href="">
                      {{listThereItem.name}}
                    </a>
                    <div class="oper">
                      <a href="#" class="s-bg s-bg-11" title="播放" hidefocus="true" data-res-type="18" data-res-id="1371516984" data-res-action="play" data-res-from="31" data-res-data="3779629"></a>
                      <a href="#" class="u-icn u-icn-81" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="1371516984" data-res-action="addto" data-res-from="31" data-res-data="3779629"></a>
                      <a href="#" class="s-bg s-bg-12" title="收藏" hidefocus="true" data-res-level="0" data-res-fee="8" data-res-type="18" data-res-id="1371516984" data-res-action="subscribe"></a>
                    </div>
                  </li>
                </ol>
              </dd>
              <dd style="text-align: right">更多</dd>
            </dl>
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
          albums:[],
          listOne:[],
          listTwo:[],
          listThere:[],
          listOneName:'',
          listTwoName:'',
          listThereName:''
        }
      },
      methods:{
          getAlbumData(){
            this.axios.get('/top/album?offset=0&limit=10').then(res=>{
              console.log('新碟上架')
              console.log(res)
              this.albums = res.data.albums
            })
          },

        getRecommendPlayListData(){
            this.axios.get('personalized').then((res)=>{
              console.log('推荐歌单')
              console.log(res)
              this.playList = res.data.result.slice(0,8);
            })
          },
        getListDataId(){
           return [this.axios.get('/top/list?idx=0'),this.axios.get('/top/list?idx=1'),this.axios.get('/top/list?idx=2')]
        },
        // getListDataId2(){
        //   return this.axios.get('/top/list?idx=1')
        // },
        // getListDataId3(){
        //   return this.axios.get('/top/list?idx=2')
        // },

        getSuoData(){
          this.axios.all(this.getListDataId()).then(
            this.axios.spread((acct, perms,a) =>{
              console.log('3个请求执行完了')

              console.log(acct.data.playlist.name)
              console.log(perms.data.playlist.name)
              console.log(a.data.playlist.name)
              this.listOne=acct.data.playlist.tracks.splice(0,10);
              this.listTwo=perms.data.playlist.tracks.splice(0,10);
              this.listThere=a.data.playlist.tracks.splice(0,10);
              this.listOneName = acct.data.playlist.name
              this.listTwoName=perms.data.playlist.name;
              this.listThereName=a.data.playlist.name;
            })
          )
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
        },
        formatUrl(id){
          return '/album?id='+id
        }
      },
      computed:{

      },
      mounted() {
          this.getRecommendPlayListData()
        this.getAlbumData()
        this.getSuoData();
      }
    }
</script>

<style scoped>
   .msk {
    width: 118px;
    height: 100px;
    background:url("../assets/coverall.png") 0 -570px no-repeat;
  }
   .msk {
    position: absolute;
    top: 5px;
    left: 12px;
     z-index: 99999;
  }
  .mCarouselItem{
    position: relative;
    padding: 5px 15px 10px 15px;
    top: 15px;
    left: 30px;
    height: 150px;
    width: 128px;
    text-overflow: ellipsis;
    white-space: nowrap;/*禁止自动换行*/
    overflow: hidden;
  }
   .mCarouselItemImg{

   }
  .mCarouselItem img{
    width: 100px;
    height: 100px;
  }
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
