<template>
    <div>
      <div class="g-btmbar">
        <div class="">
          <audio :src="audiourl" id="audioPlay" @canplay="canPlaySong"
                 @timeupdate="updateTime"
          ></audio>
        </div>
        <div class="m-playbar m-playbar-unlock">
          <div class="wrap" id="g_player">
            <div class="btns">
              <a href="javascript:;" hidefocus="true" data-action="prev" class="prv" title="上一首(ctrl+←)">上一首</a>
              <a href="javascript:;" hidefocus="true" data-action="play" class="play j-flag" title="播放/暂停(p)">播放/暂停</a>
              <a href="javascript:;" hidefocus="true" data-action="next" class="next" title="下一首(ctrl+→)">下一首</a>
            </div>
          </div>
        </div>
        <div class="progress">
          <progressslider :mwidth="mwidth" @change="setTime"></progressslider>
          <div class="time">
            <span id="cur">{{time.start}}</span>
            <span id="total">{{time.end}}</span>
          </div>
        </div>
      </div>
      <el-button @click="fn">+</el-button>
      {{this.$store.state.count}}
      {{test1}}
    </div>
</template>

<script>
  import Progressslider from './Progressslider/Progressslider.vue';
  import {mapState} from 'vuex'
  import {changeTime} from '../common/js/changeTime';
  export default {
        name: "player",
    data(){
          return{
            mwidth: 0,
            audiourl:"http://m10.music.126.net/20190612173251/7e2d11182ee782ddc4229fd238a46f1a/ymusic/6b92/2350/20dd/998837ccdd15253f0d85eaf95cb97786.flac",
            time: {
              start: '00:00',
              end: '00:00'
            },
          }
    },
    computed:mapState({test1:'playList'}),
    methods:{
          fn(){
           this.$store.dispatch('increment')
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
        this.axios.get('/song/url?id='+data.id).then(res=>{
          console.log(res)
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
        this.axios.get('/playlist/detail?id=24381616').then(res=>{
          console.log('获取信息')
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
    created() {
      this.$nextTick(() => {
        this.canPlaySong();
      });
    },
    components:{
      Progressslider
    }
    }
</script>

<style scoped>
  .g-btmbar{
    width: 100%;
    background: #475669;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
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
  .progress{
    width:60%;
    padding-left:12%;
    padding-right:12%;
    height: 24px;
    margin:0 auto;
    position:relative  ;
  }

  .time span
           {
    position: absolute;
             top: 25%;
             font-size:12px;
             opacity: .8;
             color: #141824
           }


  #cur{
    left:0
  }
  #total{
    right:0
  }

</style>
