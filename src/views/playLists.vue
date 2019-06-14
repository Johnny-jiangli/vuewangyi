<template>
    <div class="m-playListsContain">
      <el-row>
        <el-col>
          <div class="">
<!--            <audio :src="audiourl"  id="audioPlay" @canplay="canPlaySong"-->
<!--                   @timeupdate="updateTime"-->
<!--                   controls></audio>-->
          </div>
          <el-button @click="deleteAllPlay">清空</el-button>
          <div v-for="(item,index) in test1" :key="index">
            {{item.name}}
            <el-button @click="deletePlay(index)">X</el-button>
          </div>
        </el-col>
      </el-row>

      <div class="m-playListsContent">
        <el-row :gutter="36">
          <el-col :span="18">
            <el-row>
              <el-col :span="8">
                <div class="cover u-cover u-cover-dj">
                  <img :src="playlist.coverImgUrl" width="85%" class="j-img" data-src="http://p3.music.126.net/LDfB3vBDIAKl60DRb_-kWg==/109951164130398043.jpg">
                  <span class="msk"></span>
                </div>
              </el-col>
              <el-col :span="16" class="vv">
                  <div class="playTitle">
                    <i class="m-icon"></i>
                    <div class="title">{{playlist.name}}</div>
                  </div>
                  <div class="btnGround playTitle">
                    <el-button type="primary" icon="el-icon-video-play" size="mini" @click="addAllPlaylist">播放</el-button>
                    <el-button  icon="el-icon-folder-add" size="mini">（{{playlist.subscribedCount}}）</el-button>
                    <el-button  icon="el-icon-share" size="mini">（{{playlist.shareCount}}）</el-button>
                  <el-button icon="el-icon-chat-dot-square" size="mini">（{{playlist.commentCount}}）</el-button>
                </div>
                  <div class="tag">
                  <span>标签:</span>
                  <el-tag size="mini" v-for="(i,key,index) in playlist.tags" :key="key">{{i}}</el-tag>
                </div>
                  <div>
                  <span>介绍: </span>
                  <span >{{playlist.description}}</span>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-table
                :data="tracks"
                stripe
                style="width: 100%">
                <el-table-column
                  width="110">
                  <template slot-scope="scope">
                    <span style="float: left">
                      {{scope.$index+1}}
                    </span>
                    <i @click="addPlaylist(scope.row)"  class="el-icon-video-play" style="font-weight: bold;font-size: 18px;float: right;cursor: pointer"></i>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="歌曲标题"
                  width="180">
                </el-table-column>
                <el-table-column
                  label="时长">
                  <template slot-scope="scope">
                    <!--                      {{scope.row.ar[0].name}}-->
                    {{transitionMoment(scope.row.dt)}}
                  </template>
                </el-table-column>
                <el-table-column
                  label="歌手"
                  prop="name"
                >
                </el-table-column>
                <el-table-column
                label="专辑"
                >
                <template slot-scope="scope">
                  {{scope.row.al.name}}
                </template>
                </el-table-column>
              </el-table>

            </el-row>
          </el-col>
          <el-col :span="6">
            <div class="rightBox">2</div>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
  import moment from 'moment'
  import {mapState} from 'vuex'
  import {changeTime} from '../common/js/changeTime';
  import {mapActions} from 'vuex'
    export default {
        name: "playLists",
      data(){
          return {
            index: -1,
            listshow: false,
            showFlag: false,
            playing: true,
            tipshow: false,
            mwidth: 0,
            time: {
              start: '00:00',
              end: '00:00'
            },
            song: {},
            albumPic: '../../../static/img/placeholder_disk_play_song.png',
            songname: '暂无歌曲',
            list: [],
            listA: [],
            audiourl:"http://m10.music.126.net/20190612161357/f45645986553890bd2a75932d005b1d2/ymusic/b36b/f8c6/f8c2/be98431026b0fdd3bc898dec9a1ab515.mp3",
            playlist:{},
            a:'',
            tracks:[],
          }
      },
      methods:{
        addAllPlaylist(){
          console.log('增加全部')
          for (let i = 0 ,n = this.tracks.length ;i < n ;i++){
            let obj =JSON.stringify(this.tracks[i]);
            this.$store.dispatch('pushPlayList',obj);
          }
        },
        deleteAllPlay(){
          this.$store.dispatch('delAllPlayList')
        },
        deletePlay(index){
          this.$store.dispatch('delPlayList',index)
        },
        pre() {
          if (this.index > 0) {
            console.log('pre');
            this.index--;
            this.item = this.list[this.index];
            this.playsong(this.index, this.item);
          }
        },
        next() {
          if (this.index < this.list.length - 1) {
            console.log('next');
            this.index++;
            this.item = this.list[this.index];
            this.playsong(this.index, this.item);
          }
        },
        _initScroll() {
          if (!this.songlistScroll) {
            this.songlistScroll = new BScroll(this.$refs.songlistWrapper, {
              click: true
            });
          } else {
            this.songlistScroll.refresh();
          }
        },
        nulllist() {
          this.list.splice(0, this.list.length);
          this.hide();
        },
        hidelist() {
          this.listshow = false;
        },
        showlist() {
          this.listshow = true;
        },
        show(item) {
//      this.albumPic = item.al.picUrl;
          this.showFlag = true;
          if (item) {
            let index = 0;
            var thisindex = 0;
            for (let i in this.list) {
              if (this.list[i].songname === item.songname) {
                thisindex = i;
                index++;
              }
            }
            if (index === 0) {
              this.list.push(item);
              this.$nextTick(() => {
                this._initScroll();
              });
              this.playsong(this.list.length - 1, item);
            } else {
              this.playsong(thisindex, item);
            }
          }
        },
        playsong(index, item) {
          console.log(index);
          this.hidelist();
          this.index = index;
          this.song = item;
          this.albumPic = item.migUrl;
          this.songname = item.songname;
          this.name = item.name;
          if (item.audiosrc !== undefined) {
            this.audiourl = item.audiosrc;
            this.$nextTick(() => {
              this.canPlaySong();
            });
          } else {
            this.get(item);
            this.canPlaySong();
          }
        },
        canPlaySong() {
          document.getElementById('audioPlay').play();
          this.playing = false;
          console.log('播放')
        },
        get(item) {
          this.$http.get(api.getSong(item.id)).then((res) => {
            console.log('加载成功');
            if (res.data.data[0].url === null) {
              console.log('歌曲加载错误');
            } else {
              this.audiourl = res.data.data[0].url;
              this.canPlaySong();
              this.$nextTick(() => {
                this.canPlaySong();
              });
            }
          }).catch((error) => {
            console.log('加载歌曲信息出错:' + error);
          });
        },
        hide() {
          this.showFlag = false;
        },
        togglePlay() {
          if (this.playing === false) {
            document.getElementById('audioPlay').pause();
            this.playing = true;
          } else {
            document.getElementById('audioPlay').play();
            this.playing = false;
          }
        },
        updateTime() {
          var myaudio = document.getElementById('audioPlay');
          var time = parseInt(myaudio.currentTime);
          var timelength = myaudio.duration;
          if (isNaN(timelength)) {
            this.tipshow = true;
          } else {
            this.tipshow = false;
            this.mwidth = time / timelength * 100;
            this.time.start = changeTime(time);
            this.time.end = changeTime(timelength);
            if (timelength === time) {
              this.togglePlay();
            }
          }
        },
        setTime(value) {
          var myaudio = document.getElementById('audioPlay');
          var timelength = myaudio.duration;
          myaudio.currentTime = timelength * value / 100;
        },
        addPlaylist(data){
          let obj =JSON.stringify(data);
          this.$store.dispatch('pushPlayList',obj);
          this.$store.dispatch('currentPlay',obj);
          this.axios.get('/song/url?id='+data.id).then(res=>{
            if (res.data.data[0].url === null) {
              console.log('歌曲加载错误');
            } else {
              this.audiourl = res.data.data[0].url;
              this.canPlaySong();
              this.$nextTick(() => {
                this.canPlaySong();
              });
            }
          })
        },
        getData(){
          console.log(this.$route.params.id)
            this.axios.get('/playlist/detail?id='+this.$route.params.id).then(res=>{
              console.log(res)
              this.playlist =res.data.playlist
              this.tracks = res.data.playlist.tracks
              console.log(this.tracks)
            })
          },
        transitionMoment(ms){
            let m = moment(ms).get('minute');
            let s = moment(ms).get('second');
            if(s <10){
              s = '0'+s
            }
            return m+':'+ s
        }
      },
      computed:mapState({test1:'playList'}),
      created() {
        this.$nextTick(() => {
          this.canPlaySong();
        });
      },
      mounted() {
          this.getData()
      }
    }
</script>

<style scoped>
  .btns{
    background: url("../assets/playbar.png") ;
  }
.m-playListsContain{
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: auto;
  /*background-color:#475669;*/
}
.m-playListsContent{
  width: 960px;
  min-width: 960px;
  min-height: 700px;
  background: white;
  padding: 10px;
}
.leftBox{
  display: flex;
  flex-direction: row;
}
.leftBox>div{
    display: flex;
    flex-direction: row;
    padding: 20px;
  }
  .rightBox{
  }
  .m-icon{
    width: 54px;
    height: 24px;
    margin-right: 10px;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    background: url(../assets/icon.png)  no-repeat 0 -243px;
  }
.playTitle{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
  .title{
    font-size: 18px;
    font-weight: bold;
  }
  .btns .prv{
    display: block;
    float: left;
    width: 28px;
    height: 28px;
    margin-right: 8px;
    margin-top: 5px;
    text-indent: -9999px;
    background: #475669 url("../assets/playbar.png") 0 -130px no-repeat;
  }
  .btns .prv:hover{
    background: #475669 url("../assets/playbar.png") -30px -130px no-repeat;
  }
  /*.btns .play:hover{*/
  /*  background: #475669 url("../assets/playbar.png") -30px -204px no-repeat;*/
  /*}*/
  .btns .next:hover{
    background: #475669 url("../assets/playbar.png") -110px -130px no-repeat;
  }
  .btns .play{
     display: block;
     float: left;
     width: 36px;
     height: 36px;
     margin-right: 8px;
     margin-top: 0;
     text-indent: -9999px;

     background: #475669 url("../assets/playbar.png") 0 -204px no-repeat;
   }
  .btns .next{
    display: block;
    float: left;
    width: 28px;
    height: 28px;
    margin-right: 8px;
    margin-top: 5px;
    text-indent: -9999px;
    background: #475669 url("../assets/playbar.png") -80px -130px no-repeat;
  }

  .tag>*{
    margin-right: 15px;
  }
.vv > div{
 margin-bottom: 20px;
}
.m-playListsContain tr,.m-playListsContain td{
    max-height: 60px;
    height: 60px;
    overflow: hidden;
  }

</style>
